// Run dotenv
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! Lets make some noise <3`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
const replies = ['fuck you', 'kill yourself', 'i hope you catch zika'];
  if (msg.content === '!waffles'){
    const index = Math.floor(Math.random() * replies.length);
      msg.channel.send(replies[index]);
    }
});

client.on('message', msg => {
  if (msg.content === '!fuzzy') {
    msg.channel.send('https://media.discordapp.net/attachments/975702812371595294/996780648389955634/caption.gif');
    }
  }
);

client.on('message', msg => {
  if (msg.content === '!CCZ') {
    msg.channel.send('https://cdn.discordapp.com/attachments/352583242060136448/1004095255290843166/IUZCIWrd3ROUBtMm.mov');
    }
  }
);


client.on('message', msg => {
  if (msg.content === '!rancho') {
    msg.channel.send('https://cdn.discordapp.com/attachments/975645124065386519/1003950846716940339/speed-7.gif');
  }
});

client.on('message', msg => {
  if (msg.content === '!kimochi') {
    msg.channel.send('https://cdn.discordapp.com/attachments/799010654098685973/982737951077306368/Onanist_Take-1497747534395371523-20220226_203653-vid1.mp4');
  }
});

client.on('message', msg => {
  if (msg.content === '!suck') {
    msg.channel.send('https://cdn.discordapp.com/attachments/197739193437257729/773624064472252446/1604409469539.webm');
  }
});

client.on('message', msg => {
  if (msg.content === '!kurk') {
    msg.channel.send('https://cdn.discordapp.com/attachments/975645124065386519/1004082134438391948/unknown.png');
  }
});

client.on('message', msg => {
  if (msg.content === '!wega') {
    msg.channel.send('BAAAAAHHHH ' + '\n https://cdn.discordapp.com/attachments/975645124065386519/1004086062756397118/unknown-45.jpg');
  }
});

client.on('message', (msg) => {
 if (msg.content.startsWith('!8ball')) {
  const eightball = [
   'maybe if you grew some balls',
   'fuck off.',
   'ask a better question you retard.',
   'hell fucking no.',
   'perchance.',
   'only if you give me some dome',
   'no shit you dumbass',
   'im gonna rape you if you ask another head ass question like that again',
   'ask me later im jelqing',
   'ask your mom and dad after Im done raping them',
   'im not awnsering that fruity ass question',
   ];

   const response = eightball[Math.floor(Math.random() * eightball.length)];
   msg.channel.send(response);
  }
 });

client.on('message', (msg) => {
 if (msg.content.startsWith('!aibo')) {
  const aibo = [
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20dunes.png',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20field.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20toybox.png',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20tundra.png',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20group.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-110/ERS-110%20poster.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-latte-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-latte-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-latte-macaron-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-latte-macaron-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-latte-macaron-3.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-31x/aibo-macaron-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-wallpaper-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-wallpaper-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-wallpaper-3.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-220/aibo-ers220-wallpaper-4.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad-3.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad-4.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad-5.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/aibo-ers-7-ad-6.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-7/ERS-7%20wallpaper.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-3.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-4.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-5.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-6.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-ers210-ad-7.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/Sony-AIBO-ERS-210-wallpaper.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-cyber-shot-2.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-cyber-shot1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-handycam.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-in-car-entertainment-mex-5di.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-mini-disc-1.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-mini-disc-3.jpg',
    'http://storage.windows97.space/TheKoopyKonglomerate/SONY/AIBO/images/ERS-210/aibo-advertising-wega-theatre.jpg',
   ];

  const response = aibo[Math.floor(Math.random() * aibo.length)];
  msg.channel.send(response);
 }
});
