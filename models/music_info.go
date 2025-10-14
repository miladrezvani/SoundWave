package models

import "time"

type MusicInfo struct {
	Id        uint `gorm:"primaryKey;autoIncrement"`
	Title     string
	Artist    string
	Album     string
	Genre     string
	Year      string
	FilePath  string
	Formats   string
	AddedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}
