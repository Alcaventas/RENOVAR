import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en, es, id, ar, pt, de, it } from './lib/idiomas/total-idiomas.js'

// ES ➜ Agregué primero el número del Bot como prioridad
// ES ➜ Si desea recibir reportes debe de usar los tres parámetros (Número, nombre y true)
// EN ➜ Add the Bot number as priority first
// EN ➜ If you want to receive reports you must use the three parameters (Number, name and true)
global.owner = [ 
['59169082575', 'Alba070503', true],
['59169214837'], 
['5214774444444'], 
['595976126756'],
['593968585383']]

global.mods = [] 
global.prems = []
global.mods = [] 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = true
global.baileys = '@whiskeysockets/baileys'

global.packname = 'FICCT BOT 🤖'
global.author = 'Alba070503'

// ❰❰ methodCode ❱❱
// [ES] > Agregue el número del Bot en "botNumberCode" si desea recibir código de 8 dígitos sin registrar el número en la consola.
// [EN] > Add the Bot number in "botNumberCode" if you want to receive 8-digit code without registering the number in the console.
global.botNumberCode = "" //example: "+59309090909"
global.confirmCode = "" // No tocar esto : Do not touch this line

// ES ➜ Agregue el código de idioma el cual usará GataBot  
// EN ➜ Add the language code which GataBot will use
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português              de = Deutsch
//  it = Italiano
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = [ 
['593968263524', 'Gata Dios 💻', 1], 
['5214774444444', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '3' // máxima advertencias

// IDs de canales
global.ch = {
ch1: '120363314543492849@newsletter',
ch2: '120363314543492849@newsletter',
ch3: '120363314543492849@newsletter',
ch4: '120363314543492849@newsletter',
ch5: '120363314543492849@newsletter',
ch6: '120363314543492849@newsletter',
ch7: '120363314543492849@newsletter',
ch8: '120363314543492849@newsletter', 
}

//skyUltraPlus
global.dash = "https://dash.skyultraplus.com"
global.panel = "https://panel.skyultraplus.com"
global.yt2 = "https://youtube.com/@sky-ultra-plus"
global.patreon = "https://patreon.com/SkyUltraPlus"
  
// redes
global.tk = 'https://tiktok.com/@u.ficct'
global.ths = 'https://www.threads.net/@u.ficct'
global.yt = 'https://youtube.com/@Alba070503'
global.ig = 'https://www.instagram.com/Alba070503YT'
global.md = 'https://github.com/GataNina-Li'
global.fb = 'https://www.facebook.com/u.ficct'
global.paypal = 'https://paypal.me/Alba070503'
global.asistencia = 'https://wa.me/message/MEKOUFBEOG5ED1'
global.tg = 'https://t.me/Alba070503' // canal

// canales
global.canal1 = "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M"
global.canal2 = "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M"
global.canal3 = "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M"
global.canal4 = "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M"
global.canal5 = "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M"

// Imágenes en la nube
global.img = 'https://qu.ax/ZNrwt.jpeg'
global.img2 = 'https://qu.ax/Kvbf.jpg'
global.img3 = 'https://qu.ax/sQfSS.jpg'
global.img4 = 'https://qu.ax/fCVpY.jpg'
global.img5 = 'https://qu.ax/nWgle.jpg'

global.canalIdGB = ["120363314543492849@newsletter", "120363314543492849@newsletter", "120363314543492849@newsletter", "120363314543492849@newsletter", "120363314543492849@newsletter", "120363314543492849@newsletter", "120363314543492849@newsletter"]
global.canalNombreGB = ["U.FICCT CHANNEL🐧", "Powered @Alba070503", "U.ficct", "U.ficct", "FICCT BOT 🐧", "U.FICCT", "U.FICCT"]
  
global.WC = {
infinity: { name: "U.FICCT", id: "120363314543492849@newsletter", link: "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M", command: "sugficct" },
poetix: { name: "U.ficct", id: "120363314543492849@newsletter", link: "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M", command: "sugcanal" },
gatabot: { name: "Alba070503", id: "120363314543492849@newsletter", link: "https://whatsapp.com/channel/0029VaoYlNb2Jl8NhnZuL80M", command: "sugalba" }
}

global.img = 'https://qu.ax/nWgle.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
