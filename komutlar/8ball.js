const Discord = require('discord.js');

const cevaplar = [
    "Of Course",
    "20",
    "30",
    "40",
    "50"

];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Send a Question am i look like an stupid?')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: '8ball <soru>'
};
//made by f3elinqs