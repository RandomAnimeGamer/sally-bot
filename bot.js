var Discord = require('discord.io');
var logger = require('winston');
//var fs = require("fs");
//var auth = require('./auth.json');

var refresh = true;

var categories = 'Please select a category: \n```\n Sally \n Naruto \n Storm \n Community \n S4 \n UNSGCommunity Emotes \n ArashiBoards \n Bleach \n Other```\nExample command: `!list Storm`';

var sally = '```\n Sally: \n calmsally/csally \n delet - deletin \n madsally/msally \n perfectsally/psally - perfectsallyfull/psallyfull \n realsally \n ripinsally1 - ripinsally2 \n rnrsally - rnrsally2 \n sally - sally2 - sally3 - sally4 \n sallygud \n sallymirror \n sallystance \n sallyumad \n thirstysally/thirst - thirstysally2/thirst2 \n ubsally \n \n ibuse \n ibuseback \n ibusecheeks \n ibusefull \n ibuselel \n ibusespit \n ibuseu2 \n ibusewat```';

var naruto = '```\n Naruto: \n bkank \n bkankrf \n charge \n kankrf \n laternerd \n madbito \n madsauce \n madshirama \n narutodab \n orop \n otk \n saucewat \n sausage \n technoparty \n tobithink/tt \n tooeasy \n umff/crow \n wat```';

var storm = '```\n Storm: \n acd \n amodesauce/parryjb \n bluebar \n classic \n credits \n dab \n dc \n dommovement1/dm1 - dommovement20/dm20 \n fullacd \n gen - gen2 - gen3 \n hanzoumad \n howmad \n kuroshika/ks \n list2 \n maskedprimate/mp \n midtier \n mm \n mmgg \n narumad \n nocounter \n noneutral \n ottekoi \n parry \n prereq \n rev \n rq \n s1 \n s3 \n s4 \n s4mash \n s4mechanics \n sakuratilt \n snowfield \n thatsenough/te \n trollzo - trollzo2 ```';

var community = '```\n Community: \n advancedmechanics \n comments \n council4 \n crim \n crimfection \n crimgev \n descrub \n dissagree \n drant1s \n funskill \n gkunaigrab \n grip - grip2 \n himiko \n iguess - iguess2 \n jonah1 - jonah2 \n justminatothings \n lachance \n legit \n legitburial \n legithanzo \n legitking \n legitraze \n loicksama \n meidogg \n nikus4 \n ninjagba \n playco \n polotrying1 - polotrying2 \n poornoobtrash \n ragbanhammer \n razebar \n s2meta \n s3scrubs \n trilogy \n trumeta \n usabanhammer \n und3 \n victory```';

var s4 = '```\n Storm: \n amode \n bromance1 - bromance2 \n calmkabuto/calmbuto \n chidori \n doubleamode \n frenemies \n kaku2 \n jubi \n obidara \n lowtier \n madbito1 - madbito2 \n madteam7 \n mwink \n noobcrusher \n nostalgiablind1 - nostalgiablind2 \n nothingpersonell \n playings4 \n madguy \n rasengan \n srssauce \n talknojutsu \n mevsnewgens/mmvsm/yellowfooled111';

var unsc = '```\n UNSGCommunity Emotes \n ashkekchem \n dashgud \n doge \n elkek \n eyes - eyes2 \n frenchdara \n froge \n fullpain \n hyperlum/hlum \n hyperqr/hqr \n hyperthink/hthink \n hyperthonk/hthonk \n kek - kek2 \n kekaku \n kekatsuki \n kyle \n lilkek \n minatodfa/mdfa \n okkekoi \n qrs \n realum \n same - same2 \n thesepain \n uhuh - uhuhuh```';

var arashi = '```\n  ArashiBoards: \n 98 \n backhand \n blackguy \n bsnsguy \n bsnsidfa \n calmghost \n calmguy \n carltonplz \n clap \n cmon \n comeatme \n coolgal \n coolguy \n coolidfa \n coolpalm \n coorguy \n cry \n danzoqr \n deadchatcat - deadchatcat2 \n desk \n despeh \n disdarui \n docqr \n fallenmoment \n freezypop \n ecsalute \n edpalm \n edpipe \n ecquite \n ed \n ec \n full98 \n fuuma \n grannyplz \n hyes \n idfa \n itachifacepalm \n japqr \n lightrf \n lum/lutherumad \n mad \n madghost \n madkuzu \n matsumad \n matsurf \n mkidfa \n music \n narahaha \n naruqr \n ninja \n no \n nokashi \n o \n obiorb \n ouch \n pipeguy \n plzguy \n plzkarin \n qr/quantitativereasoning \n rage \n ragequit \n reirf \n scatman \n sekiei \n slowbito \n slowburn \n slowguy \n slowidfa \n slowsuji - slowsuji2 \n slowzo \n smugguy \n snaking \n srsgal \n srsguy \n thatguy \n thatpain \n thisguy \n thisidfa \n thispalm \n thispain \n thissmile \n trollnoki \n uwat \n victory \n victorypalm \n wessanbus \n yugidfa```';

var bleach = '```\n Bleach: \n id \n mayurilit \n mayurirf \n suzumebachi1/sb1 \n suzumebachi2/sb2 \n suzumebachi3/sb3 \n suzumebachi4/sb4```';

var etc = '```\n Other: 360a \n bbtag - bbtag2 \n bestgirl \n bestgirlrf \n bestgirlrffull \n casual \n dk \n falcodab \n friend \n ggez \n granddad \n itshappenin \n mood \n moviegames \n psn \n rufr \n sonye3 \n 10outta10 \n dancingallnight - dancingallnight2 \n discord \n keikaku \n mute \n tru \n watermark```';

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
						switch(cmd2.toLowerCase()) { case 'unsg': switch(cmd3.toLowerCase()) { case 'community': sendMsg(channelID, unsc); break; } break; } break;
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
                        case 'unsgcommunity': sendMsg(channelID, unsc); break;
                        case 'unsgc': sendMsg(channelID, unsc); break;
                        case 'unsg': sendMsg(channelID, unsc); break;
                        case 'arashiboards': sendMsg(channelID, arashi); break;
                        case 'ab': sendMsg(channelID, arashi); break;
                        case 'bleach': sendMsg(channelID, bleach); break;
                        case 'other': sendMsg(channelID, other); break;
                    }
                    break;
				/*case 'elo':
					switch(cmd2.toLowerCase()) {
						case 'register':
							var elo_txt = fs.readFileSync(file, {"encoding": "utf-8"});
							fs.writeFile(file, elo_txt + '\n' + userID + '@' + user + '@' + '0', function(err) {
								if(err) console.log(err);
								else console.log("file written successfully " + '\n' + userID + '@' + user + '@' + '0');
							});
							//fs.writeFile("./elo.text", '\n' + userID + '@:' + user + '@:' + '0', (err) => sendMsg(channelID, 'There was an error registering you on our ELO list.'));
							//sendMsg(channelID, 'You have been added to the ELO Ranking System on Sally Bot! (If you received an error just before this message, please contact R.A.G)');
						break;
						case 'top5':
							var elo_txt = fs.readFileSync(file, {"encoding": "utf-8"}).replace('\n','');
							var elo_arr = elo_txt.split('@');
							var elo_2d = [];
							while(elo_arr.length) elo_2d.push(elo_arr.splice(0,3));
							console.log(elo_2d);
							
						break;
						case 'restart':
							fs.readFileSync('aosiljhntklasrjlaskjrowajrnkoawrjnmlawr', {"encoding": "utf-8"});
						break;
					}
				*/
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
                case 'terminology': sendMsg(channelID, 'https://docs.google.com/document/d/1AgfeLN2lToy6D2KYoSAXz3FDlHXRE-Szx1kwJVqblPM/edit'); break;
                case 'gen_quote': sendMsg(channelID, 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'); break;
                case 'gen_quotes': sendMsg(channelID, 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'); break;


                // Sally
                case 'calmsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmsally.png"); break;
                case 'csally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmsally.png"); break;
                case 'delet': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/delet.png"); break;
                case 'deletin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/deletin.png"); break;
                case 'madsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madsally.png"); break;
                case 'msally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madsally.png"); break;
                case 'psally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/pSally.gif"); break;
                case 'perfectsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/pSally.gif"); break;
                case 'psallyfull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/pSallyFull.gif"); break;
                case 'perfectsallyfull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/pSallyFull.gif"); break;
                case 'realsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/realsally.png"); break;
                case 'ripinsally1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ripinsally1.png"); break;
                case 'ripinsally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ripinsally2.png"); break;
                case 'rnrsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rnrsally.png"); break;
                case 'rnrsally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/rnrsally2.png"); break;
                case 'sally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sally.png"); break;
                case 'sally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sally2.png"); break;
                case 'sally3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sally3.png"); break;
                case 'sally4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sally4.png"); break;
                case 'sallygud': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sallygud.png"); break;
                case 'sallymirror': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sallymirror.jpg"); break;
                case 'sallystance': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sallystance.png"); break;
                case 'sallyumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/sallyumad.png"); break;
                case 'thirstysally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally.jpg"); break;
                case 'thirst': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally.jpg"); break;
                case 'thirstysally2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally2.jpg"); break;
                case 'thirst2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally2.jpg"); break;
                case 'ubsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ubsally.png"); break;
                
                
                // Ibuse
                case 'ibuse': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuse.png"); break;
                case 'ibuseback': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuseback.png"); break;
                case 'ibusecheeks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusecheeks.png"); break;
                case 'ibusefull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusefull.png"); break;
                case 'ibuselel': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuselel.png"); break;
                case 'ibusespit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusespit.png"); break;
                case 'ibuseu2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuseu2.png"); break;
                case 'ibusewat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusewat.png"); break;
                
                
                // Naruto
                case 'bkank': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/bkank.jpg"); break;
                case 'bkankrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/bkankrf.png"); break;
                case 'charge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/charge.jpg"); break;
                case 'kankrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/kankrf.png"); break;
                case 'laternerd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/laternerd.gif"); break;
                case 'madbito': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/madbito.png"); break;
                case 'madsauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/madsauce.jpg"); break;
                case 'madshirama': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/madshirama.png"); break;
                case 'narutodab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/NarutoDab.png"); break;
                case 'orop': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/orop.jpg"); break;
                case 'otk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/otk.png"); break;
                case 'saucewat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/saucewat.png"); break;
                case 'sausage': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/sausage.jpg"); break;
                case 'technoparty': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/technoparty.gif"); break;
                case 'tobithink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/tobithink.png"); break;
                case 'tt': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/tobithink.png"); break;
                case 'tooeasy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/tooeasy.jpg"); break;
                case 'umff': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/umff.jpg"); break;
                case 'crow': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/umff.jpg"); break;
                case 'wat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/wat.png"); break;
                
                
                // Storm
                case 'acd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/ACD.gif"); break;
                case 'amodesauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/amodesauce.png"); break;
                case 'parryjb': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/amodesauce.png"); break;
                case 'bluebar': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/bluebar.png"); break;
                case 'classic': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/classic.gif"); break;
                case 'credits': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/credits.png"); break;
                case 'dab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dab.png"); break;
                case 'dc': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dc.png"); break;

                case 'dommovement1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm1.gif"); break;
                case 'dm1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm1.gif"); break;
                case 'dommovement2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm2.gif"); break;
                case 'dm2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm2.gif"); break;
                case 'dommovement3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm3.gif"); break;
                case 'dm3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm3.gif"); break;
                case 'dommovement4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm4.gif"); break;
                case 'dm4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm4.gif"); break;
                case 'dommovement5': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm5.gif"); break;
                case 'dm5': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm5.gif"); break;
                case 'dommovement6': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm6.gif"); break;
                case 'dm6': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm6.gif"); break;
                case 'dommovement7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm7.gif"); break;
                case 'dm7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm7.gif"); break;
                case 'dommovement8': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm8.gif"); break;
                case 'dm8': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm8.gif"); break;
                case 'dommovement9': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm9.gif"); break;
                case 'dm9': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm9.gif"); break;
                case 'dommovement10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm10.gif"); break;
                case 'dm10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm10.gif"); break;
                case 'dommovement11': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm11.gif"); break;
                case 'dm11': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm11.gif"); break;
                case 'dommovement12': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm12.gif"); break;
                case 'dm12': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm12.gif"); break;
                case 'dommovement13': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm13.gif"); break;
                case 'dm13': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm13.gif"); break;
                case 'dommovement14': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm14.gif"); break;
                case 'dm14': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm14.gif"); break;
                case 'dommovement15': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm15.gif"); break;
                case 'dm15': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm15.gif"); break;
                case 'dommovement16': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm16.gif"); break;
                case 'dm16': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm16.gif"); break;
                case 'dommovement17': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm17.gif"); break;
                case 'dm17': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm17.gif"); break;
                case 'dommovement18': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm18.gif"); break;
                case 'dm18': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm18.gif"); break;
                case 'dommovement19': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm19.gif"); break;
                case 'dm19': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm19.gif"); break;
                case 'dommovement20': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm20.gif"); break;
                case 'dm20': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm20.gif"); break;

                case 'fullacd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/fullACD.gif"); break;
                case 'gen': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/Gen.jpg"); break;
                case 'gen2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/gen2.png"); break;
                case 'gen3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/Gen3.png"); break;
                case 'hanzoumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/hanzoumad.jpg"); break;
                case 'howmad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/howmad.png"); break;
                case 'kuroshika': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/kuroshika.png"); break;
                case 'ks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/kuroshika.png"); break;
                case 'list2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/list2.PNG"); break;
                case 'maskedprimate': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/maskedprimate.png"); break;
                case 'mp': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/maskedprimate.png"); break;
                case 'midtier': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/midtier.jpg"); break;
                case 'mm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/mm.png"); break;
                case 'mmgg': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/mmgg.png"); break;
                case 'narumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/narumad.png"); break;
                case 'nocounter': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/nocounter.png"); break;
                case 'noneutral': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/noneutral.png"); break;
                case 'ottekoi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/ottekoi.gif"); break;
                case 'parry': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/parry.png"); break;
                case 'prereq': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/prereq.jpg"); break;
                case 'rev': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/rev.png"); break;
                case 'rq': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/rq.png"); break;
                case 's1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/s1.jpg"); break;
                case 's3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/s3.png"); break;
                case 's4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/s4.png"); break;
                case 's4mash': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/s4mash.jpg"); break;
                case 's4mechanics': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/s4mechanics.jpg"); break;
                case 'sakuratilt': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/sakuratilt.png"); break;
                case 'snowfield': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/snowfield.png"); break;
                case 'thatsenough': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/thatsenough.png"); break;
                case 'te': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/thatsenough.png"); break;
                case 'trollzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/trollzo.png"); break;
                case 'trollzo2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/trollzo2.png"); break;
                
                
                // Community
                case 'advancedmechanics': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/advancedmechanics.png"); break;
                case 'comments': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/comments.png"); break;
                case 'council4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/council4.png"); break;
                case 'crim': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/crim.jpg"); break;
                case 'crimfection': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/crimfection.png"); break;
                case 'crimgev': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/crimgev.png"); break;
                case 'descrub': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/descrub.png"); break;
                case 'dissagree': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/dissagree.png"); break;
                case 'drant1s': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/drant1s.png"); break;
                case 'funskill': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/funskill.png"); break;
                case 'gkunaigrab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/gkunaigrab.png"); break;
                case 'grip': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/grip.PNG"); break;
                case 'grip2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/grip2.png"); break;
                case 'himiko': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/himiko.png"); break;
                case 'iguess': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/iguess.png"); break;
                case 'iguess2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/iguess2.png"); break;
                case 'jonah1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/jonah1.jpg"); break;
                case 'jonah2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/jonah2.png"); break;
                case 'justminatothings': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/justminatothings.PNG"); break;
                case 'lachance': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/lachance.jpeg"); break;
                case 'legit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/legit.png"); break;
                case 'legitburial': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/legitburial.png"); break;
                case 'legithanzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/legithanzo.png"); break;
                case 'legitking': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/legitking.png"); break;
                case 'legitraze': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/legitraze.png"); break;
                case 'loicksama': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/loicksama.png"); break;
                case 'meidogg': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/meidogg.jpg"); break;
                case 'nikus4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/nikus4-cropped-2.jpg"); break;
                case 'ninjagba': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/ninjaGBA"); break;
                case 'playco': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/playco.png"); break;
                case 'polotrying1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/polotrying1.png"); break;
                case 'polotrying2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/polotrying2.png"); break;
                case 'poornoobtrash': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/poornoobtrash.png"); break;
                case 'ragbanhammer': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/ragbanhammer.png"); break;
                case 'razebar': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/razebar.png"); break;
                case 's2meta': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/s2meta.png"); break;
                case 's3scrubs': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/s3scrubs.png"); break;
                case 'trilogy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/trilogy.png"); break;
                case 'trumeta': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/trumeta.png"); break;
                case 'und3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/und3.png"); break;
                case 'usabanhammer': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/usabanhammer.png"); break;
                case 'victory': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/victory.png"); break;
                
                
                // S4 Story Images
                case 'amode': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/amode.png"); break;
                case 'bromance1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/bromance1.png"); break;
                case 'bromance2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/bromance2.png"); break;
                case 'calmkabuto': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/calmkabuto.png"); break;
                case 'calmbuto': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/calmkabuto.png"); break;
                case 'chidori': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/chidori.png"); break;
                case 'doubleamode': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/doubleamode.png"); break;
                case 'frenemies': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/frenemies.png"); break;
                case 'jubi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/jubi.png"); break;
                case 'kaku2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/kakU2.png"); break;
                case 'obidara': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/obidara.png"); break;
                case 'lowtier': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/lowtier.png"); break;
                case 'madbito1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/madbito1.png"); break;
                case 'madbito2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/madbito2.png"); break;
                case 'madteam7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/madteam7.png"); break;
                case 'mevsnewgens': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/mevsnewgens.png"); break;
                case 'mmvsm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/mevsnewgens.png"); break;
                case 'yellowfooled': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/mevsnewgens.png"); break;
                case 'mwink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/mwink.png"); break;
                case 'noobcrusher': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/noobcrusher.png"); break;
                case 'nostalgiablind1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/nostalgiablind1.png"); break;
                case 'nostalgiablind2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/nostalgiablind2.png"); break;
                case 'nothingpersonell': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/nothinpersonell.png"); break;
                case 'playings4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/playings4.png"); break;
                case 'madguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/madguy.png"); break;
                case 'rasengan': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/rasengan.png"); break;
                case 'srssauce': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/srssauce.png"); break;
                case 'talknojutsu': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/talknojutsu.png"); break;
                
                
                // UNS Community
                case 'ashkekchem': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/ashkekchem.png"); break;
                case 'dashgud': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/dashgud.png"); break;
                case 'doge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/doge.png"); break;
                case 'elkek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/elkek.png"); break;
                case 'eyes': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/eyes.png"); break;
                case 'eyes2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/eyes2.jpeg"); break;
                case 'frenchdara': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/frenchdara.png"); break;
                case 'froge': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/froge.png"); break;
                case 'fullpain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/fullpain.gif"); break;
                case 'getmad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/getmad.png"); break;
                case 'hyperlum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperlum.png"); break;
                case 'hlum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperlum.png"); break;
                case 'hyperqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperqr.png"); break;
                case 'hqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperqr.png"); break;
                case 'hyperthink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthink.png"); break;
                case 'hthink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthink.png"); break;
                case 'hyperthonk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthonk.png"); break;
                case 'hthonk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthonk.png"); break;
                case 'kek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kek3.png"); break;
                case 'kek2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kek2.jpeg"); break;
                case 'kekaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kekaku.png"); break;
                case 'kekatsuki': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kekatsuki.jpeg"); break;
                case 'kyle': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kyle.png"); break;
                case 'lilkek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/lilkek.png"); break;
                case 'minatodfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/minatoidfa.png"); break;
                case 'mdfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/minatoidfa.png"); break;
                case 'okkekoi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/okkekoi.png"); break;
                case 'qrs': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/qrs.png"); break;
                case 'realum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/realum.png"); break;
                case 'same': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/same.png"); break;
                case 'same2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/same2.png"); break;
                case 'thesepain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/thesepain.png"); break;
                case 'uhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/uhuh.jpg"); break;
                case 'uhuhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/uhuhuh.png"); break;
                
                
                // ArashiBoards
                case '98': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/98.png"); break;
                case 'backhand': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/backhand.jpg"); break;
                case 'blackguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/blackguy.png"); break;
                case 'bsnsguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/bsnsguy.png"); break;
                case 'bsnsidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/bsnsidfa.png"); break;
                case 'calmghost': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/calmghost.png"); break;
                case 'calmguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/calmguy.png"); break;
                case 'carltonplz': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/carltonplz.png"); break;
                case 'clap': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/clap.gif"); break;
                case 'cmon': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/cmon.png"); break;
                case 'comeatme': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/comeatme.jpg"); break;
                case 'coolgal': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/coolgal.png"); break;
                case 'coolguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/coolguy.png"); break;
                case 'coolidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/coolidfa.png"); break;
                case 'coolpalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/coolpalm.png"); break;
                case 'coorguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/coorguy.jpg"); break;
                case 'cry': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/cry.png"); break;
                case 'danzoqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/danzoqr.png"); break;
                case 'deadchatcat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/deadchatcat.gif"); break;
                case 'deadchatcat2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/deadchatcat2.gif"); break;
                case 'desk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/desk.png"); break;
                case 'despeh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/despeh.png"); break;
                case 'disdarui': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/disdarui.jpg"); break;
                case 'docqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/docqr.png"); break;
                case 'ec': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ec.png"); break;
                case 'ecquite': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ecquite.png"); break;
                case 'ecsalute': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ecsalute.png"); break;
                case 'ed': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ed.png"); break;
                case 'edpalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/edpalm.png"); break;
                case 'edpipe': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/edpipe.png"); break;
                case 'fallenmoment': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/FallenMoment.png"); break;
                case 'freezypop': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/FreezyPop.png"); break;
                case 'full98': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/full98.png"); break;
                case 'fuuma': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/fuuma.png"); break;
                case 'grannyplz': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/grannyplz.png"); break;
                case 'hyes': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/hyes.png"); break;
                case 'idfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/idfa.png"); break;
                case 'itachifacepalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/itachifp.png"); break;
                case 'itachifp': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/itachifp.png"); break;
                case 'japqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/japqr.png"); break;
                case 'lightrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/lightrf.png"); break;
                case 'lum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/Lutherumad.png"); break;
                case 'lutherumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/Lutherumad.png"); break;
                case 'mad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/mad.png"); break;
                case 'madghost': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/madghost.png"); break;
                case 'madkuzu': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/madkuzu.jpg"); break;
                case 'matsumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/matsumad.png"); break;
                case 'matsurf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/matsurf.png"); break;
                case 'mkidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/mkidfa.png"); break;
                case 'music': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/music.png"); break;
                case 'narahaha': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/Narahaha.png"); break;
                case 'naruqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/naruqr.png"); break;
                case 'ninja': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ninja.png"); break;
                case 'no': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/no.png"); break;
                case 'nokashi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/nokashi.png"); break;
                case 'o': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/o.png"); break;
                case 'obiorb': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/obiorb.png"); break;
                case 'ouch': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ouch.png"); break;
                case 'pipeguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/pipeguy.png"); break;
                case 'plzguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/plzguy.png"); break;
                case 'plzkarin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/plzkarin.png"); break;
                case 'qr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/qr-2020.png"); break;
                case 'quantitativereasoning': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/qr-2020.png"); break;
                case 'rage': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/rage.png"); break;
                case 'ragequit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/ragequit.png"); break;
                case 'reirf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/reirf.png"); break;
                case 'scatman': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/scatman.png"); break;
                case 'sekiei': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/sekiei.PNG"); break;
                case 'slowbito': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/slowbito.png"); break;
                case 'slowburn': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/SlowBurn.png"); break;
                case 'slowguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/slowguy.png"); break;
                case 'slowidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/slowidfa.png"); break;
                case 'slowsuji': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/SlowSuji.png"); break;
                case 'slowsuji2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/SlowSuji2.png"); break;
                case 'slowzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/slowzo.png"); break;
                case 'smugguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/smugguy.png"); break;
                case 'snaking': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/snaking.png"); break;
                case 'srsgal': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/srsgal.png"); break;
                case 'srsguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/srsguy.jpg"); break;
                case 'thatguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thatguy.png"); break;
                case 'thatpain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thatpain.jpg"); break;
                case 'thisguy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thisguy.png"); break;
                case 'thisidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thisidfa.png"); break;
                case 'thispain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thispain.png"); break;
                case 'thispalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thispalm.png"); break;
                case 'thissmile': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/thissmile.png"); break;
                case 'trollnoki': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/trollnoki.png"); break;
                case 'uwat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/uwat.png"); break;
                case 'victory': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/victory.png"); break;
                case 'victorypalm': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/victorypalm.png"); break;
                case 'wessanbus': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/wessanbus.png"); break;
                case 'yugidfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/arashi/yugidfa.png"); break;
                
                
                // Bleach
                case 'id': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/id.png"); break;
                case 'ichigodisdain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/id.png"); break;
                case 'mayurilit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/mayurilit.png"); break;
                case 'mayurirf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/mayurirf.png"); break;
                case 'suzumebachi1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi1.png"); break;
                case 'sb1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi1.png"); break;
                case 'suzumebachi2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi2.png"); break;
                case 'sb2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi2.png"); break;
                case 'suzumebachi3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi3.png"); break;
                case 'sb3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi3.png"); break;
                case 'suzumebachi4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi4.png"); break;
                case 'sb4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi4.png"); break;
                
                
                // Other Gaming
                case '360a': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/360A.png"); break;
                case 'bbtag': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/bbtag.png"); break;
                case 'bbtag2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/bbtag2.png"); break;
                case 'bestgirl': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/bestgirl.png"); break;
                case 'bestgirlrf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/bestgirlrf.png"); break;
                case 'bestgirlrffull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/bestgirlrffull.png"); break;
                case 'casual': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/casual.jpg"); break;
                case 'dk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/dk.png"); break;
                case 'falcodab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/falcodab.jpg"); break;
                case 'friend': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/friend.png"); break;
                case 'ggez': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/ggez.gif"); break;
                case 'granddad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/granddad.jpg"); break;
                case 'itshappenin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/itshappenin.png"); break;
                case 'mood': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/mood.gif"); break;
                case 'moviegames': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/moviegames.jpg"); break;
                case 'psn': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/psn.png"); break;
                case 'rufr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/rufr.png"); break;
                case 'sonye3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-gaming/sonye3.png"); break;
                
                
                // Other Non-Gaming
                case '10outta10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/10outta10.PNG"); break;
                case 'dancingallnight': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/dancingallnight.gif"); break;
                case 'dancingallnight2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/dancingallnight2.gif"); break;
                case 'discord': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/discord.png"); break;
                case 'keikaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/keikaku.jpg"); break;
                case 'mute': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/mute.png"); break;
                case 'tru': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/tru.jpg"); break;
                case 'watermark': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/watermark.jpg"); break;
            }

            
         }
     }
});

function sendEmbed(channel, imgurl) { bot.sendMessage({ to: channel, message: '', embed: { image: { url: imgurl } } }); }
function sendMsg(channel, text) { bot.sendMessage({ to: channel, message: text }); }



