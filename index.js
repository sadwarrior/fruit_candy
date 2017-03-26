var TelegramBot = require('node-telegram-bot-api');
var token = '361664269:AAG-xCg5Y0E6mlyAlMVSbXi-CJDVie-25kw';
var bot = new TelegramBot(token, {
    polling: true
});

var questions = [{
        title: '13 ?',
        buttons: [
            [{
                text: '39',
                callback_data: '0_1'
            }],
            [{
                text: 'че?',
                callback_data: '0_2'
            }],
            [{
                text: '13',
                callback_data: '0_3'
            }],
            [{
                text: '31',
                callback_data: '0_4'
            }]
        ],
        right_answer: 4
    },
    {
        title: 'Пойдем за шавой?',
        buttons: [
            [{
                text: 'да',
                callback_data: '1_1'
            }],
            [{
                text: 'нет',
                callback_data: '1_2'
            }],
            [{
                text: 'веган',
                callback_data: '1_3'
            }],
            [{
                text: 'вариант для злых',
                callback_data: '1_4'
            }]
        ],
        right_answer: 2
    },
    {
        title: 'ты гей или качок?',
        buttons: [
            [{
                text: 'билдер, а не качок',
                callback_data: '2_1'
            }],
            [{
                text: 'пидор гыыы',
                callback_data: '2_2'
            }],
            [{
                text: 'православный (=гей)',
                callback_data: '2_3'
            }],
            [{
                text: 'мусульманин(=гей)',
                callback_data: '2_4'
            }]
        ],
        right_answer: 1
    },
];

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function newQuestion(msg) {
    var arr = getRandomQuestion();
    var text = arr.title;
    var options = {
        reply_markup: JSON.stringify({
            inline_keyboard: arr.buttons,
            parse_mode: 'Markdown'
        })
    };
    chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
    bot.sendMessage(chat, text, options);
}

bot.onText(/D*/, function(msg, match) {
    newQuestion(msg);
});

bot.on('callback_query', function(msg) {
    var answer = msg.data.split('_');
    var index = answer[0];
    var button = answer[1];

    if (questions[index].right_answer == button) {
        bot.sendMessage(msg.from.id, 'Ответ верный ✅');
    } else {
        bot.sendMessage(msg.from.id, 'Ответ неверный ❌');
    }

    bot.answerCallbackQuery(msg.id, 'вылезай из компуктера - пора делать реальные вещи', true);
});
