package main

import (
	"log"
	"net/http"

	"github.com/miladrezvani/SoundWave/routes"
)

func main() {

	mux := http.NewServeMux()

	routes.RegisterRoutes(mux)

	log.Println("starting server on the port 8080")
	http.ListenAndServe(":8080", mux)
}
