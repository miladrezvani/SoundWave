package models

import (
	"gorm.io/gorm"
)

type Song struct {
	gorm.Model
	Title       string
	TrackNumber string
	FilePath    string
	Format      string
	AlbumId     uint
}
