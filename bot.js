const TelegramBot = require(‘node-telegram-bot-api’);

// Your bot token
const token = ‘7666805938:AAGvFPNMwF4T6rBpvDsksCNrmrUhLluUGRY’;

// Create bot instance
const bot = new TelegramBot(token, { polling: true });

console.log(‘🚀 SOL Trending Bot started successfully!’);

// Start command - works in private chats and groups
bot.onText(//start/, (msg) => {
const chatId = msg.chat.id;

```
const welcomeMessage = `🚀 Welcome to SOL Trending Bot!
```

Use /trend to boost your token’s visibility, increase trading volume, and attract potential investors to your project. Our advanced system helps accelerate your token’s journey to trending status and connects you with a growing community of crypto enthusiasts.

Get started now and watch your project gain the momentum it deserves! 📈`;

```
bot.sendMessage(chatId, welcomeMessage);
```

});

// Trend command - works in private chats and groups
bot.onText(//trend/, (msg) => {
const chatId = msg.chat.id;

```
const trendMessage = `⚡️ SOL Trending | Fast-Track 6.0
```

✅ Buys sent into @Trending @SOLTrending
✅ The fast-track bot has been fully upgraded and now supports Moonshot and Pump.fun
✅ Increased pump alerts for your token
✅ Get fast-tracked to the top of trending: exclusive access, no queue

➤ Click the button below to begin`;

```
const options = {
    reply_markup: {
        inline_keyboard: [[
            {
                text: '🚀 Begin Fast-Track',
                url: 'https://soltrending.zya.me'
            }
        ]]
    }
};

bot.sendMessage(chatId, trendMessage, options);
```

});

// Error handling
bot.on(‘error’, (error) => {
console.error(‘❌ Bot error:’, error);
});

bot.on(‘polling_error’, (error) => {
console.error(‘❌ Polling error:’, error);
});

console.log(‘✅ Bot is running and ready to receive commands in both private chats and groups!’);
