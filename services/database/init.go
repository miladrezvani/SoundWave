package database

import (
	"os"
	"path/filepath"

	"github.com/miladrezvani/SoundWave/models"
	"gorm.io/gorm"
)

func Init(dbPath string) (*gorm.DB, error) {
	dir := filepath.Dir(dbPath)
	if dir != "." {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return nil, err
		}
	}

	db, err := Connect(dbPath)
	if err != nil {
		return nil, err
	}

	db.AutoMigrate(&models.MusicInfo{})
	return db, nil
}
