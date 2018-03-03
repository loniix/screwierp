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
  if (msg.content === 'Comment allez-vous ?') {
    msg.reply('Parfait. Et vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ca va ?') {
    msg.reply('En pleine forme ! Et vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hein, Screwie ?') {
    msg.reply('Tout à fait, professeur.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bonsoir') {
    msg.reply('Bonjour ! Marrant, pas vrai ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Code C-137 Cornichon') {
    msg.reply('Exécution : Cody est un con. Oops, je me suis trompé.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hey') {
    msg.reply('Bonjour ! Comment vous-sentez-vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Le corbeau est brûlé.') {
    msg.reply('Exécution : Screwie > Detenaï.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancake du matin.') {
    msg.reply('Intialisation : Bonjour, Professeur.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Screwie ? Bouton !') {
    msg.reply('Oh oui. *Screwie appuie sur le bouton et remet le temps en place.*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Screwie ?') {
    msg.reply('Non.');
  }
});

client.on('guildMemberAdd', member => {
  console.log('Trouvé !');
  const channel = member.guild.channels.find('name', 'bienvenue');
  if (!channel) return;
  console.log('Trouvé 2 !');
  channel.reply(`Bienvenue sur **The Old Republic RP**, ${member}. Je suis **Screwie**, droïde astromech du **créateur** et je vous accompagnerais partout ! Vous devez commencer par lire tous les salons de la catégorie **Informations** avant de vous lancer !`);
});

client.on('guildMemberAdd', member => {
  console.log('User' + member.user.username + 'a rejoint le serveur')
  var role = member.guild.roles.find('name','Arrivant 🚶');
  member.addRole(role)

  
client.login("NDE5MTIxNjYwMTM4ODgxMDI0.DXrnDA.IipiPeIIY8pBs47ypk53WMoqPxk");
