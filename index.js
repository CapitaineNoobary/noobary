const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("Command: $help");
    console.log("Connectedç");
});

bot.login("NjM2NTg5NTEzMzkyNjUyMzE0.XdkQUA.L7iMePAtCsQa54jWF7XNC_xgSK8");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -$help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. ('_')");
        console.log("Commande Salut effectué");
    }
});
