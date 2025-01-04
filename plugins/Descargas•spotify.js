import _ from "lodash";
import fetch from "node-fetch";

let handler = async (m, { conn, command, usedPrefix, args }) => {
  try {
    // Obtener consulta del usuario
    const text = _.get(args, "length") 
      ? args.join(" ") 
      : _.get(m, "quoted.text") || _.get(m, "quoted.caption") || _.get(m, "quoted.description") || "";

    if (!text.trim()) {
      return m.reply(`✦ Ingresa una consulta\n*Ejemplo:* .${command} Joji Ew`);
    }

    await m.reply("✦ Espere un momento...");

    // API 1: Búsqueda en Spotify
    const searchResponse = await fetch(`https://deliriussapi-oficial.vercel.app/search/spotify?q=${encodeURIComponent(text)}`);
    const searchResult = await searchResponse.json();

    if (!searchResult.status || !searchResult.data.length) {
      return m.reply("✦ No se encontraron resultados para tu consulta.");
    }

    const firstResult = searchResult.data[0];

    // API 2: Descargar el primer resultado
    const downloadResponse = await fetch(`https://deliriussapi-oficial.vercel.app/download/spotifydl?url=${firstResult.url}`);
    const downloadResult = await downloadResponse.json();

    if (!downloadResult.status || !downloadResult.data) {
      return m.reply("✦ No se pudo descargar el audio. Inténtalo de nuevo más tarde.");
    }

    const { title, author, url: downloadUrl, image } = downloadResult.data;

    // Construir mensaje
    const captvid = `*✦Título:* ${title || "No encontrado"}
*✧Popularidad:* ${firstResult.popularity || "No disponible"}
*✦Artista:* ${author || "No encontrado"}
*✧Álbum:* ${firstResult.album || "No disponible"}
*✦Duración:* ${firstResult.duration || "No disponible"}
*✦Publicado:* ${firstResult.publish || "No disponible"}
*✧Enlace Spotify:* ${firstResult.url || "No disponible"}`;

    // Descargar miniatura para adjuntar
    const thumbnail = (await conn.getFile(image))?.data;

    // Contexto del mensaje con miniatura
    const infoReply = {
      contextInfo: {
        externalAdReply: {
          body: "✧ En unos momentos se entrega su audio",
          mediaType: 1,
          mediaUrl: firstResult.url,
          previewType: 0,
          renderLargerThumbnail: true,
          sourceUrl: firstResult.url,
          thumbnail: thumbnail,
          title: "S P O T I F Y - A U D I O",
        },
      },
    };

    // Enviar información al chat
    await conn.reply(m.chat, captvid, m, infoReply);

    // Modificar el contexto para el audio descargado
    infoReply.contextInfo.externalAdReply.body = "Audio descargado con éxito";

    // Enviar el audio descargado
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: downloadUrl },
        caption: captvid,
        mimetype: "audio/mpeg",
        contextInfo: infoReply.contextInfo,
      },
      { quoted: m }
    );
  } catch (error) {
    console.error("Error en el handler de Spotify:", error);
    return m.reply("✦ Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo más tarde.");
  }
};

// Configuración del comando
handler.help = ["spotifyplay *<consulta>*"];
handler.tags = ["downloader"];
handler.command = /^(spotify|splay)$/i;
handler.limit = true;

export default handler;
