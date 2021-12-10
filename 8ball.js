const Discord = require("discord.js")
module.exports = {
    info: {
        name: "8ball",
        description: "Hazle una pregunta al bot y te respondera aleatoriamente",
        usage: "8ball <Pregunta>",
        aliases: ["8b"]
    },

    run: async function(client, message, args){
      if (!message.guild.me.permissions.has('EMBED_LINKS')) {
        return message.channel.send('No tengo el permiso **EMBED_LINKS**')
    }
 let mensaje = args.slice().join(" ")
 if(!mensaje) return message.channel.send("Necesito que me digas una pregunta.");
 if(!mensaje.length > 900) return message.channel.send("tu pregunta no puede superar los 900 caracteres")
 let respuestas = ["Si", "No", "Puede ser", "Probablemente si", "Probablemente no", "Mis registros dicen que no", "Mis registros dicen que si", "Mi base de datos indica que no", "Mi base de datos indica que si", "Lamentablemente no", "Lo siento pero no", "Tienes suerte, es un si", "Hoy es tu dia de suerte, Todo indica a que si", "Hoy no es tu dia de suerte", "Lo siento, sera otro dia"]
 const ball = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setFooter(`Ejecutado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
 .setDescription(`**A la pregunta ${mensaje}, de ${message.author.username}**\n\nMi respuesta es: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)
 message.reply({ embeds: [ball] })
 }
}

/// discord: rtx#3317
