
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // The bot will listen for !
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
          //!character name
            case 'Ana'||'ana':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Bastion\n2. Mercy\n3.Torborn\n\nWeak Against:\n1. Genji\n2.Tracer\n3.D.Va\n'
                });
            break;
            case 'Bastion'||'bastion':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Winston\n2. Reinhardt\n3. Mercy\n\nWeak Against:\n1. Genji\n2. Widowmaker\n3. Hanzo\n'
                });
            break;
            case 'D.Va'||'d.va':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Widowmaker\n2. Mercy\n3. Hanzo\n\nWeak Against:\n1. Mei\n2. Zarya\n3. Reaper\n'
                });
            break;
            case 'Doomfist'||'doomfist':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. D.Va\n2. Winston\n3. Zenyatta\n\nWeak Against:\n1. Sombra\n2. Pharah\n3. Orisa\n'
                });
            break;
            case 'Genji'||'genji':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Bastion\n2. Hanzo\n3. Widowmaker\n\nWeak Against:\n1. Mei\n2. Winston\n3. Zarya\n'
                });
            break;
            case 'Hanzo'||'hanzo':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Bastion\n2. Mercy\n3. Zenyatta\n\nWeak Against:\n1. Genji\n2. Tracer\n3. Winston\n'
                });
            break;
            case 'Junkrat'||'junkrat':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Bastion\n2. Torborn\n3. Reinhardt\n\nWeak Against:\n1. Pharah\n2. Widowmaker\n3. Soldier: 76\n'
                });
            break;
            case 'Lucio'||'lucio':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Mercy\n2. Symmetra\n3. Zenyatta\n\nWeak Against:\n1. Mei\n2. Roadhog\n3. McCree\n'
                });
            break;
            case 'McCree'||'Mccree'||'meccree':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Reaper\n2. Tracer\n3. Mercy\n\nWeak Against:\n1. Genji\n2. Widowmaker\n3. Roadhog\n'
                });
            break;
            case 'Mei'||'mei':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Genji\n2. D.Va\n3. Lucio\n\nWeak Against:\n1. Pharah\n2. Widowmaker\n3. Junkrat\n'
                });
            break;
            case 'Mercy'||'mercy':
                bot.sendMessage({
                    to: channelID,
                    message: 'Strong Against:\n1. Symmetra\n2. Lucio\n3. Zenyatta\n\nWeak Against:\n1. Tracer\n2. Roadhog\n3. Reaper\n'
                });
            break;
            case 'Zenyatta'||'zenyatta':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. D.Va\n2. Roadhog\n3. Winston\n\nWeak Against:\n1. Hanzo\n2. Tracer\n3. Widowmaker\n'
	              });
            break;
            case 'Zarya'||'zarya':
                 bot.sendMessage({
		                 to: channelID,
                     message: 'Strong Against:\n1. D.Va\n2. Genji\n3. Winston\n\nWeak Against:\n1. Pharah\n2. Roadhog\n3. Reaper\n'
	              });
            break;
            case 'Winston'||'winston':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Genji\n2. Hanzo\n3. Widowmaker\n\nWeak Against:\n1. McCree\n2. Mei\n3. Reaper\n'
	              });
            break;
            case 'Widowmaker'||'Widowmaker':
	               bot.sendMessage({
		                 to: channelID,
                     message: 'Strong Against:\n1. Torbjorn\n2. Orisa\n3. Pharah\n\nWeak Against:\n1. Genji\n2. Widowmaker\n3. Hanzo\n'
	              });
            break;
            case 'Tracer'||'tracer':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Bastion\n2. Mercy\n3. Widowmaker\n\nWeak Against:\n1. McCree\n2. Mei\n3. Soldier: 76\n'
	              });
            break;
            case 'Torbjorn'||'torbjorn':
	               bot.sendMessage({
		                 to: channelID,
                     message: 'Strong Against:\n1. Genji\n2. Lucio\n3. Tracer\n\nWeak Against:\n1. Junkrat\n2. Pharah\n3. Widowmaker\n'
	              });
            break;
            case 'Symmetra'||'symmetra':
	               bot.sendMessage({
		                 to: channelID,
                     message: 'Strong Against:\n1. Bastion\n2. D.Va\n3. Reinhardt\n\nWeak Against:\n1. Junkrat\n2. Pharah\n3. Roadhog\n'
	              });
             break;
             case 'Sombra'||'sombra':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Bastion\n2. Pharah\n3. Mercy\n\nWeak Against:\n1. Genji\n2. Mei\n3. Tracer\n'
	              });
             break;
             case 'Soldier: 76'||'soldier: 76'||'soldier76'||'soldier 76'||'Soldier76'||'Soldier 76':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Torbjorn\n2. Widowmaker\n3. Zarya\n\nWeak Against:\n1. Symmetra\n2. Mei\n3. Roadhog\n'
	              });
             break;
             case 'Roadhog'||'roadhog':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Pharah\n2. Reinhardt\n3. Tracer\n\nWeak Against:\n1. D.Va\n2. Genji\n3. Reaper\n'
	              });
             break;
             case 'Reinhardt'||'reinhardt':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Soldier: 76\n2. Torbjorn\n3. Widowmaker\n\nWeak Against:\n1. Reaper\n2. Roadhog\n3. Symmetra\n'
	              });
            break;
            case 'Reaper'||'reaper':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Bastion\n2. Mei\n3. Winston\n\nWeak Against:\n1. Junkrat\n2. McCree\n3. Pharah'
	              });
            break;
            case 'Pharah'||'pharah':
	               bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Bastion\n2. Junkrat\n3. Mei\n\nWeak Against:\n1. Widowmaker\n2. Roadhog\n3. Soldier: 76'
	              });
           break;
           case 'Orisa'||'orisa':
	             bot.sendMessage({
		                 to: channelID,
		                 message: 'Strong Against:\n1. Reinhardt\n2. Roadhog\n3. Torbjorn\n\nWeak Against:\n1. Sombra\n2. Widowmaker\n3. Tracer\n'
	              });
            break;
            default:
              bot.sendMessage({
                    to: channelID,
                    message: 'Invalid Character.'
              });
         }
     }
});
