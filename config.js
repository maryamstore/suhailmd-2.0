const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_14_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1NK3h4M24wUXFPd3lqYzZ3VHhZMElWOC9CY3MrZjljcHRzYzM1SVRmM3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFOcVpfR29GUUNHcDE5QjhqRzQ2bXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjJjY2FmNzItN2Y5My00NTA4LTg0ZmQtYzM2ZmUzYTRhYTM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDEzMCxcbiAgICAgIDEwNixcbiAgICAgIDc2LFxuICAgICAgOTAsXG4gICAgICAyMzgsXG4gICAgICA2LFxuICAgICAgODgsXG4gICAgICAyMTUsXG4gICAgICAyMTYsXG4gICAgICAxNyxcbiAgICAgIDEzOSxcbiAgICAgIDI2LFxuICAgICAgMTY3LFxuICAgICAgMTc4LFxuICAgICAgMTU0LFxuICAgICAgMTUyLFxuICAgICAgNixcbiAgICAgIDUsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjE5LFxuICAgICAgNixcbiAgICAgIDEwMCxcbiAgICAgIDI0MCxcbiAgICAgIDIzMSxcbiAgICAgIDIyOCxcbiAgICAgIDE3NSxcbiAgICAgIDc2LFxuICAgICAgMTI5LFxuICAgICAgNjEsXG4gICAgICAyMTEsXG4gICAgICAxODEsXG4gICAgICAyMDEsXG4gICAgICAxNzMsXG4gICAgICAxMjksXG4gICAgICA5LFxuICAgICAgMjIwLFxuICAgICAgMTgyLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDlDN1hKRkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjQ1OTk2NTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJ5YW0gU3RvcmUgU2t0XCIsXG4gICAgXCJsaWRcIjogXCIyMDEzOTE0NTI3NDU4MzY6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQyMGE0Q0VQK00zN3NHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKUTZ1dStZRktNZkN4QlBxN200QzhZa05sSTduM3lmVzBTeDcrYkxQTGxVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhibjlseFJZNmVDdTRRWFpLeWJ6WnQrdWUrb1VTbGcvZVZYOFM4Sk94OXAxTW9VSlVIR1FoeHJIdnM1QjZ5NXJWZ3doaTJTMzlJRTYzMldwbWlGcUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJGRTBhUTl4L1Y5VXpXL2hkQXdEWHY4UFN4d0psWVhrMWZWTS8vSmJkYUNJQTNzNkVnWVJTWG8xZjFPcVgyK2krVksrVnFDMXBaQTd4RDk5VFRaS2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjQ1OTk2NTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkwMjg1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJjSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmNILmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVFmZEh3Q3Z6cXBQNER6SWpaRXR5bE5JSGdMZlZSdjNudEZTTHgzRXJCMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzQ2ODIxNjAsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDYsNyw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
