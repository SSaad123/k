

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['966559202629'] //ur owner number
global.ownername = "Robin"
global.ytname = "Golden Lorvid" //ur yt chanel name
global.socialm = "Golden Lorvid" //ur github or insta name
global.location = "Golden Lorvid" //ur location

//bot bombdy
global.botname = "Dora"
global.vidmenu = { url: 'https://cdn-media.f-static.net/uploads/5390166/normal_62e18f3899612.mp4' } //gif and video menu
global.packname = "Golden Lorvid "
global.author = "Golden Lorvid"
global.themeemoji = "🛡️"
global.reactmoji = "🛡️"
global.ownertag = ['966559202629'] //ur owner tag
global.ownernummenu = ['966559202629'] //ur owner number in menu and all
global.watermark = "Golden Lorvid." //ur watermark
global.botscript = "https://chat.whatsapp.com/GASmu41AJvGCXAPEy17ddN"
global.linkz1 = "https://chat.whatsapp.com/GASmu41AJvGCXAPEy17ddN"
global.linkz2 = "https://chat.whatsapp.com/GASmu41AJvGCXAPEy17ddN"

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'تم✓',
    admin: 'هذا الامر للمشرفين فقط!',
    botAdmin: 'لازم البوت يكون معه ادمن!',
    owner: 'هذا الامر للاونر فقط',
    group: 'هذا الامر للقروبات فقط!',
    private: 'هذا الامر للخاص فقط!',
    bot: 'هذا الامر للبوتات فقط',
    wait: 'جار التحميل...',
    linkm: 'ما حطيت رابط , وين الرابط؟؟',
    error: 'حصل خطأ!',
    ban: 'تم تبنيدك من قبل الاونر, تواصل معه اذا تبي تفكه.',
    nsfw: 'لول',
    banChat: 'البوت مبند من القروب ذا, تواصل مع الاونر يفكه'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)})
