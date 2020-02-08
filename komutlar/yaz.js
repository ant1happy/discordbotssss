const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('You need write something to i write it too.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'type',
  description: '[Admin Komutu]',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};