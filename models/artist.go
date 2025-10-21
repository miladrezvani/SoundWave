package models

import (
	"gorm.io/gorm"
)

type Artist struct {
	gorm.Model
	Name   string
	Albums []Album `gorm:"foreignKey:ArtistId"`
}
