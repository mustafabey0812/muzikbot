//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Botun pinglenmesi",
  execute(client, message) {
  message.channel.send('PONG :)')
    
}
}
