package services

import (
	"net/http"
	"os"
)

func StreamAudio(w http.ResponseWriter, r *http.Request) {
	file, err := os.Open("../music/file.mp3")
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
