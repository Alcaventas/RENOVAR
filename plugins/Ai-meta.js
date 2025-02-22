import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `❀ Ingrese una pregunta para que la IA responda.`, m);
  }

  try {
    await m.react('🤖');
    
    let res = await fetch(`https://delirius-apiofc.vercel.app/ia/llamaia?query=${encodeURIComponent(text)}`);
    let json = await res.json();
    
    if (!json || !json.response) {
      throw new Error('Respuesta inválida de la API');
    }

    await conn.reply(m.chat, json.response, m);
    await m.react(done);
  } catch (e) {
    await m.react('☠️');
    await conn.reply(m.chat, `✘ La IA no puede responder a esa pregunta en este momento.`, m);
  }
};

handler.command = ['ia'];
handler.help = ['ia'];
handler.tags = ['ai'];

export default handler;
