import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉 𝙊 𝙐𝙉𝘼 𝙊𝙍𝘿𝙀𝙉*\n\n❏ *Ejemplo de uso:*\n${usedPrefix + command} Recomienda un top 10 de películas de acción\n${usedPrefix + command} Código en JS para un juego de cartas`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    let res = await fetch(`https://delirius-apiofc.vercel.app/ia/llamaia?query=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (!json || !json.response) {
      throw new Error('Respuesta inválida de la API');
    }

    await m.reply(json.response);
  } catch (e) {
    await conn.reply(m.chat, `❌ *Ocurrió un error.* Reporta con: #report ${usedPrefix + command}\n\n${wm}`, fkontak, m);
    console.log(`❗❗ Error en ${usedPrefix + command} ❗❗`);
    console.log(e);
  }
};

handler.command = ['ia', 'chatbot'];
handler.help = ['ia', 'chatbot'];
handler.tags = ['ai'];

handler.premium = false;

export default handler;
