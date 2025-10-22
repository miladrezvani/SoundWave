package utils

import (
	_ "image/jpeg"
	_ "image/png"
	"strings"

	"go.senan.xyz/taglib"
)

type musicData struct {
	Title       string
	ArtistName  string
	AlbumName   string
	AlbumArt    []byte
	Genre       string
	ReleaseDate string
	TrackNumber string
}

func GetMusicTags(tags map[string][]string, imageBytes []byte) *musicData {
	data := &musicData{}
	if len(tags[taglib.Title]) > 0 {
		data.Title = tags[taglib.Title][0]
	}
	if len(tags[taglib.Artist]) > 0 {
		data.ArtistName = tags[taglib.Artist][0]
	}
	if len(tags[taglib.Album]) > 0 {
		data.AlbumName = tags[taglib.Album][0]
	}
	if len(tags[taglib.Genre]) > 0 {
		data.Genre = tags[taglib.Genre][0]
	}
	if len(tags[taglib.Date]) > 0 {
		data.ReleaseDate = tags[taglib.Date][0][0:4]
	}
	if len(tags[taglib.TrackNumber]) > 0 {
		tmp := tags[taglib.TrackNumber][0]
		data.TrackNumber = tmp[:strings.IndexByte(tmp, '/')]
	}
	if imageBytes != nil {
		data.AlbumArt = imageBytes
	}
	return data
}
