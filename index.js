const Discord = require('discord.js')
const client = new Discord.Client()
const command = require("./commands")
// const config = require("./config.json")

client.on('ready', () => {
    console.log('The client is ready!')

    command(client, 'ping', message => {
        message.channel.send('Pong!')
    })

})

client.login(process.env.BOT_TOKEN_JS)
