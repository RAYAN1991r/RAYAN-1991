const Discord = require("discord.js");
const { Color } = require("../../config.js");
const mongoose = require("mongoose");
let profile = require("../../data/user.js");
module.exports = {
  name: "leaderboard",
  aliases: ["lb","top"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 5000,
  run: async (bot, message, args,prefix) => {
    if(!args[0]) return message.channel.send({content:` syntax error usage ${prefix}top [money,level]`})
    if(!args[1]) return message.channel.send({content:`usage ${prefix}top [money,level]`})
   if(args[1] === "money"){
    
    let data = await User.find({})

      .sort([["money","descending"]])
      .exec(async (err, res) => {
        if (err) console.log(err);

        let page = Math.ceil(res.length / 10);

        let embed = new Discord.MessageEmbed();
        embed.setTitle("Top Money Of Bobo");
        embed.setColor("RANDOM")
        let pg = 1;
        if (pg != Math.floor(pg)) pg = 1;
        if (!pg) pg = 1;
        let end = pg * 10;
        let start = pg * 10 - 10;
        if (res.length === 0) {
          embed.addField("Error", "not found");
        } else if (res.length <= start) {
          embed.addField("error", "page not found");
        } else if (res.length <= end) {
       embed.setFooter("Top Money of Bobo")
          /// embed.setFooter(`page ${pg} of ${page}`);
          for (i = start; i < res.length; i++) {
            embed.addField(`:sparkles: #${i + 1} | ${res[i].name}`,`**$${res[i].money.toLocaleString()}**`,
            );
          }

        
        } else {
          for (i = start; i < end; i++) {
            embed.addField(`:sparkles: #${i + 1} | ${res[i].name}`,`**$${res[i].money}**`,);
          }
        }
          message.channel.send({ embeds: [embed] });
        
      })}
    
    if(args[1]=== "level"){
      
    let data = await User.find({})

      .sort([["levels", "descending"]])
      .exec(async (err, res) => {
        if (err) console.log(err);
     let page = Math.ceil(res.length / 10);

   
      let embed = new Discord.MessageEmbed();
        embed.setTitle(`Top level Of Bobo`);
        embed.setColor("RANDOM");
        let pg = 1;
        if (pg != Math.floor(pg)) pg = 1;
        if (!pg) pg = 1;
        let end = pg * 10;
        let start = pg * 10 - 10;
        if (res.length === 0) {
          embed.addField("Error", "not found");
        } else if (res.length <= start) {
          embed.addField("error", "page not found");
        } else if (res.length <= end) {
         embed.setFooter("Top Level of Bobo")
          //mbed.setFooter(`page ${pg} of ${page}`);
          for (i = start; i < res.length; i++) {
            embed.addField(
              `:sparkles: #${i + 1} | ${res[i].name} `,
              `:sparkles: **level**: ${res[i].levels.toLocaleString()}`
            );
          }
        } else {
          for (i = start; i < end; i++) {
            embed.addField(
              `:sparkles: #${i + 1} | ${res[i].name} `,
              `:sparkles: **level**: ${res[i].levels}`,
            );
          }
        }
        message.channel.send({ embeds: [embed] });
      
      })
    
    
    
    }  }};
