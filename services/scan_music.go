package services

import (
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
)

var audioExts = map[string]struct{}{
	".mp3": {}, ".m4a": {}, ".flac": {}, ".wav": {},
}

func ScanMusic(mainDir string, subFolder string, handler func(path string, ext string) error) error {
	if mainDir == "" {
		return errors.New("root required")
	}

	root := mainDir

	if subFolder != "" {
		root = filepath.Join(mainDir, subFolder)
	}

	_, err := os.Stat(root)
	if err != nil {
		return err
	}

	return filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			fmt.Println("error is : ", err)
			return err
		}
		ext := strings.ToLower(filepath.Ext(d.Name()))

		if _, err := audioExts[ext]; !err {
			return nil
		}

		return handler(path, ext)
	})
}
