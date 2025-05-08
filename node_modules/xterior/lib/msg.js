// Send a text message
async function sms(conn, to, text, quoted = {}) {
  await conn.sendMessage(to, { text }, { quoted });
}

// Send a media message (audio or video)
async function sendMedia(conn, to, type, url, caption = '', quoted = {}) {
  if (type === 'audio') {
    await conn.sendMessage(to, { audio: { url }, mimetype: 'audio/mpeg' }, { quoted }); // Changed to audio/mpeg
  } else if (type === 'video') {
    await conn.sendMessage(to, { video: { url }, caption }, { quoted });
  }
}

module.exports = { sms, sendMedia };
