const Discord = require("discord.js");

const bot = new Discord.Client();

//bot start
    bot.on("ready", () => {

        console.log('Bot is ready! ${bot.user.username}');

    });

//bot login
    bot.login("MzUxNDI3NjA2ODUzNDUxNzc2.DIScIw.Lk6NQ4nM6pe7E52P48H6NYT2B-M");


//bot commands
    bot.on("message", msg=> {

      var sender = msg.author;
      var cont = msg.content.toUpperCase();
      var prefix = "!"

      if(cont === prefix + "HELLO"){

          msg.channel.send("Hello" + sender)

      }
      else if(cont === prefix + "BAKA"){

        msg.channel.send(sender + " BAKA!!!")

      }else if(cont === prefix + "NYA"){
          msg.channel.send(sender + " NYA!!!!")
      }
    });

//user join
    bot.on("guildMemberAdd", user =>{
        var role = user.guild.roles.find('name','Baka');
        
        user.addRole(role)
    });