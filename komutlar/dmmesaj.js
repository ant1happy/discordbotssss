const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (message.author.id != "641209587558645761")
    return message.reply("❌ Only Admins Can use this command!");

  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("⚠ Warning ⚠", "You can't use this commands in dm's!");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply("❌ You need write a message!");
  if (message.mentions.users.size < 1)
    return message
      .reply("❌ Who am i gonna send!")
      .catch(console.error);
  message.delete();
  message.reply("Succsessfully sended!");
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**🎆 New Message! 🎆**`)
    .setTimestamp()
    .setDescription(reason);
  return user.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm"],
  permlevel: 4
};
exports.help = {
  name: "senddm",
  description: "Bir kullanıcıya özel mesaj yollar.",
  usage: "mesajat"
};