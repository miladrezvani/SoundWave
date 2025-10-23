package utils

import (
	"log"
	"os"
	"path/filepath"
)

func GetRoot() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Println("can not find user home directory")
		return ""
	}
	homeDir = filepath.Join(homeDir, "/Music")
	return homeDir
}
