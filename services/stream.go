package services

import (
	"net/http"
	"os"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
)

func StreamAudio(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var song models.Song

	q := r.URL.Query()
	music_id := q.Get("music_id")

	if err := db.First(&song, music_id).Error; err != nil {
		http.Error(w, "Song not found", http.StatusNotFound)
		return
	}

	file, err := os.Open(song.FilePath)
	if err != nil {
		http.Error(w, "Could not open audio file", http.StatusInternalServerError)
		return
	}
	defer file.Close()

	info, err := file.Stat()
	if err != nil {
		http.Error(w, "Could not stat file", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "audio/mpeg")

	http.ServeContent(w, r, info.Name(), info.ModTime(), file)
}
