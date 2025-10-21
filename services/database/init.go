package database

import (
	"os"
	"path/filepath"

	"github.com/miladrezvani/SoundWave/models"
	"gorm.io/gorm"
)

var (
	GormDB *gorm.DB
)

func Init(dbPath string) (*gorm.DB, error) {
	dir := filepath.Dir(dbPath)
	if dir != "." {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return nil, err
		}
	}

	var err error
	GormDB, err = Connect(dbPath)
	if err != nil {
		return nil, err
	}

	GormDB.AutoMigrate(&models.Song{}, &models.Album{}, &models.Artist{})
	return GormDB, nil
}
