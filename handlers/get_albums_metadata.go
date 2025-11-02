package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/miladrezvani/SoundWave/models"
	"github.com/miladrezvani/SoundWave/services/database"
	"github.com/miladrezvani/SoundWave/utils"
)

type albumsPaginatedDatajson struct {
	NextPage int
	MetaData []albumsMetaDatajson
}

type albumsMetaDatajson struct {
	ID        uint
	AlbumName string
}

func GetAlbumsMetaData(w http.ResponseWriter, r *http.Request) {
	db := database.GormDB
	var albums []models.Album
	var albumData albumsPaginatedDatajson
	scope, page := utils.Paginate(r)
	db.Scopes(scope).Find(&albums)

	for _, album := range albums {
		data := albumsMetaDatajson{
			ID:        album.ID,
			AlbumName: album.AlbumName,
		}
		albumData.MetaData = append(albumData.MetaData, data)
	}
	if albumData.MetaData != nil {
		albumData.NextPage = page + 1
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(albumData); err != nil {
		http.Error(w, "Encode Failed", http.StatusInternalServerError)
		return
	}
}
