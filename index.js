const TOKEN = process.env.TELEGRAM_TOKEN || '1350049849:AAFly91P-hNi66Llph1Q0MO3JH-YHb19MGA';
const TelegramBot = require('node-telegram-bot-api');
const options = {
    webHook: {
        // Just use 443 directly
        port: 443
    }
};
// You can use 'now alias <your deployment url> <custom url>' to assign fixed
// domain.
// See: https://zeit.co/blog/now-alias
// Or just use NOW_URL to get deployment url from env.
const url = 'https://telegram-bot-omega.vercel.app/' || process.env.NOW_URL;
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive on Zeit Now!');
});


/*const TelegramBot = require('node-telegram-bot-api');
const
const bot = new TelegramBot("1350049849:AAFly91P-hNi66Llph1Q0MO3JH-YHb19MGA", { polling: true });


bot.onText(/\/anagram/, (msg, match) => {
    const chatId = msg.chat.id;
    const word = match.input.split(' ')[1];

    if (word === undefined) {
        bot.sendMessage(
            chatId,
            'Please provide a word!',
        );
        return;
    }



    const stringPermutations = str => {
        if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
        return str
            .split('')
            .reduce(
                (acc, letter, i) =>
                acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []
            );
    };

    let message = stringPermutations(word);

    if (message.length > 10) {
        let deletion = message.length - 10;
        message.splice(10, deletion);
    }

    let finalMessage = "";
    for (i = 0; i < message.length; i++) {
        finalMessage = finalMessage + message[i] + '\n'
    }

    console.log(finalMessage)

    bot.sendMessage(
        chatId,
        ` ${finalMessage}`,
    );
}); */