var Discord = require('discord.io');
var logger = require('winston');
var fs = require("fs");
//var auth = require('./auth.json');

var refresh = true;

var categories = 'Please select a category: \n```\n Sally \n Naruto \n Storm \n Community \n S4 \n UNSCommunity Emotes \n ArashiBoards \n Bleach \n Other```\nExample command: `!list Storm`';

var sally = '```\n Sally: \n calmsally/csally \n delet - deletin \n madsally/msally \n perfectsally/psally - perfectsallyfull/psallyfull \n realsally \n ripinsally1 - ripinsally2 \n rnrsally - rnrsally2 \n sally - sally2 - sally3 - sally4 \n sallygud \n sallymirror \n sallystance \n sallyumad \n thirstysally/thirst - thirstysally2/thirst2 \n ubsally \n \n ibuse \n ibuseback \n ibusecheeks \n ibusefull \n ibuselel \n ibusespit \n ibuseu2 \n ibusewat```';

var naruto = '```\n Naruto: \n bkank \n bkankrf \n charge \n ggez \n kankrf \n laternerd \n madbito \n madsauce \n madshirama \n narutodab \n orop \n otk \n saucewat \n sausage \n technoparty \n tobithink/tt \n tooeasy \n umff/crow \n wat```';

var storm = '```\n Storm: \n acd \n amodesauce/parryjb \n bluebar \n classic \n credits \n dab \n dc \n dommovement1/dm1 - dommovement20/dm20 \n fullacd \n gen - gen2 - gen3 \n hanzoumad \n howmad \n kuroshika/ks \n list2 \n maskedprimate/mp \n midtier \n mm \n mmgg \n narumad \n nocounter \n noneutral \n ottekoi \n parry \n prereq \n rev \n rq \n s1 \n s3 \n s4 \n s4mash \n s4mechanics \n sakuratilt \n snowfield \n thatsenough/te \n trollzo - trollzo2 ```';

var community = '```\n Community: \n advancedmechanics \n comments \n council4 \n crim \n crimfection \n crimgev \n descrub \n dissagree \n drant1s \n funskill \n gkunaigrab \n grip - grip2 \n himiko \n iguess - iguess2 \n jonah1 - jonah2 \n justminatothings \n lachance \n legit \n legitburial \n legithanzo \n legitking \n legitraze \n loicksama \n meidogg \n nikus4 \n ninjagba \n playco \n polotrying1 - polotrying2 \n poornoobtrash \n ragbanhammer \n razebar \n s2meta \n s3scrubs \n trilogy \n trumeta \n usabanhammer \n und3 \n victory```';

var s4 = '```\n Storm: \n amode \n bromance1 - bromance2 \n calmkabuto/calmbuto \n chidori \n doubleamode \n frenemies \n kaku2 \n jubi \n obidara \n lowtier \n madbito1 - madbito2 \n madteam7 \n mwink \n noobcrusher \n nostalgiablind1 - nostalgiablind2 \n nothingpersonell \n playings4 \n madguy \n rasengan \n srssauce \n talknojutsu \n mevsnewgens/mmvsm/yellowfooled111';

var unsc = '```\n UNSCommunity Emotes \n ashkekchem \n dashgud \n doge \n elkek \n eyes - eyes2 \n frenchdara \n froge \n fullpain \n hyperlum/hlum \n hyperqr/hqr \n hyperthink/hthink \n hyperthonk/hthonk \n kek - kek2 \n kekaku \n kekatsuki \n kyle \n lilkek \n minatodfa/mdfa \n okkekoi \n qrs \n realum \n same - same2 \n thesepain \n uhuh - uhuhuh```';

var arashi = '```\n  ArashiBoards: \n 98 \n backhand \n blackguy \n bsnsguy \n bsnsidfa \n calmghost \n calmguy \n carltonplz \n clap \n cmon \n comeatme \n coolgal \n coolguy \n coolidfa \n coolpalm \n coorguy \n cry \n danzoqr \n deadchatcat - deadchatcat2 \n desk \n despeh \n disdarui \n docqr \n fallenmoment \n freezypop \n ecsalute \n edpalm \n edpipe \n ecquite \n ed \n ec \n full98 \n fuuma \n grannyplz \n hyes \n idfa \n itachifacepalm \n japqr \n lightrf \n lum/lutherumad \n mad \n madghost \n madkuzu \n matsumad \n matsurf \n mkidfa \n music \n narahaha \n naruqr \n ninja \n no \n nokashi \n o \n obiorb \n ouch \n pipeguy \n plzguy \n plzkarin \n qr/quantitativereasoning \n rage \n ragequit \n reirf \n scatman \n sekiei \n slowbito \n slowburn \n slowguy \n slowidfa \n slowsuji - slowsuji2 \n slowzo \n smugguy \n snaking \n srsgal \n srsguy \n thatguy \n thatpain \n thisguy \n thisidfa \n thispalm \n thispain \n thissmile \n trollnoki \n uwat \n victory \n victorypalm \n wessanbus \n yugidfa```';

var bleach = '```\n Bleach: \n id \n mayurilit \n mayurirf \n suzumebachi1/sb1 - suzumebachi2/sb2 - suzumebachi3/sb3 - suzumebachi4/sb4```';

var etc = '```\n Other: 360a \n bbtag - bbtag2 \n bestgirl \n bestgirlrf \n bestgirlrffull \n casual \n dk \n falcodab \n friend \n granddad \n itshappenin \n mood \n moviegames \n psn \n rufr \n sonye3 \n 10outta10 \n dancingallnight - dancingallnight2 \n discord \n keikaku \n mute \n tru \n watermark```';

var k = 30;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    refresh = true;
    logger.info('Connected');
    logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')\n');
});

bot.on('disconnect', function(erMsg, code) {
    console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
    if(refresh) {
        console.log('Attempting to reconnect...\n');
        setTimeout(bot.connect.bind(bot), 1000);
    } else {
        console.log('No reconnect requested...\n');
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var cmd2 = args.length > 1 ? args[1] : '';
        var cmd3 = args.length > 2 ? args[2] : '';
        var cmd4 = args.length > 3 ? args[3] : '';
        args = args.splice(1);

        if(cmd2 !== '') {
			if(cmd3 !== '') {
				switch(cmd.toLowerCase()) {
					case 'list':
						switch(cmd2.toLowerCase()) { case 'uns': switch(cmd3.toLowerCase()) { case 'community': sendMsg(channelID, unsc); break; } break; } break;
				}
			}
            switch(cmd.toLowerCase()) {
                case 'list':
                    switch(cmd2.toLowerCase()) {
                        case 'sally': sendMsg(channelID, sally); break;
                        case 'naruto': sendMsg(channelID, naruto); break;
                        case 'storm': sendMsg(channelID, storm); break;
                        case 'community': sendMsg(channelID, community); break;
                        case 's4': sendMsg(channelID, s4); break;
                        case 'unscommunity': sendMsg(channelID, unsc); break;
                        case 'unsc': sendMsg(channelID, unsc); break;
                        case 'uns': sendMsg(channelID, unsc); break;
                        case 'arashiboards': sendMsg(channelID, arashi); break;
                        case 'ab': sendMsg(channelID, arashi); break;
                        case 'bleach': sendMsg(channelID, bleach); break;
                        case 'other': sendMsg(channelID, other); break;
                    }
                    break;
				case 'elo':
					switch(cmd2.toLowerCase()) {
						case 'register':
							fs.writeFile("./elo.text", '\n' + userID + '@:' + user + '@:' + '0', (err) => console.log(err));
							//fs.writeFile("./elo.text", '\n' + userID + '@:' + user + '@:' + '0', (err) => sendMsg(channelID, 'There was an error registering you on our ELO list.'));
							//sendMsg(channelID, 'You have been added to the ELO Ranking System on Sally Bot! (If you received an error just before this message, please contact R.A.G)');
						break;
						case 'top5':
							var elo_txt = fs.readFileSync("./elo.txt", {"encoding": "utf-8"});
							var elo_arr = elo_txt.split('@:');
							var elo_2d = [];
							whiel(elo_arr.length) elo_2d.push(elo_arr.splice(0,3));
							console.log(elo_2d);
							
						break;
					}
            }
        }
        else {
            
            switch(cmd.toLowerCase()) {
                case 'channel': sendMsg(channelID, channelID); break;
                case 'list': sendMsg(channelID, categories); break;




				// ELO
				//case 'elo': 
					//var elo_txt = fs.readFileSync("./elo.txt", {"encoding": "utf-8"});



                
                // Resources
                case 'gev_locals': sendMsg(channelID, 'https://www.youtube.com/playlist?list=PLFY4qTm8_IdHQTpgEEaT2kVjnUNQJlgl-'); break;
                case 'gev_netplay': sendMsg(channelID, 'https://www.youtube.com/playlist?list=PLFY4qTm8_IdGdTEo80ZjHuNk2nmJsQTwB'); break;
                case 'gen_twitch': sendMsg(channelID, 'https://www.twitch.tv/UNSGCommunity'); break;
                case 'gen_ckunai': sendMsg(channelID, 'https://docs.google.com/document/d/10zehzjK7o1-p5-ZYgubn-CpkBk3QAbTfxQpfDfEb7PE/edit'); break;
                case 'gen_tier': sendMsg(channelID, 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'); break;
                case 'gen_tiers': sendMsg(channelID, 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'); break;
                case 'gen_mu': sendMsg(channelID, 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'); break;
                case 'gen_mus': sendMsg(channelID, 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'); break;
                case 'term': sendMsg(channelID, 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'); break;
                case 'terms': sendMsg(channelID, 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'); break;
                case 'gen_quote': sendMsg(channelID, 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'); break;
                case 'gen_quotes': sendMsg(channelID, 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'); break;


                // Sally
                case 'calmsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/3.png"); break;
                case 'csally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/3.png"); break;
                case 'delet': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/6.png"); break;
                case 'deletin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/7.png"); break;
                case 'madsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/4.png"); break;
                case 'msally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/4.png"); break;
                case 'psally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/pSally.gif"); break;
                case 'perfectsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/pSally.gif"); break;
                case 'psallyfull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/pSallyFull.gif"); break;
                case 'perfectsallyfull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/pSallyFull.gif"); break;
                case 'realsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/2.png"); break;
                case 'ripinsally1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ripinsally1.png"); break;
                case 'ripinsally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ripinsally2.png"); break;
                case 'rnrsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/5.png"); break;
                case 'rnrsally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/rnrsally2.png"); break;
                case 'sally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/1.png"); break;
                case 'sally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/sally2.png"); break;
                case 'sally3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/sally3.png"); break;
                case 'sally4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/sally4.png"); break;
                case 'sallygud': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallygud.png"); break;
                case 'sallymirror': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallymirror.jpg"); break;
                case 'sallystance': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallystance.png"); break;
                case 'sallyumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/sallyumad.png"); break;
                case 'thirstysally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally2.jpg"); break;
                case 'thirst': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally2.jpg"); break;
                case 'thirstysally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally.jpg"); break;
                case 'thirst2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/thirstysally.jpg"); break;
                case 'ubsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ubsally.png"); break;
                
                
                // Ibuse
                case 'ibuse': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuse.png"); break;
                case 'ibuseback': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuseback.png"); break;
                case 'ibusecheeks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusecheeks.png"); break;
                case 'ibusefull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusefull.png"); break;
                case 'ibuselel': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuselel.png"); break;
                case 'ibusespit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusespit.png"); break;
                case 'ibuseu2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibuseu2.png"); break;
                case 'ibusewat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ibusewat.png"); break;
                
                
                // Naruto
                case 'bkank': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/bkank.jpg"); break;
                case 'bkankrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/bkankrf.png"); break;
                case 'charge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/charge.jpg"); break;
                case 'ggez': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/ggez.gif"); break;
                case 'kankrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/kankrf.png"); break;
                case 'laternerd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/laternerd.gif"); break;
                case 'madbito': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/madbito.png"); break;
                case 'madsauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/madsauce.jpg"); break;
                case 'madshirama': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madshirama.png"); break;
                case 'narutodab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/NarutoDab.png"); break;
                case 'orop': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/orop.jpg"); break;
                case 'otk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/otk.png"); break;
                case 'saucewat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/sauceraped.png"); break;
                case 'sausage': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sauce.jpg"); break;
                case 'technoparty': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/technoparty.gif"); break;
                case 'tobithink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/tobithink.png"); break;
                case 'tt': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/tobithink.png"); break;
                case 'tooeasy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/tooeasy.jpg"); break;
                case 'umff': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/umff.jpg"); break;
                case 'crow': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/umff.jpg"); break;
                case 'wat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/wat.png"); break;
                
                
                // Storm
                case 'acd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ACD.gif"); break;
                case 'amodesauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/amodesauce.png"); break;
                case 'parryjb': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/amodesauce.png"); break;
                case 'bluebar': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/bluebar.png"); break;
                case 'classic': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/classic.gif"); break;
                case 'credits': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/credits.png"); break;
                case 'dab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dab.png"); break;
                case 'dc': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/dc.png"); break;

                case 'dommovement1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm1.gif"); break;
                case 'dm1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm1.gif"); break;
                case 'dommovement2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm2.gif"); break;
                case 'dm2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm2.gif"); break;
                case 'dommovement3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm3.gif"); break;
                case 'dm3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm3.gif"); break;
                case 'dommovement4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm4.gif"); break;
                case 'dm4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm4.gif"); break;
                case 'dommovement5': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm5.gif"); break;
                case 'dm5': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm5.gif"); break;
                case 'dommovement6': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm6.gif"); break;
                case 'dm6': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm6.gif"); break;
                case 'dommovement7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm7.gif"); break;
                case 'dm7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm7.gif"); break;
                case 'dommovement8': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm8.gif"); break;
                case 'dm8': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm8.gif"); break;
                case 'dommovement9': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm9.gif"); break;
                case 'dm9': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm9.gif"); break;
                case 'dommovement10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm10.gif"); break;
                case 'dm10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm10.gif"); break;
                case 'dommovement11': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm11.gif"); break;
                case 'dm11': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm11.gif"); break;
                case 'dommovement12': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm12.gif"); break;
                case 'dm12': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm12.gif"); break;
                case 'dommovement13': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm13.gif"); break;
                case 'dm13': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm13.gif"); break;
                case 'dommovement14': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm14.gif"); break;
                case 'dm14': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm14.gif"); break;
                case 'dommovement15': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm15.gif"); break;
                case 'dm15': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm15.gif"); break;
                case 'dommovement16': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm16.gif"); break;
                case 'dm16': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm16.gif"); break;
                case 'dommovement17': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm17.gif"); break;
                case 'dm17': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm17.gif"); break;
                case 'dommovement18': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm18.gif"); break;
                case 'dm18': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm18.gif"); break;
                case 'dommovement19': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm19.gif"); break;
                case 'dm19': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm19.gif"); break;
                case 'dommovement20': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm20.gif"); break;
                case 'dm20': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/dm20.gif"); break;

                case 'fullacd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/fullACD2.gif"); break;
                case 'gen': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/Gen.jpg"); break;
                case 'gen2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/gen2.png"); break;
                case 'gen3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/Gen3.png"); break;
                case 'hanzoumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/hanzoumad.jpg"); break;
                case 'howmad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/howmad.png"); break;
                case 'kuroshika': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/minatokuroshika.png"); break;
                case 'ks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/minatokuroshika.png"); break;
                case 'list2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/list2.PNG"); break;
                case 'maskedprimate': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/maskedprimate.png"); break;
                case 'mp': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/maskedprimate.png"); break;
                case 'midtier': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/midtier.jpg"); break;
                case 'mm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/MaskedGod.png"); break;
                case 'mmgg': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mmgg.png"); break;
                case 'narumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/narumad.png"); break;
                case 'nocounter': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/nocounter.png"); break;
                case 'noneutral': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/noneutral.png"); break;
                case 'ottekoi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ottekoi.gif"); break;
                case 'parry': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/parry.png"); break;
                case 'prereq': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/prereq.jpg"); break;
                case 'rev': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/rev.png"); break;
                case 'rq': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rq.png"); break;
                case 's1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/s1.jpg"); break;
                case 's3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/s3.png"); break;
                case 's4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/s4.png"); break;
                case 's4mash': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/s4mash.jpg"); break;
                case 's4mechanics': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/s4mechanics.jpg"); break;
                case 'sakuratilt': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sakuratilt.png"); break;
                case 'snowfield': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/snowfield.png"); break;
                case 'thatsenough': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thatsenough.png"); break;
                case 'te': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thatsenough.png"); break;
                case 'trollzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/trollzo.png"); break;
                case 'trollzo2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/trollzo2.png"); break;
                
                
                // Community
                case 'advancedmechanics': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/advancedmechanics.png"); break;
                case 'comments': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/comments.png"); break;
                case 'council4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/council4.png"); break;
                case 'crim': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/crim.jpg"); break;
                case 'crimfection': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/crimfection.png"); break;
                case 'crimgev': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/crimgev.png"); break;
                case 'descrub': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/descrub.png"); break;
                case 'dissagree': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dissagree.png"); break;
                case 'drant1s': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/drant1s.png"); break;
                case 'funskill': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/funskill.png"); break;
                case 'gkunaigrab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/gkunaigrab.png"); break;
                case 'grip': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/grip.PNG"); break;
                case 'grip2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/grip2.png"); break;
                case 'himiko': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/himiko.png"); break;
                case 'iguess': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/iguess.png"); break;
                case 'iguess2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/iguess2.png"); break;
                case 'jonah1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jonah1.jpg"); break;
                case 'jonah2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jonah2.png"); break;
                case 'justminatothings': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/justminatothings.PNG"); break;
                case 'lachance': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/lachance.jpeg"); break;
                case 'legit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/legit.png"); break;
                case 'legitburial': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitburial.png"); break;
                case 'legithanzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legithanzo.png"); break;
                case 'legitking': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitking.png"); break;
                case 'legitraze': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/legitraze.png"); break;
                case 'loicksama': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/loicksama.png"); break;
                case 'meidogg': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/meidogg.jpg"); break;
                case 'nikus4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/nikus4-2.jpg"); break;
                case 'ninjagba': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/ninjaGBA"); break;
                case 'playco': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/playco.png"); break;
                case 'polotrying1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/polotrying1.png"); break;
                case 'polotrying2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/polotrying2.png"); break;
                case 'poornoobtrash': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/poornoobtrash.png"); break;
                case 'ragbanhammer': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/ragbanhammer.png"); break;
                case 'razebar': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/razebar.png"); break;
                case 's2meta': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/s2meta.png"); break;
                case 's3scrubs': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/s3scrubs.png"); break;
                case 'trilogy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/trilogy.png"); break;
                case 'trumeta': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/meta.png"); break;
                case 'usabanhammer': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/usabanhammer.png"); break;
                case 'und3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/und3.png"); break;
                case 'victory': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/victory.png"); break;
                
                
                // S4 Story Images
                case 'amode': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/amode.png"); break;
                case 'bromance1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bromance1.png"); break;
                case 'bromance2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bromance2.png"); break;
                case 'calmkabuto': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmkabuto.png"); break;
                case 'calmbuto': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmkabuto.png"); break;
                case 'chidori': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/chidori.png"); break;
                case 'doubleamode': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/doubleamode.png"); break;
                case 'frenemies': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/U3.png"); break;
                case 'kaku2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/kakU2.png"); break;
                case 'jubi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/jubi.png"); break;
                case 'obidara': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/khronosandkutsus.png"); break;
                case 'lowtier': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/lowtier.png"); break;
                case 'madbito1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madbito1.png"); break;
                case 'madbito2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madbito2.png"); break;
                case 'madteam7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madteam7.png"); break;
                case 'mwink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mad2.png"); break;
                case 'noobcrusher': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/noobcrusher.png"); break;
                case 'nostalgiablind1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nostalgiablind1.png"); break;
                case 'nostalgiablind2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nostalgiablind2.png"); break;
                case 'nothingpersonell': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/nothinpersonell.png"); break;
                case 'playings4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/playings4.png"); break;
                case 'madguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rage.png"); break;
                case 'rasengan': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rasengan.png"); break;
                case 'srssauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/srssauce.png"); break;
                case 'talknojutsu': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/talknojutsu.png"); break;
                case 'mevsnewgens': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/yellowfucked.png"); break;
                case 'mmvsm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/yellowfucked.png"); break;
                case 'yellowfooled': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/yellowfucked.png"); break;
                
                
                // UNS Community
                case 'ashkekchem': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/ashkekchem.png"); break;
                case 'dashgud': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/dashgud.png"); break;
                case 'doge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/doge.png"); break;
                case 'elkek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/elkek.png"); break;
                case 'eyes': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/eyes.png"); break;
                case 'eyes2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/eyes2.jpeg"); break;
                case 'frenchdara': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/mad.png"); break;
                case 'froge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/froge.png"); break;
                case 'fullpain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/fullpain.gif"); break;
                case 'getmad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/late-clr/getmad.png"); break;
                case 'hyperlum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperlum.png"); break;
                case 'hlum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperlum.png"); break;
                case 'hyperqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperqr.png"); break;
                case 'hqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperqr.png"); break;
                case 'hyperthink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthink.png"); break;
                case 'hthink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthink.png"); break;
                case 'hyperthonk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthonk.png"); break;
                case 'hthonk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/hyperthonk.png"); break;
                case 'kek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kek3.png"); break;
                case 'kek2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kek2.jpeg"); break;
                case 'kekaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kekaku.png"); break;
                case 'kekatsuki': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/kekatsuki.jpeg"); break;
                case 'kyle': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/kyle.png"); break;
                case 'lilkek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/lilkek.png"); break;
                case 'minatodfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/minatoidfa.png"); break;
                case 'mdfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/minatoidfa.png"); break;
                case 'okkekoi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/okkekoi.png"); break;
                case 'qrs': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/qrs.png"); break;
                case 'realum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/realum.png"); break;
                case 'same': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/same.png"); break;
                case 'same2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/fuckingsame.png"); break;
                case 'thesepain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thesepain.png"); break;
                case 'uhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/uhuh.jpg"); break;
                case 'uhuhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/uhuhuh.png"); break;
                
                
                // ArashiBoards
                case '98': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ngawin.png"); break;
                case 'backhand': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/backhand.jpg"); break;
                case 'blackguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/blackguy.png"); break;
                case 'bsnsguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bsnsguy.png"); break;
                case 'bsnsidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bsnsidfa - Copy.png"); break;
                case 'calmghost': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/calmghost.png"); break;
                case 'calmguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sadguy.png"); break;
                case 'carltonplz': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/carltonplz.png"); break;
                case 'clap': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/clap.gif"); break;
                case 'cmon': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/cmonman.png"); break;
                case 'comeatme': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/comeatme.jpg"); break;
                case 'coolgal': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolgal.png"); break;
                case 'coolguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/399940729.png"); break;
                case 'coolidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolidfa.png"); break;
                case 'coolpalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coolpalm.png"); break;
                case 'coorguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/coorguy.jpg"); break;
                case 'cry': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/bh-2.png"); break;
                case 'danzoqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/danzoqr.png"); break;
                case 'deadchatcat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/deadchatcat.gif"); break;
                case 'deadchatcat2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/deadchatcat2.gif"); break;
                case 'desk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/gaynga.png"); break;
                case 'despeh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/despeh.png"); break;
                case 'disdarui': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/disdarui.jpg"); break;
                case 'docqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/docqr.png"); break;
                case 'fallenmoment': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/FallenMoment.png"); break;
                case 'freezypop': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/FreezyPop.png"); break;
                case 'ecsalute': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ecsalute.png"); break;
                case 'edpalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/edpalm.png"); break;
                case 'edpipe': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/edpipe.png"); break;
                case 'ecquite': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquent-contempt.png"); break;
                case 'ed': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquentdisdan.png"); break;
                case 'ec': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eloquentdisdan3.png"); break;
                case 'full98': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/full98.png"); break;
                case 'fuuma': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/fuuma.png"); break;
                case 'grannyplz': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/grannyplz.png"); break;
                case 'hyes': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/hyes.png"); break;
                case 'idfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/idfa.png"); break;
                case 'itachifacepalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/itatchifp.png"); break;
                case 'japqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/japqr.png"); break;
                case 'lightrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/lightrf.png"); break;
                case 'lum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Lutherumad.png"); break;
                case 'lutherumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Lutherumad.png"); break;
                case 'mad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/mad.png"); break;
                case 'madghost': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/madghost.png"); break;
                case 'madkuzu': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/madkuzu.jpg"); break;
                case 'matsumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/matsumad.png"); break;
                case 'matsurf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/matsurf.png"); break;
                case 'mkidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/mkidfa.png"); break;
                case 'music': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/music.png"); break;
                case 'narahaha': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/Narahaha.png"); break;
                case 'naruqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/naruqr.png"); break;
                case 'ninja': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ninja.png"); break;
                case 'no': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/no.png"); break;
                case 'nokashi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/nokashi.png"); break;
                case 'o': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/o.png"); break;
                case 'obiorb': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/obiorb.png"); break;
                case 'ouch': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ouch.png"); break;
                case 'pipeguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/pipeguy.png"); break;
                case 'plzguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/plzguy.png"); break;
                case 'plzkarin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/plzkarin.png"); break;
                case 'qr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/qr-2020.png"); break;
                case 'quantitativereasoning': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/qr-2020.png"); break;
                case 'rage': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/rage.png"); break;
                case 'ragequit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/ragequit.png"); break;
                case 'reirf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/reirf.png"); break;
                case 'scatman': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/scatman.png"); break;
                case 'sekiei': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/sekieiintensifies.PNG"); break;
                case 'slowbito': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowbito.png"); break;
                case 'slowburn': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowBurn.png"); break;
                case 'slowguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowguy.png"); break;
                case 'slowidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowidfa.png"); break;
                case 'slowsuji': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowSuji2.png"); break;
                case 'slowsuji2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/SlowSujiNoEyes.png"); break;
                case 'slowzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/slowzo.png"); break;
                case 'smugguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/smugguy.png"); break;
                case 'snaking': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/snaking.png"); break;
                case 'srsgal': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/srsgal.png"); break;
                case 'srsguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/srsnga.jpg"); break;
                case 'thatguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thatguy.png"); break;
                case 'thatpain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thatpain.png"); break;
                case 'thisguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisguy.png"); break;
                case 'thisidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisidfa.png"); break;
                case 'thispalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thispalm.png"); break;
                case 'thispain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thispain.png"); break;
                case 'thissmile': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/thisnga.png"); break;
                case 'trollnoki': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/trollnoki.png"); break;
                case 'uwat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/eskimoplease.png"); break;
                case 'victory': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/victory.png"); break;
                case 'victorypalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/victorypalm.png"); break;
                case 'wessanbus': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/wessanbus.png"); break;
                case 'yugidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/smilies/yugidfa.png"); break;
                
                
                // Bleach
                case 'id': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/id.png"); break;
                case 'mayurilit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/mayurilit.png"); break;
                case 'mayurirf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/mayurirf.png"); break;
                case 'suzumebachi1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi1.png"); break;
                case 'sb1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi1.png"); break;
                case 'suzumebachi2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi2.png"); break;
                case 'sb2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi2.png"); break;
                case 'suzumebachi3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi4.png"); break;
                case 'sb3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi4.png"); break;
                case 'suzumebachi4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi3.png"); break;
                case 'sb4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arcade-edition/suzumebachi3.png"); break;
                
                
                // Other Gaming
                case '360a': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/360A.png"); break;
                case 'bbtag': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/bbtag.png"); break;
                case 'bbtag2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/bbtag2.png"); break;
                case 'bestgirl': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/shizuku_excited.png"); break;
                case 'bestgirlrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/bestgirlrf.png"); break;
                case 'bestgirlrffull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/bestgirlrffull.png"); break;
                case 'casual': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/casual.jpg"); break;
                case 'dk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/donkeyraped.png"); break;
                case 'falcodab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/falcodab.jpg"); break;
                case 'friend': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/friend.png"); break;
                case 'granddad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/granddad.jpg"); break;
                case 'itshappenin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/itshappening.png"); break;
                case 'mood': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/latest/mood.gif"); break;
                case 'moviegames': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/moviegames.jpg"); break;
                case 'psn': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/plus-r/psn.png"); break;
                case 'rufr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/rufr.png"); break;
                case 'sonye3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ultimate/sonye3.png"); break;
                
                
                // Other Non-Gaming
                case '10outta10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/10outta10.PNG"); break;
                case 'dancingallnight': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/dancingallnight.gif"); break;
                case 'dancingallnight2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/dancingallnight2.gif"); break;
                case 'discord': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/discord.png"); break;
                case 'keikaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/keikaku.jpg"); break;
                case 'mute': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/mute.png"); break;
                case 'tru': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/tru.jpg"); break;
                case 'watermark': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/extend/watermark.jpg"); break;
            }

            
         }
     }
});

function sendEmbed(channel, imgurl) { bot.sendMessage({ to: channel, message: '', embed: { image: { url: imgurl } } }); }
function sendMsg(channel, text) { bot.sendMessage({ to: channel, message: text }); }



