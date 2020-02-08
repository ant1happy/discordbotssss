const Discord = require("discord.js");
const ms = require("ms");
exports.run = async (client, message, args) => {
  const emoji1 = message.client.emojis.get("");
  const emoji2 = message.client.emojis.get("");
  const emoji3 = message.client.emojis.get(""); //buralara dokunmayın!
  const emoji4 = message.client.emojis.get("");
  const emoji5 = message.client.emojis.get("");
  const emoji6 = message.client.emojis.get("");
  const emoji7 = message.client.emojis.get("");
  let isEnabled;
  message.reply(
    "✅ **You sent a live support!\nWe are gonna talk with you as soon as possible!**"
  );
  let mesaj = args.slice(0).join(" ");
  let chan = message.channel;
  let destekKanal = "655818897517445121"; //DESTEK KANALI ID'sini GIRIN
  const embed = new Discord.RichEmbed()
    .setTitle(`🛠 Live Support Informations.. 🛠`)
  
    .setColor("Random")
  .setDescription(`**🚉 Server**\n● | ${message.guild.name}\n● | (${message.guild.id}) \n \n**📮 Channel**\n● | ${message.channel.name}\n● | (${message.channel.id})\n \n**📝 Who wants support.**\n● | ${message.author.tag}\n● | (${message.author.id})\n \n**📩 Incoming Message**\n● | ${mesaj}`
    )
    .setFooter("🔧 Live Support ")
    .setTimestamp();
  client.channels.get(destekKanal).send({
    embed: embed
  });
  const collector = client.channels
    .get(destekKanal)
    .createCollector(message => message.content.startsWith(""), {
      time: 0
    });
  client.channels
    .get(destekKanal)
    .send(
      "⚠️ **You !** ⚠️\n \n**✅ if you want to accept write `accept`\n❌ if you wanna decline just write `decline` Yazabilirsin!**"
    );
  collector.on("message", message => {
    if (message.content === "decline") collector.stop("aborted");
    if (message.content === "accept") collector.stop("success");
  });
  collector.on("end", (collected, reason) => {
    if (reason === "time")
      return message.reply("🔌 Connection Failed");
    if (reason === "aborted") {
      message.reply("🛑 Declined!🛑");
      client.channels
        .get(destekKanal)
        .send("📡 Succsessfully Declined! ✅ ");} 
    if (reason === "success") { 
      client.channels.get(destekKanal).send("🛡 Trying to connect! 🛡");
      client.channels
        .get(destekKanal)
        .send("🛠 Connected to Live Support Team!\n❌ if you want to close then write `close`.");
      chan.send(`${message.author}`);
      chan.send("🛎 Your Support Request was sended to Helper Team! 🛎");
      chan.send("🚫 If you want to Close Then write `close`!");
      isEnabled = true;
      client.on("message", message => {
        function contact() {
          if (isEnabled === false) return;
          if (message.author.id === client.user.id) return;
          if (message.content.startsWith("close")) {
            message.channel.send("❌ Call Closed");
            if (message.channel.id === chan.id)
              client.channels
                .get(destekKanal)
                .send("❌ Call Closed By Helper Team!");
            if (message.channel.id === destekKanal)
              chan.send("Call Closed By Helper Team!! ❌");
            return (isEnabled = false);
  
 }
          if (message.channel.id === chan.id)
            client.channels
              .get(destekKanal)
              .send(`**${message.author.tag}**: ${message.content}`);
          if (message.channel.id === destekKanal)
            chan.send(`**${message.author.tag}**: ${message.content}`);
        }
        contact(client);
      });
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "livesupport",
  description: "Canlı Destek Talebi Oluşturur.",
  usage: "canlıdestek"
};