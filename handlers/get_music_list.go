package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
)

type musicListjson struct {
	ID          uint
	Title       string
	TrackNumber string
	ArtistName  string
	FilePath    string
}

func GetMusicList(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var musicList models.Album
	var artist models.Artist
	var musicListData []musicListjson
	q := r.URL.Query()
	albumId, _ := strconv.Atoi(q.Get("album_id"))

	db.Preload("SongId").Where("id = ?", albumId).Find(&musicList)

	db.First(&artist, musicList.ArtistId)

	for _, music := range musicList.SongId {
		data := musicListjson{
			ID:          music.ID,
			Title:       music.Title,
			TrackNumber: music.TrackNumber,
			ArtistName:  artist.Name,
			FilePath:    music.FilePath,
		}
		musicListData = append(musicListData, data)
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(musicListData); err != nil {
		http.Error(w, "Encode Failed", http.StatusInternalServerError)
		return
	}
}
