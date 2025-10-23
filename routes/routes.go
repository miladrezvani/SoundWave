package routes

import (
	"net/http"

	"github.com/miladrezvani/SoundWave/handlers"
	"github.com/miladrezvani/SoundWave/services"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/get/albums", handlers.GetAlbums)
	mux.HandleFunc("/stream", services.StreamAudio)
	mux.HandleFunc("/scan/music", handlers.ScanMusicHandler)
}
