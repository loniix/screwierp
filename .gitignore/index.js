const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'Bonjour') {
    msg.send('Salutations.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Comment allez-vous ?') {
    msg.send('Parfait. Et vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Ca va ?') {
    msg.send('En pleine forme ! Et vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hein, Screwie ?') {
    msg.send('Tout à fait, professeur.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Bonsoir') {
    msg.send('Bonjour ! Marrant, pas vrai ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Code C-137 Cornichon') {
    msg.send('Exécution : Cody est un con. Oops, je me suis trompé.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hey') {
    msg.send('Bonjour ! Comment vous-sentez-vous ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Le corbeau est brûlé.') {
    msg.send('Exécution : Screwie > Detenaï.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Pancake du matin.') {
    msg.send('Intialisation : Bonjour, Professeur.');
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
