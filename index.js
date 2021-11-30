const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`This server's name is: ${interaction.guild.name}
Stats:\`\`\`
Members: ${interaction.guild.memberCount}
Server ID: ${interaction.guild.id}
\`\`\``);
	} else if (commandName === 'user') {
		await interaction.reply(`Your username is: ${interaction.user.tag}\nYour ID is: ${interaction.user.id}`);
	} else if (commandName === 'members') {
		await interaction.reply(`This server has ${interaction.guild.memberCount} members.
\`\`\`
${interaction.guild.members}
\`\`\``)
	}
});


client.login(token);
