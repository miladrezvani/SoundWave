package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/miladrezvani/SoundWave/routes"
	"github.com/miladrezvani/SoundWave/services/database"
)

func main() {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Println("can not find user home directory")
		return
	}
	homeDir = filepath.Join(homeDir, "/Music/database.db")

	mux := http.NewServeMux()

	routes.RegisterRoutes(mux)

	database.Init(homeDir)
	log.Println("starting server on the port 8080")
	http.ListenAndServe(":8080", mux)
	database.Close()
}
