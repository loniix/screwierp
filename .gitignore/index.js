const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// Toutes les réponses automatiques du chatbot.
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
// Fin des réponses automatiques du chatbot.

// Message de bienvenue
client.on('guildMemberAdd', member => {
  console.log('Trouvé !');
  const channel = member.guild.channels.find('name', 'bienvenue');
  if (!channel) return;
  console.log('Trouvé 2 !');
  channel.reply(`Bienvenue sur **The Old Republic RP**, ${member}. Je suis **Screwie**, droïde astromech du **créateur** et je vous accompagnerais partout ! Vous devez commencer par lire tous les salons de la catégorie **Informations** avant de vous lancer !`);
});




// Création d'un préfixe de commande
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
if(!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: botconfig.prefix
  };
}

let prefix = prefixes[message.guild.id].prefixes;
console.log(prefix);

// Indicateur de présence de Screwie
client.user.setStatus('Online')
client.user.setPresence({game : { name : 'aider le Professeur', type: 0}})

// Token du BOT
client.login("NDE5MTIxNjYwMTM4ODgxMDI0.DXrnDA.IipiPeIIY8pBs47ypk53WMoqPxk");
