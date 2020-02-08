module.exports = member => {
    let username = member.user.username;
    member.send('Welcome to the Banshee X server!' + username );
    member.guild.defaultChannel.send('');
};