# 🚀 Mbuvi MD - Unleash Your WhatsApp Bot! 🤖

Welcome to **Mbuvi MD**, the ultimate WhatsApp bot powered by Mbuvi Tech! 🎉 With a thriving community, this bot brings interactive menus, YouTube downloads, auto-status likes, and more to your fingertips. Deploy your own instance on Heroku in minutes—no coding, no CLI, just pure browser-based magic! ✨

## 🌟 Why Mbuvi MD?

Mbuvi MD is your WhatsApp sidekick, packed with features to make your chats pop! Here’s what you get:

| **Feature**          | **Description**                                              | **Command**       |
|----------------------|--------------------------------------------------------------|-------------------|
| **Interactive Menu** | Sleek buttons or text menu to navigate commands with style 😎 | `.menu2`          |
| **YouTube Downloader** | Download audio or video from YouTube in high quality 🎵📹   | `.play;.song;` |
| **Auto-Like Status** | Automatically like friends’ WhatsApp statuses with a heart ❤️ | Config var        |
| **Always Online**    | Keep your bot’s status green, 24/7 🌐                        | Config var        |
| **All social media dl**    | Tiktok,ig,fb and yt⬇🔽 | `.fb;.tiktok;.ig;` |
| **Owner Commands**   | Exclusive controls for the bot owner to rule the chat 👑      | e.g., `.testowner`    |

Join our [WhatsApp Group](https://chat.whatsapp.com/JZxR4t6JcMv66OEiRRCB2P) or follow us on [Instagram](https://www.instagram.com/_mbuvi_) for updates, tips, and community vibes! 🚀

## 🛠️ Deploy in 5 Easy Steps

No terminal, just a few clicks to get your bot live on Heroku! Follow these steps to deploy Mbuvi MD and start ruling WhatsApp.

### 1️⃣ Fork This Repo

- Hit the **Fork** button below to copy this repo to your GitHub account. It’s your personal launchpad! 🚀

  [![Fork Repo](https://img.shields.io/badge/FORK-blue?logo=github)](https://github.com/cheekydavy/MBUVIMD/fork)


### 2️⃣ Get Your Session ID

- Click below to generate your WhatsApp `SESSION_ID` (a base64-encoded key for bot authentication):

  [![Get Session ID](https://img.shields.io/badge/Session-blue?logo=heroku)](https://mbuvi-md-pair-6a1316688343.herokuapp.com)

- Save it securely—you’ll need it soon!

### 3️⃣ Create a GitHub Personal Access Token

- Head to GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic).
- Generate a token with **read:packages** scope to access the private packages.
- Copy the token (starts with `ghp_`) and keep it safe. No sharing! 🔒

### 4️⃣ Deploy to Heroku

- Click the Heroku Button below to create your app in one click:

  [![Deploy on Heroku](https://img.shields.io/badge/Deploy-Heroku-green?logo=heroku)](https://heroku.com/deploy?template=https://github.com/cheekydavy/MbuviMD)

- Alternatively, manually set up:
  - Go to [Heroku Dashboard](https://dashboard.heroku.com) > New > Create new app.
  - In the “Deploy” tab, connect your forked repo (`your-username/MbuviMD`).
  - Enable **Automatic Deploys** for instant updates.

### 5️⃣ Set Config Vars

- In your Heroku app’s “Settings” tab, add these config vars:
  - **SESSION_ID**: Your WhatsApp session ID from step 2.
  - **PREFIX**: Command prefix (default: `.`).
  - **OWNER_NUMBER**: Your phone number (e.g., `2547....`, no `+` or country code).
  - **ALWAYS_ONLINE**: `true` or `false` (default: `true`).
  - **AUTO_LIKE_STATUS**: `true` or `false` (default: `true`).
  - **PRIVATE_REPO_TOKEN**: Your GitHub PAT from step 3.

- Example:
  ```
  SESSION_ID=ey...
  PREFIX=.
  OWNER_NUMBER=254746440595
  ALWAYS_ONLINE=true
  AUTO_LIKE_STATUS=true
  PRIVATE_REPO_TOKEN=ghp_...
  ```

- Hit “Deploy Branch” in the “Deploy” tab, and Heroku will build your bot! 🛠️

## 🎉 Verify Your Bot

- **Check Build Logs**: Open your Heroku app’s “Activity” tab or Dashboard to see the build process. Look for “Deployed successfully” and no errors.
- **Test the Bot**: Send `.menu2` to your bot’s number. You should see a slick menu with buttons (or a text menu for Business accounts).
- **Bot Not Responding?** Double-check your `SESSION_ID` (must be valid base64) and `PRIVATE_REPO_TOKEN` (needs `read:packages` scope).

## 🛑 Troubleshooting

Got issues? We’ve got your back! 💪

- **Build Fails**: Verify `PRIVATE_REPO_TOKEN` has `read:packages` scope and you’re authorized to access. Contact the owner to get access.
- **Bot Offline**: Ensure `SESSION_ID` is correct. Regenerate it at the session tool if needed.
- **Need Help?** Join our [WhatsApp Group](https://chat.whatsapp.com/JZxR4t6JcMv66OEiRRCB2P) or DM the owner at [wa.me/254746440595](https://wa.me/254746440595).

## 🔥 Pro Tips

- **Keep It Secret**: Never share `SESSION_ID` or `PRIVATE_REPO_TOKEN` publicly. They’re your bot’s keys! 🔑
- **Stay Updated**: Redeploy your app to pull the latest Mbuvi MD features. Check our [WhatsApp Channel](https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D) for news.
- **Show Off**: Share your bot in our community and flex those `.menu2` buttons! 😎

## 🤝 Join the Mbuvi MD Community

With several forks and counting, Mbuvi MD is a movement! Connect with us:

- 📱 [WhatsApp Group](https://chat.whatsapp.com/JZxR4t6JcMv66OEiRRCB2P)
- 📢 [WhatsApp Channel](https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D)
- 📸 [Instagram](https://www.instagram.com/_mbuvi_)
- 👨‍💻 [Owner](https://wa.me/254746440595)

**Powered by Mbuvi Tech ☬**  
Let’s make WhatsApp epic together! Deploy now and unleash the power of Mbuvi MD! 🚀
