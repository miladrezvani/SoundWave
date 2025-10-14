package main

import (
	"log"
	"net/http"

	"github.com/miladrezvani/SoundWave/routes"
	"github.com/miladrezvani/SoundWave/services/database"
)

func main() {

	mux := http.NewServeMux()

	routes.RegisterRoutes(mux)

	database.Init("../music/database.db")
	log.Println("starting server on the port 8080")
	http.ListenAndServe(":8080", mux)
}
