const config = require('../config');

async function readEnv() {
  const alwaysOnline = process.env.ALWAYS_ONLINE ? process.env.ALWAYS_ONLINE.toLowerCase() === 'true' : true;
  const autoLikeStatus = process.env.AUTO_LIKE_STATUS ? process.env.AUTO_LIKE_STATUS.toLowerCase() === 'true' : true;
  return {
    PREFIX: config.PREFIX,
    ALWAYS_ONLINE: alwaysOnline,
    AUTO_LIKE_STATUS: autoLikeStatus
  };
}

module.exports = { readEnv };
