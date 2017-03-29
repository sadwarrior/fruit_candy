const TelegramBot = require('node-telegram-bot-api');
const token = '361664269:AAG-xCg5Y0E6mlyAlMVSbXi-CJDVie-25kw';
const bot = new TelegramBot(token, {
    polling: true
});


bot.on('message', (msg) => {
    let chatId = msg.chat.id;
    bot.sendMessage(chatId, changeTwo(...msg.text.split(' ')));
});

const duplicate = (input) => {
    return input.toString().toUpperCase() + input;
    //работает
}

const changeTwo = (...par) => {
    //changeTwo(...msg.text.split(' '))
    //для вызова используем спреад оператор
    return par.reverse().join(' ');
    //меняет порядок слов
}

const sendGreatPic = () => {
    let ranToFour = Math.floor(Math.random * 4);
}

const howForOfDiffersFromForIN = () => {
    const someGuy = {
        name: "Ivan",
        work: "JS development",
        hobby: "kickboxing"
    }
    const colors = ['blue', 'red', 'green', 'pink'];
    //for in идет по маркерам доступа (индексы/свойства)
    //for of по их значенниям
    let outForOf = " ",
        outForIn = " ";
    for (propName in someGuy) {
        outForIn += someGuy[propName] + " ";
    }
    for (propVal of colors) {
        outForOf += propVal + " ";
    }
    if (outForOf != outForIn) {
        return `методы возвращают одно и то же - я воспользовался obj[propName] для доступа к значениям в цикле for..in
        ${outForOf} и ${outForIn} - результаты циклов по объекту и массиву`;
    }
}
