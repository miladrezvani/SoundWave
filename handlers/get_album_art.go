package handlers

import (
	"net/http"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
)

func GetAlubmsArt(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var album = models.Album{}

	q := r.URL.Query()
	id := q.Get("album_id")

	if err := db.First(&album, id).Error; err != nil {
		http.Error(w, "Album not found", http.StatusNotFound)
		return
	}

	if album.AlbumArt == nil {
		http.Error(w, "Album art not available", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "image/jpeg")

	if _, err := w.Write(album.AlbumArt); err != nil {
		http.Error(w, "Failed to send image", http.StatusInternalServerError)
	}
}
