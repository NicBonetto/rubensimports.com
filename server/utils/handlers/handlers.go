package handlers

import (
	"github.com/NicBonetto/rubensimports.com/server/utils/env"	
	"github.com/labstack/echo"
	"gopkg.in/gomail.v2"
	"net/http"
	"os"
)

func GeneralEmail(c echo.Context) error {
    env.SetEmailPassword()
	env.SetEmailUser()

	name := c.FormValue("first") + " " + c.FormValue("last")
	from := c.FormValue("email")
	phone := c.FormValue("phone")
	message := c.FormValue("message")

	mailer := gomail.NewMessage()
	mailer.SetHeader("From", from)
	mailer.SetHeader("To", "nick.bonetto@gmail.com")
	mailer.SetHeader("Subject", "General Contact")
	mailer.SetBody("text/plain", "From: " + name + "\n" + "Email: " + from + "\n" + "Phone: " + phone + "\n" + "Message: " + message)

	dialer := gomail.NewDialer("smtp.gmail.com", 465, os.Getenv("EMAILUSER"), os.Getenv("EMAILPASSWORD"))

	err := dialer.DialAndSend(mailer)

	if err != nil {
		panic(err)
	}

	return c.String(http.StatusOK, "Email Sent.")
}