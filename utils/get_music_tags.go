package utils

import "go.senan.xyz/taglib"

type musicData struct {
	Title       string
	ArtistName  string
	AlbumName   string
	Genre       string
	ReleaseDate string
	TrackNumber string
}

func GetMusicTags(tags map[string][]string) *musicData {
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
	if len(tags[taglib.ReleaseDate]) > 0 {
		data.ReleaseDate = tags[taglib.ReleaseDate][0]
	}
	if len(tags[taglib.TrackNumber]) > 0 {
		data.TrackNumber = tags[taglib.TrackNumber][0]
	}
	return data
}
