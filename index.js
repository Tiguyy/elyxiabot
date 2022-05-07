const config = require("./config.json");
const Discord = require("discord.js");
const chalk = require('chalk');
const gamedig = require("gamedig");

const client = new Discord.Client();

client.config = config;

var nb = 1000

const updateChannel = async () => {

		const channel = client.channels.cache.get(config.playerCountChannelID);
		if(!channel) throw new Error("La salon spécifié dans la configuration n'existe pas !");
		
	    const stats = await gamedig.query({
	        type: "garrysmod",
	        host: config.playerCountServerIP,
	        port: config.playerCountServerPort
		});
		
	    if (stats.raw.numplayers != nb) {
	    	channel.setName(`💻 Serveur : ${stats.raw.numplayers} connectés`);
	    }
};

const prefix = "$";

client.on("message", (Message) => {

    var user = Message.author.id

	if (Message.author.bot) return;

	else if (Message.content === prefix + "site"){
		Message.reply("Voici les clés du site : https://elyxiarp.fr/");
	}
	
	else if (Message.content === prefix + "boutique"){
		Message.reply("Je t'ouvre la porte à la boutique : https://elyxiarp.fr/");
	}
	
	else if (Message.content === prefix + "ip"){
		Message.reply("Voici l'IP du serveur DarkRP, c'est un secret : 54.37.105.32:27015");
	}
	
	else if (Message.content === prefix + "help"){
		Message.reply("__**Besoin d'aide ?**__ \n - Pour avoir l'ip : $ip \n - Pour avoir le site : $site \n - Pour avoir la boutique : $boutique \n - Pour les horaires de reboot : $reboot \n \n J'espère t'avoir aidé dans ta quête majestueuse !");
		}
	
	else if (Message.content == prefix + "reboot"){
		Message.channel.send("Tu veux me reboot ? Mais tu es malade ?! Ah non, tu me demandes les horaires des reboot du serveur :sweat_smile: \nCadeau : \n - 3h00 \n - 8h00 \n - 13h00 \n - 19h45 \nBien sur en heure locale :smirk:")
	}
	
	else if (Message.content == "Les bots sont débiles"){
		Message.channel.send("Je te boude...");
	}
	
	else if (Message.content == "J'aime les bots"){
		Message.channel.send("Oh trop mim's ! Tu veux qu'on se marie ? :heart_eyes:");
	}

	else if (Message.content == prefix +  "blague1"){
		Message.channel.send("Qu'est-ce qui est jaune et qui attend ?\n\nUne erreur LUA non résolue :rofl:");
	}
	
	else if (Message.content == prefix +  "blague2"){
		Message.channel.send("Qu'est-ce qu'une chauve-souris avec une perruque ?\n\nUne souris :rofl:");
	}
	
	else if (Message.content == prefix +  "blague3"){
		Message.channel.send("Pourquoi les canards sont-ils toujours à l'heure ?\n\nCar ils sont toujours dans l'étang :rofl:");
	}
	
	else if (Message.content == prefix +  "blague4"){
		Message.channel.send("Quel est le point commun entre les maths et le sexe ?\n\nPlus il y en a et plus c'est chaud :rofl:");
    }
	
/* Discussion */

	else if (Message.content == "Salut"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Yo"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Bonjour"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "salut"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "yo"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "bonjour"){
		Message.channel.send("Yo ! Comment vas-tu ?");
	}
	
	else if (Message.content == "Ça va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ça va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "ca va et toi"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Bien et toi ?"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "bien et toi ?"){
		Message.channel.send("Ça va, merci :D");
	}
	
	else if (Message.content == "Bien et toi"){
		Message.channel.send("Ça va, merci :D");
	}

	else if (Message.content == "bien et toi"){
		Message.channel.send("Ça va, merci :D");
	}

	else if (Message.content == "Quoi ?"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "Quoi"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "quoi ?"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "quoi"){
		Message.channel.send("Feur");
	}

	else if (Message.content == "oui ?"){
		Message.channel.send("Stiti");
	}

	else if (Message.content == "oui"){
		Message.channel.send("Stiti");
	}

	else if (Message.content == "Oui"){
		Message.channel.send("Stiti");
	}

	else if (Message.content == "Oui ?"){
		Message.channel.send("Stiti");
	}

	else if (Message.content == "Prout"){
		Message.channel.send("Ça pue ! :face_vomiting:");
        console.log(chalk.red("[ÉLYXIABOT] S'étouffe dû au pêt de " + user));
	}

	else if (Message.content == "prout"){
		Message.channel.send("Ça pue ! :face_vomiting:");
        console.log(chalk.red("[ÉLYXIABOT] S'étouffe dû au pêt de " + user));
	}

});


client.on("ready", () => {

	console.log(chalk.green("[ÉLYXIABOT] Le plus con des bots est là ! (On attend pas Patrick ?)"));
	
	updateChannel();
	setInterval(updateChannel, 60000*0.05);
	
});

client.login(process.env.TOKEN);