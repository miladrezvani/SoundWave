package models

import (
	"gorm.io/gorm"
)

type Album struct {
	gorm.Model
	AlbumName   string
	AlbumArt    []byte `gorm:"type:blob"`
	Genre       string
	ReleaseDate string
	ArtistId    uint
	SongId      []Song `gorm:"foreignKey:AlbumId"`
}
