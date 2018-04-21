
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	           //.ping//
if (msg.content === prefix + 'ping') {
msg.reply('Pong!');
}
                 //.avatar//
if (msg.content === prefix + 'avatar') {
msg.reply(msg.author.avatarURL);
}
if (msg.content === 'sa') {
	  msg.reply('aleyküm selam kanka hoşgeldin.');
}
});

client.login(process.env.BOT_TOKEN);
