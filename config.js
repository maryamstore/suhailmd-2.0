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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_08_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVDE3QldvblZUZzZtRTRGRFhwWUtzYXFNM0NSWkFLMmUydnMrci9rUml1ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUVLdUxEek9RLXlXeTZtaGhSX2pxZ1wiLFxuICBcInBob25lSWRcIjogXCJjOWFiMDcxYy01ZTlkLTRkZDYtODBmZC1hZjcwYTFhZjFkOThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjQxLFxuICAgICAgMjMyLFxuICAgICAgMTA4LFxuICAgICAgOCxcbiAgICAgIDk3LFxuICAgICAgMTQxLFxuICAgICAgMTQzLFxuICAgICAgMjAwLFxuICAgICAgNTMsXG4gICAgICAyMDIsXG4gICAgICAyMyxcbiAgICAgIDE1OCxcbiAgICAgIDEwMSxcbiAgICAgIDI1MCxcbiAgICAgIDIyLFxuICAgICAgMjEwLFxuICAgICAgMTkzLFxuICAgICAgMTA5LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTA3LFxuICAgICAgMjI0LFxuICAgICAgMTI4LFxuICAgICAgOTUsXG4gICAgICAxNzIsXG4gICAgICAyMDEsXG4gICAgICA4MyxcbiAgICAgIDE4NixcbiAgICAgIDI0OSxcbiAgICAgIDEyNixcbiAgICAgIDYyLFxuICAgICAgODcsXG4gICAgICAyNTQsXG4gICAgICAxNDAsXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDIxNSxcbiAgICAgIDExLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk1UzU1TERKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY0NTk5NjU5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJ5YW0gU3RvcmUgU2t0XCIsXG4gICAgXCJsaWRcIjogXCIyMDEzOTE0NTI3NDU4MzY6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcjIwYTRDRUtQeHE3c0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpRNnV1K1lGS01mQ3hCUHE3bTRDOFlrTmxJN24zeWZXMFN4NytiTFBMbFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzc0QWRMRE9iaWYxRHFIQ3libzN6TjF5aHk0MXJ4NzhxSzBscEdVTWJwWXMzK1ZvdUUraVZ0MThSVnk5SS9XaUxaall4QVJIMllZOFp0bUlsVDFmQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQkgyZWJkYVRzRFdmc0FjK0dBRGdyNFI5cjVaT2xYVVlqNGo1TWNvbE5VU3dZY09rNWdQc3B0WjVobjZoSU9Qc2g2NFRDL2pYcXR2OWNMY0UvUzZRZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NDU5OTY1OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwNjM3MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEbjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURuNy5qc29uIjogIntcImtleURhdGFcIjpcIkRucHZwMEpQZCsyRXM0cElGRWEzZjR0SjlDYkI4U2ZySWsySENWR2ptbVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM0NjgyMTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2OTI2MDQwOTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhai-XMD",
  ownername:process.env.OWNER_NAME|| "suhail-X",


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
