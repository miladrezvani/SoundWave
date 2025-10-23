package handlers

import (
	"encoding/base64"
	"encoding/json"
	"net/http"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
	"github.com/miladrezvani/SoundWave/utils"
)

func GetAlbums(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var albums []models.Album
	db.Scopes(utils.Paginate(r)).Find(&albums)

	for i, album := range albums {
		if album.AlbumArt != nil {
			encoded := base64.StdEncoding.EncodeToString(album.AlbumArt)
			albums[i].AlbumArt = []byte(encoded)
		}
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(albums); err != nil {
		http.Error(w, "Encode Failed", http.StatusInternalServerError)
		return
	}
}
