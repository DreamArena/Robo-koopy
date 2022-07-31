// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  if (msg.content === 'waffles') {
    msg.reply('Thats not my name, faggot.');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuzzy') {
    msg.reply('https://media.discordapp.net/attachments/975702812371595294/996780648389955634/caption.gif');
  }
});
