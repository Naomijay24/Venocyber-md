//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVWTHVkaVFMQU9PZ0NTNGxRWVZpZEoyTktQSnZ3MEJjM0kyUkp3L1Vsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVlSNnVEUWxzbFNieVpTVU81Z2xUS0Ewam9ZMnpNVEJCcll4WlZ3TU5Ebz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TjFteGNFNXg2UXFPeFdYZFZlT2pSbHVtTjRuVlc4ZGhxSUxWUlo4eUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bk9nRkNZWEo1NGpNeFlSbHE4QzlWK2t6c291eGsxOW1nSXJkRTdSSWtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMT1lSSEo0dnBQY29UbjZEOWlXTVpNSVBoM2RjVXIwR3l1SWpsQmcvMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndrMzY0SzV0VVdEQXQ0TElDdW5ubFlWY1pBazBjU2lVY2lIeXF3OFBIQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9QS2lLS2tuYXJOaFpvaWhTVHRtWWtrUEhNQVRaWUd0cFFpUmg0ejhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFJRK1pSS1VUZmhjTlI4Sm05YktKNitzWDkyd0VLWXRQVStIbzhlMHpSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZjakNMb2N4ZnBUdDR6U3dkM2lWaWR4UWdMenRyUjdWK2gveHVqaTRsWld3RUVSazJENmRONi8yclNMR2Y3eGdCcGtLRnhJdlBSU3ZQbHhyZC9rcmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6ImRsaXo1ZW5qbWlVWVd1SGpIZGhHSE94L0JBdEdOYU52Tm0rd1pXVDY4VTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iko0c0IyckZTUjV1YXg0dTFSZGZvTmciLCJwaG9uZUlkIjoiNjQ2ZTFlYTQtNzA5Ny00OTUzLTlmYzgtNzQzYWEyMGY3MDE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImExdGdLaU9nMUU3SkdlNmRDSlo2SzI3UVYrTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWFZiMUFVdVBBMWZscy91WGdScUs0TlVPVlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzFNUk03WVAiLCJtZSI6eyJpZCI6IjI1NDc4MTE3NjYwNjoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFacGVzQkVJL1F3cklHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia052L0hkcFhGcElDNGdLWFR6YWpGSjRzRnJFVjBPb1hvUU5TVE5uRDFBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRldibnNWM2MvYUZpNHliYXlIUlRCRWthQnJZOUZla0pWaDhRbFcrTkdOdnhSdmxFU1N1a2s2TXFxcDEvaEFVb0d5U3UyNE03VFJ2TC9CeDB3SmZzQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImZXNSt4REp2SDkxL3NXdEswUjRraHl6Tnh5MnZQOHk4R3F2Q3hRTEx4dnNFQTlUY0ZINDlaY2FQSW9DamVrZ0oxM1REY0xUV3U3dFJvQ2hCR0I2RmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzgxMTc2NjA2OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpEYi94M2FWeGFTQXVJQ2wwODJveFNlTEJheEZkRHFGNkVEVWt6Wnc5UUQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY1NjE5NDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlFzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
