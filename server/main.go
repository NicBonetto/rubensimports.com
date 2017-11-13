package main

import (
  "github.com/NicBonetto/rubensimports.com/server/utils/env"
  "github.com/labstack/echo"
  "os"
)

func main() {
  env.SetEnvVars()

  e := echo.New()
  e.File("/", "server/static/index.html")
  
  e.Logger.Fatal(e.Start(os.Getenv("PORT")))
}