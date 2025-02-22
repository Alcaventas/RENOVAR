import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '❀ Ingrese una pregunta para que la IA responda.', m);
  }

  try {
    await m.react(rwait);
    const url = `https://delirius-apiofc.vercel.app/ia/llamaia?query=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const json = await response.json();

    if (!json || !json.response) {
      throw new Error('Respuesta inválida de la API');
    }

    await conn.reply(m.chat, json.response, m);
    await m.react(done);
  } catch (e) {
    console.error('Error en el comando IA:', e);
    await m.react(error);
    await conn.reply(m.chat, '✘ La IA no puede responder a esa pregunta en este momento.', m);
  }
};

handler.command = ['ia'];
handler.help = ['ia'];
handler.tags = ['ai'];

export default handler;
