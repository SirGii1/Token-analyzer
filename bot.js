const TelegramBot = require(‘node-telegram-bot-api’);

// Replace with your bot token
const token = ‘7666805938:AAGvFPNMwF4T6rBpvDsksCNrmrUhLluUGRY’;

// Create a bot that uses ‘polling’ to fetch new updates
const bot = new TelegramBot(token, { polling: true });

console.log(‘Bot started successfully!’);

// Welcome message when bot is started
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

// Trend command handler
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

// Handle any other messages (optional - for better user experience)
bot.on(‘message’, (msg) => {
const chatId = msg.chat.id;
const messageText = msg.text;

```
// Only respond to messages that aren't commands and are direct messages to the bot
if (!messageText.startsWith('/') && msg.chat.type === 'private') {
    const helpMessage = `👋 Hello! I'm here to help you boost your token's visibility.
```

Available commands:
• /start - Get started with the bot
• /trend - Access the Fast-Track 6.0 trending system

Type /trend to begin boosting your token now! 🚀`;

```
    bot.sendMessage(chatId, helpMessage);
}
```

});

// Error handling
bot.on(‘error’, (error) => {
console.error(‘Bot error:’, error);
});

bot.on(‘polling_error’, (error) => {
console.error(‘Polling error:’, error);
});

console.log(‘Bot is running and listening for messages…’);
