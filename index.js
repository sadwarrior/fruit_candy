var TelegramBot = require('node-telegram-bot-api');
var token = '361664269:AAG-xCg5Y0E6mlyAlMVSbXi-CJDVie-25kw';
var bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Received ${msg.chat.username}'s message ${binarificate(msg.text)}, it's in binary because I want my bot to do anything)`);
});

var binarificate = function(strIn) {
    var output = "";
    for (var i = 0; i < strIn.length; i++) {
        output += strIn[i].charCodeAt(0).toString(2) + " ";
        console.log(output);
    }
    return output;
}
