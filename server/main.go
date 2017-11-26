package main

import (
  "github.com/NicBonetto/rubensimports.com/server/utils/env"
  "github.com/NicBonetto/rubensimports.com/server/utils/handlers"
  "github.com/labstack/echo"
  "github.com/labstack/echo/middleware"
  "os"
)

func main() {
    env.SetEnvVars()

    e := echo.New()
    e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
      Root: "server/static",
      Index: "index.html",
      HTML5: true,
    }))
  
    e.POST("/email/contact", handlers.GeneralEmail)
  
    e.Logger.Fatal(e.Start(os.Getenv("PORT")))
}