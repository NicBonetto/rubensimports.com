# rubensimports.com
A website for Ruben's Imports. A car dealership located in Dana Point, CA.

# Run Locally
This application uses Git, Go, and yarn, so ensure they are installed. Then follow these command prompts:

```
git clone https://github.com/NicBonetto/rubensimports.com.git
cd rubensimports.com/
yarn install
```
After all dependencies are installed, there are a few environmental variables you have to initialize on your own: PORT, EMAILPASSWORD, and EMAILUSER. EMAILPASSWORD and EMAILUSER are used to set up a SMTP server to send emails from for the contact forms.

```
yarn dev
```

Open your browser to localhost:PORT <- PORT being the variable's value.
