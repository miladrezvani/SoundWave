package database

func Close() {
	sqlDB, err := GormDB.DB()
	if err != nil {
		return
	}
	defer sqlDB.Close()
}
