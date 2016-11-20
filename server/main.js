import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
	Meteor.startup(function() {
		TelegramBot.token = '247679791:AAEuDslngFxXFeqfKRiQApIm92isuQhp8rc';
		TelegramBot.start();
// отправка сообщения с фотаками и текстом в чатик
		TelegramBot.method('sendPhoto',{chat_id: '@mipit', photo: 'https://s.cafebazaar.ir/1/upload/icons/telegram.bot.png'});
		TelegramBot.method('sendMessage', { chat_id: '@mipit', text: 'some_text' });
	});
}

/* особо не надо
		TelegramBot.stop();
		TelegramBot.send('bitch','');
		set our token
		TelegramBot.addListener('/uma', function(command) {
			// command will contain the entire command in an array where command[0] is the command.
			// In this case '/test'. Each argument will follow.
			if(!command[1]) { // if no arguments
				//console.log(TelegramBot);
				var res = "Чацкий: Ты че оху ела, раз жирный такая?";
				send(res);
				return res;
				// if you return false the bot wont answer
			}
			// command[1] will be the first argument, command[2] the second etc
			// below the bot will reply with 'test: hi' if you sent him /test hi
			var res = "Фамусов (в сторону): " + command[1];
			send(res);
			return res;
		});
		TelegramBot.addListener('/start', function() {
			// console.log(TelegramBot);
			return "/uma - шутки за отсоси у тракториста; \n/вопрос - узнать все о своей судьбе.";
		});
		TelegramBot.addListener('/вопрос', function() {
			return "Ты не переживешь эту сессию";
		});
	});
}
*/