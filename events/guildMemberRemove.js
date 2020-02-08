module.exports = member => {
  let guild = member.guild;
  member.send('Why did you leaved?');
  guild.defaultChannel.send(``);
};