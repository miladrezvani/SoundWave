package routes

import (
	"net/http"

	"github.com/miladrezvani/SoundWave/handlers"
	"github.com/miladrezvani/SoundWave/services"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/", handlers.MusicHandler)
	mux.HandleFunc("/stream", services.StreamAudio)
}
