const legalCheck = require("./legalframe");

async function startCheck() {
  const myData = [ 
                    {
                       "messageID": Math.floor(Math.random() * 78912241).toString(),
                       "senderName": "name",  
                       "recipientID": Math.floor(Math.random() * 58912211).toString(),
                       "recipientName": "name", 
                       "description": "desc", 
                       "hashMessage": ""
                     },
                     {
                       "messageID": Math.floor(Math.random() * 78912241).toString(),
                       "senderID": Math.floor(Math.random() * 72241).toString(),
                       "senderName": "name", 
                       "recipientName": "name", 
                       "description": "desc", 
                       "hashMessage": ""
                      }
                 ];
    try {
      console.log("Started check:");
      await legalCheck(myData);
      console.log("Test succefuly!");
  } catch (error) {
      console.log("Error:", error.message);
  }
}

startCheck();
