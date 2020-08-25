const TelegramBot = require('node-telegram-bot-api');
 
// replace the value below with the Telegram token you receive from @BotFather
const token = '1102828656:AAF0irHdQmW6AblSmxpRBTMl4g2GdCmeS-M';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const hi = "/start";

  const eat = "/eat";
  const sit = "/sit";
  const job = "/job";

  const lying = "/lying";
  const going = "/going";
  const noth = "/nothing";

  const ver = [];

  ver[1] = 'ем';
  ver[2] = 'сплю';
  ver[3] = 'лежу';
  ver[4] = 'иду на работу';
  ver[5] = 'иду с работы';
  ver[6] = 'воды попил';
  ver[7] = 'помылся';
  ver[8] = 'в магаз сходил';
  ver[9] = 'ничо пока не делаю';
  ver[10] = 'вздремнул пару часов';
  ver[11] = 'щас сотку нашел';
  ver[12] = 'выступил на концерте';
  ver[13] = 'работаю';
  ver[14] = 'мороженку уронил';
  ver[15] = 'кота покормил';
  if (msg.text.toString().toLowerCase().indexOf(eat) === 0) {
		bot.sendMessage(msg.chat.id, "Приятного аппетита!");
  } else
  if (msg.text.toString().toLowerCase().indexOf(sit) === 0) {
		bot.sendMessage(msg.chat.id, "Главное спину держи ровно");
  } else
  if (msg.text.toString().toLowerCase().indexOf(lying) === 0) {
		bot.sendMessage(msg.chat.id, "Продуктивный отдых - продуктивная работа!");
  } else
  if (msg.text.toString().toLowerCase().indexOf(job) === 0) {
		bot.sendMessage(msg.chat.id, "Продуктивная работа - продуктивный отдых!");
  } else
  if (msg.text.toString().toLowerCase().indexOf(going) === 0) {
		bot.sendMessage(msg.chat.id, "Молодец, ходить полезно");
  } else
  if (msg.text.toString().toLowerCase().indexOf(noth) === 0) {
		bot.sendMessage(msg.chat.id, "Это не прокрастинация - это медитация");
  } else
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
		bot.sendMessage(msg.chat.id, "Привет! Чо делаешь?");
  } else
  if (msg.text.toString().toLowerCase().indexOf(hi) !== 0) {
		bot.forwardMessage(542650380, msg.chat.id, msg.message_id);
		let vers = Math.floor(1 + Math.random() * (15));
		bot.sendMessage(msg.chat.id, "Отлично, а я " + ver[vers]);
	}
	    
});