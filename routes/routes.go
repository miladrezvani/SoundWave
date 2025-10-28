package routes

import (
	"net/http"

	"github.com/miladrezvani/SoundWave/handlers"
	"github.com/miladrezvani/SoundWave/services"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/get/albums/metadata", handlers.GetAlbumsMetaData)
	mux.HandleFunc("/get/albums/art", handlers.GetAlubmsArt)
	mux.HandleFunc("/get/music/list", handlers.GetMusicList)
	mux.HandleFunc("/stream", services.StreamAudio)
	mux.HandleFunc("/scan/music", handlers.ScanMusicHandler)
}
