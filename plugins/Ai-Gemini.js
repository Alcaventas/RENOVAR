import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '❀ Ingrese una petición para que Gemini lo responda.', m);
  }

  try {
    await m.react(rwait);
    const response = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${encodeURIComponent(text)}`);
    const json = await response.json();

    if (!json || !json.result) {
      throw new Error('Respuesta inválida de la API');
    }

    await conn.reply(m.chat, json.result, m);
    await m.react(done);
  } catch (e) {
    console.error('Error en el comando Gemini:', e);
    await m.react(error);
    await conn.reply(m.chat, '✘ Gemini no puede responder a esa pregunta.', m);
  }
};

handler.command = ['gemini'];
handler.help = ['gemini'];
handler.tags = ['ai'];

export default handler;
