package handlers

import (
	"log"
	"net/http"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services"
	"github.com/miladrezvani/SoundWave/services/database"
	"github.com/miladrezvani/SoundWave/utils"
	"go.senan.xyz/taglib"
	"gorm.io/gorm"
)

func ScanMusicHandler(w http.ResponseWriter, r *http.Request) {
	go func(db *gorm.DB) {

		homeDir := utils.GetRoot()
		services.ScanMusic(homeDir, "", func(path string, ext string) error {
			tx := db.Begin()

			defer func() {
				if r := recover(); r != nil {
					tx.Rollback()
				}
			}()

			var err error
			tags, err := taglib.ReadTags(path)
			if err != nil {
				log.Println("error reading file: ", path)
			}

			imageBytes, err := taglib.ReadImage(path)
			if err != nil {
				log.Println("error reading Image: ", path)
			}

			data := utils.GetMusicTags(tags, imageBytes)
			artist := models.Artist{Name: data.ArtistName}
			db.Where("name = ?", data.ArtistName).First(&artist)
			if artist.ID == 0 {
				if err := tx.Create(&artist).Error; err != nil {
					tx.Rollback()
					return err
				}
			}
			album := models.Album{AlbumName: data.AlbumName, AlbumArt: data.AlbumArt, Genre: data.Genre, ReleaseDate: data.ReleaseDate, ArtistId: artist.ID}
			db.Where("album_name = ? AND genre = ? AND release_date = ?", data.AlbumName, data.Genre, data.ReleaseDate).First(&album)
			if album.ID == 0 {
				if err := tx.Create(&album).Error; err != nil {
					tx.Rollback()
					return err
				}
			}
			song := models.Song{Title: data.Title, TrackNumber: data.TrackNumber, FilePath: path, Format: ext, AlbumId: album.ID}
			db.Where("title = ? AND track_number = ? AND file_path = ? AND format = ?", data.Title, data.TrackNumber, path, ext).First(&song)
			if song.ID == 0 {
				if err := tx.Create(&song).Error; err != nil {
					tx.Rollback()
					return err
				}
			}
			return tx.Commit().Error
		})
	}(database.GormDB)
	w.WriteHeader(http.StatusAccepted)
}
