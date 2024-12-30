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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347064599659";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_52_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk0RElZcFcvb0JkV254RjhPWldJdHFwVkI0T3k1MldhZkV6cW1hYjZURFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZQTzExaVVjUVE2THlYZDlzUXd2WlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJkZmEyYTYtZWE0Yy00MzFjLTgxZWYtZWNjNTI2NWE4YWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjA5LFxuICAgICAgMTMxLFxuICAgICAgNyxcbiAgICAgIDExNixcbiAgICAgIDEzMSxcbiAgICAgIDksXG4gICAgICAxNDMsXG4gICAgICAyNDUsXG4gICAgICAxMTIsXG4gICAgICAxMTMsXG4gICAgICA0MCxcbiAgICAgIDI0NCxcbiAgICAgIDEwMyxcbiAgICAgIDYyLFxuICAgICAgMTQ3LFxuICAgICAgMjEzLFxuICAgICAgMTA3LFxuICAgICAgNDYsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTU5LFxuICAgICAgMTAwLFxuICAgICAgNDMsXG4gICAgICAxMDAsXG4gICAgICAxNTYsXG4gICAgICAyNDEsXG4gICAgICAxMTMsXG4gICAgICAzNSxcbiAgICAgIDEyMixcbiAgICAgIDg0LFxuICAgICAgODAsXG4gICAgICAxLFxuICAgICAgMzYsXG4gICAgICAyNDMsXG4gICAgICA3MSxcbiAgICAgIDI0OSxcbiAgICAgIDE0NSxcbiAgICAgIDIxNSxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM1MlNTVjY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY0NTk5NjU5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJ5YW0gU3RvcmUgU2t0XCIsXG4gICAgXCJsaWRcIjogXCIyMDEzOTE0NTI3NDU4MzY6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLejIwYTRDRUpTN3Jyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpRNnV1K1lGS01mQ3hCUHE3bTRDOFlrTmxJN24zeWZXMFN4NytiTFBMbFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTzVlSmNMcnJxc2RLVCtLWUkwTGZoZEN3SDFqQ3pHYUhyRkRSQmVvNFFwYnQ3cFI5YzVHTnFMQUFpekZNdjRnd3VCY3dhUUFUQ2Vnem9oWXdBVFhUQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFRNcC9KbUJHaXF4Ukx2UUZsaUoxeDJaQ2RZMlNyV3JhL2xkMGRDV1hnZENtb285Qmp6R2xlZ0JhbXVPWkZSb1I0NkdJckdoWVBmZlBHSktaYmJqaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NDU5OTY1OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUxMDU5NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEbjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURuNy5qc29uIjogIntcImtleURhdGFcIjpcIkRucHZwMEpQZCsyRXM0cElGRWEzZjR0SjlDYkI4U2ZySWsySENWR2ptbVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM0NjgyMTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
