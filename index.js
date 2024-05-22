// Import the Telegraf library
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env["TELEGRAM_KEY"];

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const imageUrl =
    "https://camo.githubusercontent.com/ecdc1df490ca32d4c0fe5c198a172a338d4e491083988ee7601a34e28c922980/68747470733a2f2f74656c656772612e70682f66696c652f3464313234343030623938356232666536656531632e6a7067";

  bot.sendPhoto(chatId, imageUrl, {
    caption: "Welcome to the SSE File to Link Bot! 🤖",
  });

  const keyboard = {
    inline_keyboard: [
      [{ text: "Developer", url: "https://sseworld.github.io/" }],
    ],
  };

  bot.sendMessage(
    chatId,
    "You can convert FIle to Link using this bot. Just send me the File.\nType /help - For Help Menu",
    {
      reply_markup: JSON.stringify(keyboard),
    },
  );
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = "Send me any file and I will convert it to a link.";

  bot.sendMessage(chatId, helpMessage);
});

// bot.

bot.on("document", (msg) => {
  console.log("Document Received");
  console.log(msg);
  const chatId = msg.chat.id;
  const fileId = msg.document.file_id;
  console.log(msg);

  bot.getFileLink(fileId).then((link) => {
    console.log("File Link:", link);

    console.log("File Sent!");
  });
});
