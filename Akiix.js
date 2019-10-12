const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ("<")

client.login(process.env.TOKEN);

const activities_list = [
    "<Aide | By Edwin [V1.0]",
    "<Aide | By Edwin [V1.0]",
    "Discord ► https://discord.gg/dehgnGp"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#0080FF')
        .setTitle("__Voici la liste des commandes__:")
        .setThumbnail(message.author.avatarURL)
        .setDescription("**Info** : \n" +
            " Si une commande contient {...}, cela signifie que c'est un argument optionnel. \n" )
      message.author.send({embed});
      message.reply(" 📧 Regarde tes messages !");
      }

      if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
        let embed = new Discord.RichEmbed()
        .setColor('#0080FF')
        .setDescription("__**Commandes Admin:**__ \n" +
            " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" +
            " **<say {message}** \n" +
            " Pour envoyer un message au nom du bot. \n" +
            " **<clear {1 - 99}** \n" +
            " Supprimer les messages d'un salon textuel.\n" +
            " **<sondage ** \n" +
            " Créer ton Sondage.\n" +
            " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" )
      message.author.send({embed});
      }

      if(message.content.startsWith(prefix + "aide") || message.content.startsWith(prefix + "Aide")) {
      let embed = new Discord.RichEmbed()
      .setColor('#0080FF')
      .setDescription("__**Commandes par défaut:**__ \n" +
      " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" +
      " **<avatar {@user}** \n" +
      " Montre l'avatar d'une personne. \n" +
      " **<8ball** \n" +
      " Pose des question et Akiix te repond. \n" +
      " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" +
      " **<support** \n" +
      " Te donne le serveur de mon créateur. \n" +
      " **<invite** \n" +
      " Te donne mon lien d'invitation. \n" +
      " **<dhelp** \n" +
      " Te donne les commande en direct dans un salon textuel. \n" +
      " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n" )
      message.author.send({embed});
      }

    if (message.content === "<support"){
        message.channel.sendMessage("GO => [ https://discord.gg/dehgnGp ] !)");
        console.log("Commande Support effectué");
    }

    if(message.content.startsWith(prefix + "invite") || message.content.startsWith(prefix + "Invite")) {
        let embed = new Discord.RichEmbed()
        .setColor('#00FFFF')
        .setTitle("Invite moi")
        .addField(" 📋 Pour m'ajouter a ton discord ", "[Cliquez ici](https://discordapp.com/oauth2/authorize?client_id=551720439299178506&scope=bot&permissions=66321471)", true)
        .setFooter(`Réclamé par ${message.author.tag} | By Edwin `)
        .setTimestamp()
        message.channel.send({embed})
      }

      if(message.content.startsWith(prefix + "dhelp") || message.content.startsWith(prefix + "Dhelp")) {
        let embed = new Discord.RichEmbed()
            .setDescription(`${message.author.username}, Voici la liste des commandes:`)
            .addField('DIVERS:' , "` <support \n<invite \n<dhelp `")
            .addField(`MODERATION:` , "` <say \n<clear`")
            .addField('FUN:' , "'<avatar \n<sondage \n<8ball'" ) 
            .setTimestamp()
            .setColor("0x00FF00")
            .setFooter(`Réclamé par ${message.author.tag} | By Edwin `)
        message.channel.sendEmbed(embed);
    }

    if (message.content.startsWith(prefix + "say") || message.content.startsWith(prefix + "Say")) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        var msg = message.content.substr('4')
        message.delete(message.author);
        message.channel.send(msg);
    }
}

    if(message.content.startsWith(prefix + "owner") || message.content.startsWith(prefix + "Owner")) {
        var d = new Date()
        let embed = new Discord.RichEmbed()
        .setColor('#5F04B4')
        .setTitle("Mon créateur: @Edωɨה#4822  ")
        .setFooter(`Demandé par ${message.author.tag} | By Edwin `)
        .setTimestamp()
            message.channel.send({embed})
    }
    
    if(message.content.startsWith(prefix + "clear") || message.content.startsWith(prefix + "Clear")) { 
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("❌ Tu pas les perms... !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`✅ ${args[0]} messages ont été supprimés !`);
        });
    }

});

client.on("message", function(message) {
    if (message.author.equals(client.user)) return;
    
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {
            case "avatar":
            if (!message.mentions.users.first()) return message.channel.send("**Merci de mentionner un utilisateur**")
                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                let ava = user.displayAvatarURL
                let embed = {
                color:0x000000,
                description:"Avatar de "+user.username+"",
                image:{url:ava}
                }
            message.channel.send("", {embed})
            break;
           case "sondage":
           if (message.member.hasPermission("MANAGE_MESSAGES")) {
               let args = message.content.split(" ").slice(1);
               let thingToEcho = args.join(" ")
               if (!thingToEcho) return message.reply("**hmmm...Je crois que ta oublier la question** :thinking: ")
               if (!message.guild.channels.find("name", "sondage")) return message.reply("**Si tu veux faire un sondage tu dois d'abord créer un chanel sondage !**")
               var embedeee = new Discord.RichEmbed()
                   .setDescription("Sondage")
                   .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                   .setColor("0xB40404")
                   .setTimestamp()
           message.channel.sendMessage("**Votre sondage a bien été envoyé dans #sondage.**")
           message.guild.channels.find("name", "sondage").sendEmbed(embedeee)
           .then(function (message) {
               message.react("✅")
               message.react("❌")
           }).catch(function() {
           });
           }else{
               return message.reply("❌ **Ta pas les permissions !**")}
           break;
           case "8ball":
           let argsed = message.content.split(" ").slice(1);
           let tte = argsed.join(" ")
           if (!tte){
               return message.reply("**hmmm...Je crois que ta oublier la question** :yum: ")};

                        var replys8 = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponse8 = (replys8[Math.floor(Math.random() * replys8.length)])
    
               var replys = [
               "Oui.",
               "Non.",
               "Je ne sais pas.",
               "Peut-être.",
               "Probablement."
               ];
           
               let reponse = (replys[Math.floor(Math.random() * replys.length)])
               var ballembed = new Discord.RichEmbed()
               .setDescription("Akiix :heart: :black_joker: ")
               .addField("Question", tte)
               .addField("Réponse", reponse)
               .setColor(reponse8)
           message.channel.sendEmbed(ballembed)
               break;
            }});

client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }
});
