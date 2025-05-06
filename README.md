### <b margin-right="50%">Get session id.</b>
<p align="center">
<a href="https://mbuvi-md-pair-6a1316688343.herokuapp.com">
 <img src="https://img.shields.io/badge/Session-blue?logo=heroku" width="200">
</a>
</p>
<hr>
 <b align="center">Deploy Heroku</b>
 <p align="center">
        <a href="https://dashboard.heroku.com/new?template=https://github.com/cheekydavy/Mbuvi-MD" style="margin: 10px;">
            <img src="https://img.shields.io/badge/Deploy-Heroku-green?logo=heroku" alt="Deploy on Heroku" width="200">
        </a>
    </p>
Mbuvi MD Template
   Deploy your own Mbuvi MD WhatsApp bot on Heroku with this template. Fork this repo, connect it to Heroku, and set up the required config vars to get started.
Prerequisites

A GitHub account.
A Heroku account.
A GitHub Personal Access Token (PAT) with read:packages scope to access the private @cheekydavy/mbuvi-md package.
A valid WhatsApp SESSION_ID for bot authentication.

Deployment Steps

Fork this Repository:

Click the "Fork" button at the top-right to create a copy of this repo in your GitHub account.


Generate a GitHub PAT:

Go to GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic).
Create a token with read:packages scope.
Copy the token and keep it secure.


Create a Heroku App:

Option 1: Click the Heroku Button below to auto-create an app.
Option 2: Manually create an app in the Heroku Dashboard and connect your forked repo:
Go to Heroku Dashboard > New > Create new app.
In the "Deploy" tab, connect your forked GitHub repo (your-username/Mbuvi-MD-Template).
Enable Automatic Deploys or deploy manually.




Set Config Vars:

In your Heroku app’s "Settings" tab, add the following config vars:
SESSION_ID: Your WhatsApp session ID (base64-encoded creds.json).
PREFIX: Command prefix (default: .).
OWNER_NUMBER: Your phone number (without + or country code).
ALWAYS_ONLINE: true or false (default: true).
AUTO_LIKE_STATUS: true or false (default: true).
PRIVATE_REPO_TOKEN: Your GitHub PAT from step 2.


Example:SESSION_ID=ey...
PREFIX=.
OWNER_NUMBER=254746440595
ALWAYS_ONLINE=true
AUTO_LIKE_STATUS=true
PRIVATE_REPO_TOKEN=ghp_...




Deploy the App:

If using Automatic Deploys, push a commit to your forked repo to trigger a build.
If manual, go to the "Deploy" tab, select your repo’s main branch, and click "Deploy Branch".
Heroku will install dependencies, including the private @cheekydavy/mbuvi-md package, and start the bot.


Verify Deployment:

Check the Heroku build logs (heroku logs --tail) for errors.
Send a message to your bot (e.g., .menu2) to confirm it’s running.
If the bot doesn’t connect, verify your SESSION_ID is valid.



Troubleshooting

Build Fails: Ensure PRIVATE_REPO_TOKEN has read:packages scope and you’re authorized to access @cheekydavy/mbuvi-md.
Bot Not Responding: Check SESSION_ID format (base64-encoded JSON) and Heroku logs for errors.
Contact Support: Join the WhatsApp group (https://chat.whatsapp.com/JZxR4t6JcMv66OEiRRCB2P) or message the owner (https://wa.me/254746440595).

Notes

The bot requires Node.js, Python (yt-dlp), and ffmpeg, configured via Heroku buildpacks.
Keep your PRIVATE_REPO_TOKEN and SESSION_ID secure; never share them publicly.
For updates, pull the latest @cheekydavy/mbuvi-md version by redeploying your app.

   Powered by Mbuvi Tech ☬
