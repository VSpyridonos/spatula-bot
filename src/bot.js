require('dotenv').config();


const { Client } = require('discord.js');
const client = new Client();
const PREFIX = '!';

client.on('ready', () => {
    console.log(`${client.user.username} has logged in`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        if (CMD_NAME === 'kick') {
            if (!message.member.hasPermission('KICK_MEMBERS'))
                return message.reply('You do not have permissions to use that command.');
            if (args.length === 0)
                return message.reply('Please provide an ID');
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member
                    .kick()
                    .then((member) => message.channel.send(`${member} was kicked.`))
                    .catch((err) => message.channel.send('I cannot kick that user :('));
            }
            else {
                message.channel.send('That member was not found!');
            }
        } else if (CMD_NAME === 'tft') message.channel.send(`Available commands:\n\n[CHAMPIONS]\n\n!champions\n!comps\n!classes\n!origins\n\n\n[ITEMS]\n\n!items\n!belt\n!bow\n!cloak\n!gloves\n!rod\n!spatula\n!sword\n!tear\n!vest`);
        else if (CMD_NAME === 'champions') {
            message.channel.send({
                files: [{
                    attachment: 'images/champions.png',
                    name: 'champions.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'comps') {
            message.channel.send({
                files: [{
                    attachment: 'images/comps.png',
                    name: 'comps.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'classes') {
            message.channel.send({
                files: [{
                    attachment: 'images/classes.png',
                    name: 'classes.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'origins') {
            message.channel.send({
                files: [{
                    attachment: 'images/origins.png',
                    name: 'origins.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'items') {
            message.channel.send({
                files: [{
                    attachment: 'images/items.png',
                    name: 'items.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'belt') {
            message.channel.send({
                files: [{
                    attachment: 'images/belt.png',
                    name: 'belt.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'bow') {
            message.channel.send({
                files: [{
                    attachment: 'images/bow.png',
                    name: 'bow.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'cloak') {
            message.channel.send({
                files: [{
                    attachment: 'images/cloak.png',
                    name: 'cloak.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'gloves') {
            message.channel.send({
                files: [{
                    attachment: 'images/gloves.png',
                    name: 'gloves.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'rod') {
            message.channel.send({
                files: [{
                    attachment: 'images/rod.png',
                    name: 'rod.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'spatula') {
            message.channel.send({
                files: [{
                    attachment: 'images/spatula.png',
                    name: 'spatula.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'sword') {
            message.channel.send({
                files: [{
                    attachment: 'images/sword.png',
                    name: 'sword.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'tear') {
            message.channel.send({
                files: [{
                    attachment: 'images/tear.png',
                    name: 'tear.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        } else if (CMD_NAME === 'vest') {
            message.channel.send({
                files: [{
                    attachment: 'images/vest.png',
                    name: 'vest.png'
                }]
            })
                .then(console.log)
                .catch(console.error);
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

