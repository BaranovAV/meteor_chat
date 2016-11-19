import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	TelegramBot.token = '247679791:AAEuDslngFxXFeqfKRiQApIm92isuQhp8rc';
	TelegramBot.method('sendMessage', {'chat_id':1, 'text':'asdfdsa'});
});
