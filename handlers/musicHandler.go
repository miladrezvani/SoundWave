package handlers

import "net/http"

func MusicHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello"))
}
