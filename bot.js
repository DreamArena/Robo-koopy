import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({intents: [
    GatewayIntentBits.GuildMessages,
     GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
    ]})

const rest = new REST({version: '10'}).setToken(TOKEN);



client.on('ready', () => { console.log(`Logged in as ${client.user.tag}! Lets make some noise <3`);
});

async function main() {
    const commands = [
        {
        name: 'ping',
        description: 'calls you a slur'
        }
    ];
    try {
        console.log('Started refreshing application (/) commands.')
        await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);

        client.login(TOKEN);
    } catch (err) {
        console.log(err)
    }
}
    
main()