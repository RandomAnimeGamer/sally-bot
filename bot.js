// #region Imports
var Discord = require('discord.io');
var logger = require('winston');
//var fs = require("fs");
//var auth = require('./auth.json');
// #endregion

var refresh = true;

// #region General bot vars
var serverid = "693620394929815562";
var k = 30;
// #endregion

// #region Modding Role IDs
var dev_role = "693637364320567347";
var artist_role = "693982211216506930";
var global_mechanics = "694293631732940850";
var model_modder = "695315517648404501";
var moveset_modder = "694293742341062706";
var texture_modder = "694293639177699420";
var sound_modder = "694293776570515556";
// #endregion

// #region Country/Region Role IDs
var na_role = "693636860060237864";
var ca_role = "695356499400065115";
var eu_role = "693636973218234399";
var ru_role = "693637027769614347";
var br_role = "694177000235073537";
var af_role = "695965738313187349";
var c4_role = "";
var player_na = "693622671967256656";
var player_eu = "693984963162538047";
var player_br = "695793581490831400";
var player_c4 = "";
// #endregion

// #region Other Role IDs
var active_competitive = "694232967823753287";
var styleur_role = "694777461384282154";
var observer_role = "693983204411047976";
var new_member = "696791374342914068";
// #endregion

var choose_region = '';
var all_roles = '';

var commands = ''; var resources = ''; var categories = '';
var sally = ''; var naruto = ''; var storm = ''; var community = '';
var s4 = ''; var unsc = ''; var arashi = ''; var bleach = ''; var etc = '';
var curse_words = ''; var blaspheming = '';

function setListsProper() {

    // #region Role Messaging
    choose_region = ['Please select a region:', '```',
        '$role player na',
        '$role player eu',
        '$role player br',
        '$role player c4```'];
    all_roles = ['Modder Roles:', '```',
        'Developer: $role dev',
        'Artist: $role art',
        'Global Mechanics Modder: $role mechanics',
        'Model Modder: $role model',
        'Moveset Modder: $role moveset',
        'Texture Modder: $role texture',
        'Sound Modder: $role sound```', ' ',
        'Player Roles:', '```',
        'Player - NA: $role player na',
        'Player - EU: $role player eu',
        'Player - BR: $role player br```',
        'Region Roles:', '```',
        'North America - $role na',
        'Canada - $role ca',
        'EU - $role eu',
        'Russia - $role ru',
        'Brazil - $role br',
        'Africa - $role af```',
        'Other Roles:', '```',
        'Active Competitive Player - $role competitive',
        'Styleur - $role styleur',
        'Observer - $role observer```'];
    // #endregion

    // #region General Lists
    commands = ['Memes: `$list`', 'Roles: `$role` (Only works in UNS: Gev Community)', 'Resources: `$resources`'];
    resources = ['Resources:', '```',
        'Terminology Document - terms',
        'Gev Locals Playlist - gev_locals',
        'Gev Netplay Playlist - gev_netplay',
        'Gen Twitch - gen_twitch',
        'Gen cKunai Data - gen_twitch',
        'Gen Tier List - gen_twitch',
        'Gen Matchup Chart - gen_twitch',
        'Gen Quotes - gen_twitch```',
        'Example command: `$gev_netplay`'];
    categories = ['Please select a category:', '```',
        'Sally',
        'Naruto',
        'Storm',
        'Community',
        'S4',
        'UNSGCommunity Emotes',
        'ArashiBoards',
        'Bleach',
        'Other```',
        'Example command: `$list Storm`'];
    // #endregion
    // #region Sally Memes
    sally = ['```', 'Sally:',
        'calmsally / csally',
        'delet - deletin',
        'madsally / msally',
        'perfectsally / psally  -  perfectsallyfull / psallyfull',
        'realsally',
        'ripinsally1 - ripinsally2',
        'rnrsally - rnrsally2',
        'sally - sally2 - sally3 - sally4',
        'sallygud',
        'sallymirror',
        'sallystance',
        'sallyumad',
        'thirstysally / thirst  -  thirstysally2 / thirst2',
        'ubsally',
        ' ',
        'ibuse',
        'ibuseback',
        'ibusecheeks',
        'ibusefull',
        'ibuselel',
        'ibusespit',
        'ibuseu2',
        'ibusewat```',
        'Example command: `$sallyumad`'];
    // #endregion
    // #region Naruto Memes
    naruto = ['```', 'Naruto:',
        'bkank',
        'bkankrf',
        'charge',
        'kankrf',
        'laternerd',
        'madbito',
        'madsauce',
        'madshirama',
        'narutodab',
        'orop',
        'otk',
        'saucewat',
        'sausage',
        'technoparty',
        'tobithink / tt',
        'tooeasy',
        'umff / crow',
        'wat```',
        'Example command: `$narutodab`'];
    // #endregion
    // #region Storm Memes
    storm = ['```', 'Storm:',
        'acd',
        'amodesauce / parryjb',
        'bluebar',
        'classic',
        'credits',
        'dab',
        'dc',
        'dommovement1 / dm1  -  dommovement20 / dm20',
        'fullacd',
        'gen - gen2 - gen3',
        'hanzoumad',
        'howmad',
        'kuroshika / ks',
        'list2',
        'maskedprimate / mp',
        'midtier',
        'mm',
        'mmgg',
        'narumad',
        'nocounter',
        'noneutral',
        'ottekoi',
        'parry',
        'prereq',
        'rev',
        'rq',
        's1',
        's3',
        's4',
        's4mash',
        's4mechanics',
        'sakuratilt',
        'snowfield',
        'thatsenough/te',
        'trollzo - trollzo2 ```',
        'Example command: `$dm5`'];
    // #endregion
    // #region Community Memes
    community = ['```', 'Community:',
        'advancedmechanics',
        'comments',
        'council4',
        'crim',
        'crimfection',
        'crimgev',
        'descrub',
        'dissagree',
        'drant1s',
        'funskill',
        'gkunaigrab',
        'grip - grip2',
        'himiko',
        'iguess - iguess2',
        'infallidom - infallidom2',
        'jeffyanger',
        'jonah1 - jonah2',
        'justminatothings',
        'lachance',
        'legit',
        'legitburial',
        'legithanzo',
        'legitking',
        'legitraze',
        'loicksama',
        'meidogg',
        'nejikun',
        'nikus4',
        'ninjagba',
        'playco',
        'polotrying1 / pt1  -  polotrying2 / pt2',
        'poornoobtrash',
        'ragbanhammer',
        'razebar',
        's2meta',
        's3scrubs',
        'trilogy',
        'trumeta',
        'usabanhammer',
        'und3',
        'victory```',
        'Example command: `$nikus4`'];
    // #endregion
    // #region S4 Memes
    s4 = ['```', 'Storm 4:',
        'amode',
        'bromance1 - bromance2',
        'calmkabuto / calmbuto',
        'chidori',
        'doubleamode',
        'frenemies',
        'kaku2',
        'jubi',
        'obidara',
        'lowtier',
        'madbito1 - madbito2',
        'madteam7',
        'mwink',
        'noobcrusher',
        'nostalgiablind1 - nostalgiablind2',
        'nothingpersonell',
        'playings4',
        'madguy',
        'rasengan',
        'srssauce',
        'talknojutsu',
        'mevsnewgens / mmvsm / yellowfooled```',
        'Example command: `$playings4`'];
    // #endregion
    // #region UNSG Community Memes
    unsc = ['```', 'UNSGCommunity Emotes',
        'ashkekchem',
        'dashgud',
        'doge',
        'elkek',
        'eyes - eyes2',
        'frenchdara',
        'froge',
        'fullpain',
        'hyperlum / hlum',
        'hyperqr / hqr',
        'hyperthink / hthink',
        'hyperthonk / hthonk',
        'kek - kek2',
        'kekaku',
        'kekatsuki',
        'kyle',
        'lilkek',
        'minatodfa / mdfa',
        'okkekoi',
        'qrs',
        'realum',
        'same - same2',
        'thesepain',
        'uhuh - uhuhuh```',
        'Example command: `$kekaku`'];
    // #endregion
    // #region ArashiBoards
    arashi = ['```', 'ArashiBoards:',
        '98',
        'backhand',
        'blackguy',
        'bsnsguy',
        'bsnsidfa',
        'calmghost',
        'calmguy',
        'carltonplz',
        'clap',
        'cmon',
        'comeatme',
        'coolgal',
        'coolguy',
        'coolidfa',
        'coolpalm',
        'coorguy',
        'cry',
        'danzoqr',
        'deadchatcat - deadchatcat2',
        'desk',
        'despeh',
        'disdarui',
        'docqr',
        'fallenmoment',
        'freezypop',
        'ecsalute',
        'edpalm',
        'edpipe',
        'ecquite',
        'ed',
        'ec',
        'full98',
        'fuuma',
        'grannyplz',
        'hyes',
        'idfa',
        'itachifacepalm',
        'japqr',
        'lightrf',
        'lum / lutherumad',
        'mad',
        'madghost',
        'madkuzu',
        'matsumad',
        'matsurf',
        'mkidfa',
        'music',
        'narahaha',
        'naruqr',
        'ninja',
        'no',
        'nokashi',
        'o',
        'obiorb',
        'ouch',
        'pipeguy',
        'plzguy',
        'plzkarin',
        'qr / quantitativereasoning',
        'rage',
        'ragequit',
        'reirf',
        'scatman',
        'sekiei',
        'slowbito',
        'slowburn',
        'slowguy',
        'slowidfa',
        'slowsuji - slowsuji2',
        'slowzo',
        'smugguy',
        'snaking',
        'srsgal',
        'srsguy',
        'thatguy',
        'thatpain',
        'thisguy',
        'thisidfa',
        'thispalm',
        'thispain',
        'thissmile',
        'trollnoki',
        'uwat',
        'victory',
        'victorypalm',
        'wessanbus',
        'yugidfa```',
        'Example command: `$thisguy`'];
    // #endregion
    // #region Bleach
    bleach = ['```', 'Bleach:',
        'id / ichigodisdain',
        'mayurilit',
        'mayurirf',
        'suzumebachi1 / sb1',
        'suzumebachi2 / sb2',
        'suzumebachi3 / sb3',
        'suzumebachi4 / sb4```',
        'Example command: `$suzumebachi1`'];
    // #endregion
    // #region Other
    etc = ['```', 'Other:',
        '360a',
        'bbtag - bbtag2',
        'bestgirl',
        'bestgirlrf - bestgirlrffull',
        'casual',
        'dk',
        'falcodab',
        'friend',
        'ggez',
        'granddad',
        'itshappenin',
        'mood',
        'moviegames',
        'psn',
        'rufr',
        'sonye3',
        '10outta10',
        'dancingallnight - dancingallnight2',
        'discord',
        'keikaku',
        'mute',
        'tru',
        'watermark```',
        'Example command: `$granddad`'];
    // #endregion

    // #region Banned Words
    curse_words = ['ass', 'asshole', 'bitch', 'cunt', 'dick', 'fuck', 'shit', 'prick', 'slut', 'whore', 'retard', 'retarded', 'damn', 'dammit', 'damnit', 'damm', 'hell', 'piss', 'pissed', 'bastard', 'choad', 'bollocks', 'bugger', 'shag', 'wank', 'wanker', 'twat', 'bloody oath', 'arse', 'nigga', 'niga', 'nigger'];
    blaspheming = ['my god', 'god why'];
    // #endregion
}



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

    // Parse arrays into strings
    setListsProper();
    commands = arrayToStr(commands); resources = arrayToStr(resources); categories = arrayToStr(categories);
    all_roles = arrayToStr(all_roles); choose_region = arrayToStr(choose_region);
    sally = arrayToStr(sally); naruto = arrayToStr(naruto); storm = arrayToStr(storm); s4 = arrayToStr(s4);
    community = arrayToStr(community); unsc = arrayToStr(unsc); arashi = arrayToStr(arashi);
    bleach = arrayToStr(bleach); etc = arrayToStr(etc);
    logger.info('Parsed arrays to strings successfully.');
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

    //if (bot.channels[channelID] !== undefined) {
        //if (bot.channels[channelID].guild_id === serverid) {
            var msg = message.split(' ');
            for (var i = 0; i < curse_words.length; i++) {
                if (msg.includes(curse_words[i])) {
                    var today = new Date();
                    sendMsg(channelID, "Don't curse, <@" + userID + ">");
                    bot.sendMessage({
                        to: "98484620286246912",
                        message: user + " sent a curse word on " +
                            today.getDate() + "/" + (today.GetMonth() + 1) + "/" + today.getFullYear() +
                            " at " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "\n" + "`" + message.content + "`"
                    });
                    return;
                }
            }
            for (var i = 0; i < blaspheming.length; i++) {
                if (msg.includes(blaspheming[i])) {
                    var today = new Date();
                    sendMsg(channelID, "Don't blaspheme, <@" + userID + ">");
                    bot.sendMessage({
                        to: "98484620286246912",
                        message: user + " sent a curse word on " +
                            today.getDate() + "/" + (today.GetMonth() + 1) + "/" + today.getFullYear() +
                            " at " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "\n" + "`" + message.content + "`"
                    });
                }
            }
        //}
    //}

    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var cmd2 = args.length > 1 ? args[1] : '';
        var cmd3 = args.length > 2 ? args[2] : '';
        var cmd4 = args.length > 3 ? args[3] : '';
        args = args.splice(1);
        console.log('cmd1: ' + cmd + ' ' + 'cmd2: ' + cmd2 + ' ' + 'cmd3: ' + cmd3 + ' ' + 'cmd4: ' + cmd4);


        if(cmd2 !== '') {
            if (cmd3 !== '') {
                switch (cmd.toLowerCase()) {
                    // #region UNSG Community Command Full
                    case 'list':
                        switch (cmd2.toLowerCase()) {
                            case 'unsg':
                                switch (cmd3.toLowerCase()) {
                                    case 'community': sendMsg(channelID, unsc); break;
                                }
                                break;
                        }
                        break;
                    // #endregion

                    // #region Player Region Roles
                    case 'role':
                        switch (cmd2.toLowerCase()) {
                            case 'player':
                                switch (cmd3.toLowerCase()) {
                                    case 'na':
                                        addRole(channelID, userID, player_na);
                                        removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, br_role, af_role, active_competitive,
                                            dev_role, artist_role, global_mechanics, model_modder, moveset_modder, texture_modder, sound_modder,
                                            player_eu, player_br]);
                                        break;
                                    case 'eu':
                                        addRole(channelID, userID, player_eu);
                                        removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, br_role, af_role, active_competitive,
                                            dev_role, artist_role, global_mechanics, model_modder, moveset_modder, texture_modder, sound_modder,
                                            player_na, player_br]);
                                        break;
                                    case 'br':
                                        addRole(channelID, userID, player_br);
                                        removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, br_role, af_role, active_competitive,
                                            dev_role, artist_role, global_mechanics, model_modder, moveset_modder, texture_modder, sound_modder,
                                            player_na, player_eu]);
                                        break;
                                }
                                break;
                        }
                        break;
                    // #endregion
                }
            }
            switch (cmd.toLowerCase()) {
                // #region List Commands
                case 'list':
                    switch(cmd2.toLowerCase()) {
                        case 'sally': sendMsg(channelID, sally); break;
                        case 'naruto': sendMsg(channelID, naruto); break;
                        case 'storm': sendMsg(channelID, storm); break;
                        case 'community': sendMsg(channelID, community); break;
                        case 's4': sendMsg(channelID, s4); break;
                        case 'unsgcommunity':
                        case 'unsgc':
                        case 'unsg': sendMsg(channelID, unsc); break;
                        case 'arashiboards':
                        case 'ab': sendMsg(channelID, arashi); break;
                        case 'bleach': sendMsg(channelID, bleach); break;
                        case 'other': sendMsg(channelID, other); break;
                    }
                    break;
                // #endregion

                // #region Roles (Excluding Player - Region)
                case 'role':
                    switch (cmd2.toLowerCase()) {
                        case 'player': sendMsg(channelID, choose_region); break;
                        // #region Modding Roles
                        case 'dev':
                            addRole(channelID, userID, dev_role);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'art':
                            addRole(channelID, userID, artist_role);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'mechanics':
                            addRole(channelID, userID, global_mechanics);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'model':
                            addRole(channelID, userID, model_modder);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'moveset':
                            addRole(channelID, userID, moveset_modder);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'texture':
                            addRole(channelID, userID, texture_modder);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'sound':
                            addRole(channelID, userID, sound_modder);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        // #endregion

                        // #region Competitive/Styler/Observer Roles
                        case 'competitive':
                            addRole(channelID, userID, active_competitive);
                            removeRoles(channelID, userID, [player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'styler':
                        case 'styleur':
                            addRole(channelID, userID, styleur_role);
                            removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, br_role, af_role,
                                active_competitive, dev_role, artist_role, global_mechanics, model_modder, moveset_modder, texture_modder, sound_modder]);
                        break;
                        case 'observer':
                            addRole(channelID, userID, observer_role);
                            removeRoles(channelID, userID, [active_competitive, styleur_role, player_na, player_eu, player_br]);
                        break;
                        // #endregion

                        // #region Non-Player Regions
                        case 'na':
                            addRole(channelID, userID, na_role);
                            removeRoles(channelID, userID, [ca_role, eu_role, ru_role, br_role, af_role, player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'ca':
                            addRole(channelID, userID, ca_role);
                            removeRoles(channelID, userID, [na_role, eu_role, ru_role, br_role, af_role, player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'eu':
                            addRole(channelID, userID, eu_role);
                            removeRoles(channelID, userID, [na_role, ca_role, ru_role, br_role, af_role, player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'ru':
                            addRole(channelID, userID, ru_role);
                            removeRoles(channelID, userID, [na_role, ca_role, eu_role, br_role, af_role, player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'br':
                            addRole(channelID, userID, br_role);
                            removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, af_role, player_na, player_eu, player_br, styleur_role]);
                        break;
                        case 'af':
                            addRole(channelID, userID, af_role);
                            removeRoles(channelID, userID, [na_role, ca_role, eu_role, ru_role, br_role, player_na, player_eu, player_br, styleur_role]);
                            break;
                        // #endregion
                    }
                break;
                // #endregion

                // #region ELO (Removed)
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
                // #endregion
            }
        }
        else {
            
            switch (cmd.toLowerCase()) {
                case 'c':
                case 'commands':
                case 'cmds':
                case 'cmd':
                case 'command': sendMsg(channelID, commands); break;

                case 'list': sendMsg(channelID, categories); break;
                case 'roles':
                case 'role':
                    if (bot.channels[channelID] !== undefined) {
                        if (bot.channels[channelID].guild_id === serverid) {
                            sendMsg(channelID, all_roles);
                        }
                    }
                    break;
                case 'resource':
                case 'resources': sendMsg(channelID, resources); break;

				// #region ELO (Removed)
				//case 'elo': 
					//var elo_txt = fs.readFileSync("./elo.txt", {"encoding": "utf-8"});
                // #endregion

                // #region Resources (TODO: Move to a "resource" command?)
                case 'term':
                case 'terms':
                case 'terminology': sendMsg(channelID, 'https://docs.google.com/document/d/12sKcsTPqmB__HZi1cKBF6CoZtdB8_ja5sV5Lo7EcPn4/edit?usp=sharing'); break;
                case 'gev_locals': sendMsg(channelID, 'https://www.youtube.com/playlist?list=PLFY4qTm8_IdHQTpgEEaT2kVjnUNQJlgl-'); break;
                case 'gev_netplay': sendMsg(channelID, 'https://www.youtube.com/playlist?list=PLFY4qTm8_IdGdTEo80ZjHuNk2nmJsQTwB'); break;
                case 'gen_twitch': sendMsg(channelID, 'https://www.twitch.tv/UNSGCommunity'); break;
                case 'gen_ckunai': sendMsg(channelID, 'https://docs.google.com/document/d/10zehzjK7o1-p5-ZYgubn-CpkBk3QAbTfxQpfDfEb7PE/edit'); break;
                case 'gen_tier':
                case 'gen_tiers': sendMsg(channelID, 'https://docs.google.com/drawings/d/1Qy83BggQ0N2RpYb3bwKcb0eEj2dqmLpe3DNuWG_JzL8/edit'); break;
                case 'gen_mu':
                case 'gen_mus': sendMsg(channelID, 'https://docs.google.com/spreadsheets/d/1wzkzkGx0ws3F0VkRz9soOyE1bBsohN4Tjq9Nhrq4F6Y/edit#gid=0'); break;
                case 'gen_quote':
                case 'gen_quotes': sendMsg(channelID, 'https://docs.google.com/document/d/1ps_a1qAlWjdBV91c99kLognj-zBhA3OXRcdGmP2BgA8/edit'); break;
                // #endregion

                // #region Sally Memes
                case 'calmsally':
                case 'csally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/calmsally.png"); break;
                case 'delet': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/delet.png"); break;
                case 'deletin': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/deletin.png"); break;
                case 'madsally':
                case 'msally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/madsally.png"); break;
                case 'psally':
                case 'perfectsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/pSally.gif"); break;
                case 'psallyfull':
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
                case 'thirstysally':
                case 'thirst': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally.jpg"); break;
                case 'thirstysally2':
                case 'thirst2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/thirstysally2.jpg"); break;
                case 'ubsally': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/sally/ubsally.png"); break;
                // #endregion
                
                // #region Ibuse Memes
                case 'ibuse': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuse.png"); break;
                case 'ibuseback': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuseback.png"); break;
                case 'ibusecheeks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusecheeks.png"); break;
                case 'ibusefull': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusefull.png"); break;
                case 'ibuselel': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuselel.png"); break;
                case 'ibusespit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusespit.png"); break;
                case 'ibuseu2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibuseu2.png"); break;
                case 'ibusewat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/ibuse/ibusewat.png"); break;
                // #endregion
                
                // #region Naruto Memes
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
                case 'tobithink':
                case 'tt': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/tobithink.png"); break;
                case 'tooeasy': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/tooeasy.jpg"); break;
                case 'umff':
                case 'crow': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/umff.jpg"); break;
                case 'wat': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/naruto/wat.png"); break;
                // #endregion
                
                // #region Storm Memes
                case 'acd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/ACD.gif"); break;
                case 'amodesauce':
                case 'parryjb': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/amodesauce.png"); break;
                case 'bluebar': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/bluebar.png"); break;
                case 'classic': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/classic.gif"); break;
                case 'credits': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/credits.png"); break;
                case 'dab': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dab.png"); break;
                case 'dc': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dc.png"); break;
                // #region Dom Movement
                case 'dommovement1':
                case 'dm1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm1.gif"); break;
                case 'dommovement2':
                case 'dm2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm2.gif"); break;
                case 'dommovement3':
                case 'dm3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm3.gif"); break;
                case 'dommovement4':
                case 'dm4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm4.gif"); break;
                case 'dommovement5':
                case 'dm5': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm5.gif"); break;
                case 'dommovement6':
                case 'dm6': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm6.gif"); break;
                case 'dommovement7':
                case 'dm7': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm7.gif"); break;
                case 'dommovement8':
                case 'dm8': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm8.gif"); break;
                case 'dommovement9':
                case 'dm9': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm9.gif"); break;
                case 'dommovement10':
                case 'dm10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm10.gif"); break;
                case 'dommovement11':
                case 'dm11': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm11.gif"); break;
                case 'dommovement12':
                case 'dm12': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm12.gif"); break;
                case 'dommovement13':
                case 'dm13': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm13.gif"); break;
                case 'dommovement14':
                case 'dm14': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm14.gif"); break;
                case 'dommovement15':
                case 'dm15': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm15.gif"); break;
                case 'dommovement16':
                case 'dm16': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm16.gif"); break;
                case 'dommovement17':
                case 'dm17': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm17.gif"); break;
                case 'dommovement18':
                case 'dm18': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm18.gif"); break;
                case 'dommovement19':
                case 'dm19': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm19.gif"); break;
                case 'dommovement20':
                case 'dm20': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/dm20.gif"); break;
                // #endregion
                case 'fullacd': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/fullACD.gif"); break;
                case 'gen': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/Gen.jpg"); break;
                case 'gen2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/gen2.png"); break;
                case 'gen3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/Gen3.png"); break;
                case 'hanzoumad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/hanzoumad.jpg"); break;
                case 'howmad': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/howmad.png"); break;
                case 'kuroshika':
                case 'ks': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/kuroshika.png"); break;
                case 'list2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/list2.PNG"); break;
                case 'maskedprimate':
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
                case 'thatsenough':
                case 'te': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/thatsenough.png"); break;
                case 'trollzo': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/trollzo.png"); break;
                case 'trollzo2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/storm/trollzo2.png"); break;
                // #endregion
                
                // #region Community Memes
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
                case 'infallidom': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/infallidom.jpg"); break;
                case 'infallidom2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/infallidom2.jpg"); break;
                case 'jeffyanger': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/jeffyanger.png"); break;
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
                case 'nejikun': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/nejikun.png"); break;
                case 'nikus4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/nikus4-cropped-2.jpg"); break;
                case 'ninjagba': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/ninjaGBA.png"); break;
                case 'playco': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/playco.png"); break;
                case 'pt1':
                case 'polotrying1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/community/polotrying1.png"); break;
                case 'pt2':
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
                // #endregion
                
                // #region S4 Story Images
                case 'amode': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/amode.png"); break;
                case 'bromance1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/bromance1.png"); break;
                case 'bromance2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/s4/bromance2.png"); break;
                case 'calmkabuto':
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
                case 'mevsnewgens':
                case 'mmvsm':
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
                // #endregion
                
                // #region UNSG Community Emotes
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
                case 'hyperlum':
                case 'hlum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperlum.png"); break;
                case 'hyperqr':
                case 'hqr': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperqr.png"); break;
                case 'hyperthink':
                case 'hthink': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthink.png"); break;
                case 'hyperthonk':
                case 'hthonk': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/hyperthonk.png"); break;
                case 'kek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kek.png"); break;
                case 'kek2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kek2.jpeg"); break;
                case 'kekaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kekaku.png"); break;
                case 'kekatsuki': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kekatsuki.jpeg"); break;
                case 'kyle': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/kyle.png"); break;
                case 'lilkek': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/lilkek.png"); break;
                case 'minatodfa':
                case 'mdfa': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/minatoidfa.png"); break;
                case 'okkekoi': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/okkekoi.png"); break;
                case 'qrs': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/qrs.png"); break;
                case 'realum': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/realum.png"); break;
                case 'same': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/same.png"); break;
                case 'same2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/same2.png"); break;
                case 'thesepain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/thesepain.png"); break;
                case 'uhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/uhuh.jpg"); break;
                case 'uhuhuh': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/unsgc/uhuhuh.png"); break;
                // #endregion
                
                // #region ArashiBoards Emotes
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
                case 'lum':
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
                case 'qr':
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
                // #endregion
                
                // #region Bleach Memes
                case 'id':
                case 'ichigodisdain': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/id.png"); break;
                case 'mayurilit': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/mayurilit.png"); break;
                case 'mayurirf': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/mayurirf.png"); break;
                case 'suzumebachi1':
                case 'sb1': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi1.png"); break;
                case 'suzumebachi2':
                case 'sb2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi2.png"); break;
                case 'suzumebachi3':
                case 'sb3': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi3.png"); break;
                case 'suzumebachi4':
                case 'sb4': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/bleach/suzumebachi4.png"); break;
                // #endregion
                
                // #region Other Gaming Memes
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
                // #endregion
                
                // #region Other Non-Gaming Memes
                case '10outta10': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/10outta10.PNG"); break;
                case 'dancingallnight': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/dancingallnight.gif"); break;
                case 'dancingallnight2': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/dancingallnight2.gif"); break;
                case 'discord': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/discord.png"); break;
                case 'keikaku': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/keikaku.jpg"); break;
                case 'mute': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/mute.png"); break;
                case 'tru': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/tru.jpg"); break;
                case 'watermark': sendEmbed(channelID, "https://raw.githubusercontent.com/RandomAnimeGamer/sally-bot/master/other-nongaming/watermark.jpg"); break;
                // #endregion
            }
            
         }
     }
});

function sendEmbed(channel, imgurl) {
    bot.sendMessage({ to: channel, message: '', embed: { image: { url: imgurl } } });
    console.log(imgurl);
}
function sendMsg(channel, text) {
    bot.sendMessage({ to: channel, message: text });
    console.log(text);
}
function arrayToStr(arr) { var str = ''; for (var i = 0; i < arr.length; i++) { str += arr[i] + '\n'; } return str; }

function addRole(channelID, userID, role) {
    if (bot.channels[channelID] !== undefined) {
        if (bot.channels[channelID].guild_id === serverid) {
            bot.addToRole({ "serverID": serverid, "userID": userID, "roleID": role }, function (err, response) {
                if (err) console.error(err);
                else console.log(response);
            });
        }
    }
}
function removeRole(channelID, userID, role) {
    if (bot.channels[channelID] !== undefined) {
        if (bot.channels[channelID].guild_id === serverid) {
            bot.removeFromRole({ "serverID": serverid, "userID": userID, "roleID": role }, function (err, response) {
                if (err) console.error(err);
                else console.log(response);
            });
        }
    }
}
function removeRoles(channelID, userID, role) {
    if (bot.channels[channelID] !== undefined) {
        if (bot.channels[channelID].guild_id === serverid) {
            var avail_roles = bot.servers[serverid].members[userID].roles;
            for (var i = 0; i < role.length; i++) {
                if (avail_roles.includes(role[i])) {
                    bot.removeFromRole({ "serverID": serverid, "userID": userID, "roleID": role[i] }, function (err, response) {
                        if (err) console.error(err);
                        else console.log(response);
                    });
                }
            }
        }
    }
}