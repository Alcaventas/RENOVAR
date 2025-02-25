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
['528241050228'], //Alcashop.ff
['528241264763']]

global.mods = [] 
global.prems = []
global.mods = [] 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = true
global.baileys = '@whiskeysockets/baileys'

global.packname = '𝘼𝙡𝙘𝙖|25'
global.author = '𝘼𝙡𝙘𝙖|25'

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
['528241050228', '𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥💻', 1], 
['528241264763', '𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥 𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]] 

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '3' // máxima advertencias

// IDs de canales
global.ch = {
ch1: '120363336642332098@newsletter',
ch2: '120363160031023229@newsletter',
ch3: '120363169294281316@newsletter',
ch4: '120363203805910750@newsletter',
ch5: '120363302472386010@newsletter',
ch6: '120363301598733462@newsletter',
ch7: '120363190430436554@newsletter',
ch8: '120363374372683775@newsletter', 
}

//skyUltraPlus
global.dash = "https://www.instagram.com/alcashop.ff"
global.panel = "https://www.instagram.com/alcashop.ff"
global.yt2 = "https://www.instagram.com/alcashop.ff"
global.patreon = "https://www.instagram.com/alcashop.ff"
  
// redes
global.tk = 'https://www.instagram.com/alcashop.ff'
global.ths = 'https://www.instagram.com/alcashop.ff'
global.yt = 'https://www.instagram.com/alcashop.ff'
global.ig = 'https://www.instagram.com/alcashop.ff'
global.md = 'https://www.instagram.com/alcashop.ff'
global.fb = 'https://www.instagram.com/alcashop.ff'
global.paypal = 'https://www.instagram.com/alcashop.ff'
global.asistencia = 'https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif'
global.tg = 'https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif' // canal

// canales
global.canal1 = "https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif"
global.canal2 = "https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif"
global.canal3 = "https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif"
global.canal4 = "https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif"
global.canal5 = "https://chat.whatsapp.com/ByQ7EqfLdCz0560VXNKDif"

// Imágenes en la nube
global.img = 'https://qu.ax/hiJVO.jpeg'
global.img2 = 'https://qu.ax/hiJVO.jpeg'
global.img3 = 'https://qu.ax/hiJVO.jpeg'
global.img4 = 'https://qu.ax/hiJVO.jpeg'
global.img5 = 'https://qu.ax/hiJVO.jpeg'

global.canalIdGB = ["120363160031023229@newsletter", "120363169294281316@newsletter", "120363203805910750@newsletter", "120363302472386010@newsletter", "120363374372683775@newsletter", "120363336642332098@newsletter", "120363190430436554@newsletter"]
global.canalNombreGB = ["INFINITY-WA 💫", "GB - UPDATE 🐈", "Tips sobre GataBot 🤩", "NEW PROJECT: YartexBot-MD ✨", "🌹 Pσҽƚιx ✨ Sƚҽʅʅαɾ 😎 Fυɳ", "GataBot Test", "༻🅖🅔🅝ⓑⓛ༺"]
  
global.WC = {
infinity: { name: "𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥 💫", id: "120363160031023229@newsletter", link: "Wa.me/528246208447", command: "suginfinity" },
poetix: { name: "𝘼𝙡𝙘𝙖𝙨𝙝𝙤𝙥", id: "120363374372683775@newsletter", link: "Wa.me/528246208447", command: "sugpoetix" },
gatabot: { name: "𝘼𝙡𝙘𝙖|25 Test", id: "120363336642332098@newsletter", link: "Wa.me/528246208447", command: "suggatabot" }
}

global.img = 'https://qu.ax/hiJVO.jpeg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
