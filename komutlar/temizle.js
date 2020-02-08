  const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('`temizle` **idiot you can use !purge in servers.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (isNaN(args[0])) {
            message.reply("**Bruh How many messages?**")
            return
        }
        
        if (args[0].length > 99) {
            message.channel.send("** I can't delete more than 99...*")
            return
        }
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('*** ' + mesajsayisi + ' *** **messages has been teleported to blackhole. :rocket:  ** ')
  message.react('605973409150795786')

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};  

//By Positive.
