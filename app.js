const Discord = require("discord.js");
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready',() => {
  console.log(`i am online\ni am online\n i have ${client.users.size} users that can use my commands\n i am in ${client.channels.size} channels\n i am in ${client.guilds.size} guilds `);
})

var prefix = "`"
client.on('message', async message => {
  client.user.setActivity('use `help');
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  var argresult = args.split(1).join('');

  let command = args.shift().toLowerCase();

  if (command ===  'ping') {
    message.channel.send('pong');
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === 'setstatus') {
    client.user.setsStatus(argresult);
  }

  if(command === 'setgame') {
    client.user.setActivity(argresult);
  }
});


client.login(token);
