const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'Bonjour') {
    msg.reply('Salutations.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Comment allez-vous') {
    msg.reply('Parfait. Et vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pub') {
    msg.reply('Vous souhaitez faire de la pub ? Tenez https://discord.gg/3FMGSfR.');
  }
});

client.on('guildMemberAdd', member => {
  console.log('Trouvé !');
  const channel = member.guild.channels.find('name', 'bienvenue');
  if (!channel) return;
  console.log('Trouvé 2 !');
  channel.send(`Bienvenue sur **The Old Republic RP**, ${member}. Je suis **Screwie**, droïde astromech du **créateur** et je vous accompagnerais partout ! Vous devez commencer par lire tous les salons de la catégorie **Informations** avant de vous lancer !`);
});

client.login("NDE5MTIxNjYwMTM4ODgxMDI0.DXrnDA.IipiPeIIY8pBs47ypk53WMoqPxk");
