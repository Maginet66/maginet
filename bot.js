const Discord = require('discord.js');
const client = new Discord.Client();

var sahip = '153580497614798849';
var prefix = '.';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	           //.ping//
if (msg.content === prefix + 'ping') {
msg.reply('Pingim: ** ' + client.ping + '** ms');
}
                 //.avatar//
if (msg.content === prefix + 'avatar') {
msg.reply(msg.author.avatarURL);
}
	        //sa, yazısı//
if (msg.content.toLowerCase() === 'sa') {
msg.reply('aleyküm selam hoşgeldin.');
}
	       //günaydın, yazısı//
if (msg.content.toLowerCase() === 'günaydın') {
msg.reply('günaydın.');
}
	      //iyi geceler, yazısı//
if (msg.content.toLowerCase() === 'iyi geceler') {
msg.reply('iyi geceler, tatlı rüyalar.');
}
	   //restart//
//if (msg.content.toLowerCase() === prefix + 'restart') {
//if (msg.author.id !== sahip) {
//msg.channel.sendMessage('Bot yeniden başlatılıyor...').then(msg => {
//console.log(`BOT: Bot yeniden başlatılıyor...`);
//process.exit(0);
//} else {
//msg.reply('Buna yetkin bulunmamaktadır, sadece yöneticiler.');
//})
//}
//}
});

client.login(process.env.BOT_TOKEN);
