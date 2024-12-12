🚀 Free AirDrop Bot - Comprehensive Setup Guide

📞 Contact & Support

- Personal Contact: t.me/MeoMunDep
- Community Group: t.me/KeoAirDropFreeNe
- Official Channel: t.me/KeoAirDropFreeNee

🖥️ System Requirements

- Operating System: Windows, macOS, or Linux
- Node.js Version: Exactly 22.11.0
- NPM Version: Exactly 10.9.0

🔧 Detailed Installation Steps

Step 1: Install Node.js

1. Download from: t.me/KeoAirDropFreeNe/257/1462
2. Run installer, select "Add to PATH"
3. Verify installation:
   node --version # Should show 22.11.0
   npm --version # Should show 10.9.0

Step 2: Install Dependencies
npm i user-agents axios colors p-limit https-proxy-agent \
 socks-proxy-agent crypto-js ws uuid xlsx readline-sync

📁 Configuration Files

1. configs.json
   {
   "timeZone": "en-US",
   "rotateProxy": false,
   "skipInvalidProxy": false,
   "proxyRotationInterval": 2,
   "delayEachAccount": [5, 8],
   "timeToRestartAllAccounts": 300,
   "howManyAccountsRunInOneTime": 100,
   "doTasks": true,
   "playGames": true,
   "referralCode": ""
   }

2. datas.txt (from t.me/KeoAirDropFreeNe/257/6879)
   query_id.../user...
   query_id.../user...

3. wallets.txt
   0x123456789abcdef...
   0x987654321fedcba...

4. proxies.txt (Optional)
   http://user:password@host:port
   https://user:password@host:port
   socks4://user:password@host:port
   socks5://user:password@host:port

🚀 Running the Bot

1. Extract bot files
2. Open terminal/command prompt
3. Navigate to bot directory:
   cd path/to/bot/directory
4. Start bot:
   node bot

🛠️ Troubleshooting

- Match versions exactly
- Check internet connection
- Verify configuration files
- Join Telegram group for support

⚠️ Important

- Keep configuration files secure
- Don't share sensitive info
- Update bot regularly

🎉 Happy AirDropping!

