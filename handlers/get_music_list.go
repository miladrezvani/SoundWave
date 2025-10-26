package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
)

func GetMusicList(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var musicList models.Album

	q := r.URL.Query()
	albumId, _ := strconv.Atoi(q.Get("album_id"))

	db.Preload("SongId").Where("id = ?", albumId).Find(&musicList)

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(musicList.SongId); err != nil {
		http.Error(w, "Encode Failed", http.StatusInternalServerError)
		return
	}
}
