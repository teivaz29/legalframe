/** Legalframe legaltech framework JSON-Based dataforms legally significant messages.

Developer: Alex Primakov (teivaz29)

Libraries:
fs (File System) - a library for working with the file system and saving data.
crypto - a library for working with hashes
ajv - a library for comparing JSON data against a schema.

*/ 

const fs = require("fs");
const crypto = require("crypto");
const Ajv = require("ajv");
const ajv = new Ajv();

console.log("Legalframe-like Service data checks");

// Generating a hash using the crypto library:

function createHash(data) {

   const checkString = `${data.messageID}|${data.senderID}|${data.recipientID}|${data.description}`;

   return crypto.createHash("sha256").update(checkString).digest("hex");
}

// Declare the JSON-schema:

const schema = {
  type: "array",
  items: {
    type: "object",
    properties: {
       messageID: { type: "string", pattern: "^[0-9]+$" },
       senderID: { type: "string", pattern: "^[0-9]+$" },
       senderName: { type: "string", minLength: 3 },
       recipientID: { type: "string", pattern: "^[0-9]+$" },
       recipientName: { type: "string", minLength: 3 },
       description: { type: "string", maxLength: 100},
       hashMessage: { type: "string", pattern: "^[a-f0-9]{64}$" }
    },
  required: ["messageID", "senderID", "recipientID", "description", "hashMessage"]
 },
  minItems: 1
};

//Compiling a schema:

const validate = ajv.compile(schema);

// We add an array of data:

const data = [
  {
    "messageID": Math.floor(Math.random() * 78912241).toString(),
    "senderID": Math.floor(Math.random() * 72241).toString(), 
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
    "recipientID": Math.floor(Math.random() * 58912211).toString(),
    "recipientName": "name", 
    "description": "desc", 
    "hashMessage": ""
  }
];


data.forEach(item => {
  item.hashMessage = createHash(item);
});

//Validating data: 

const valid = validate(data);

console.log("JSON Data: " + JSON.stringify(data, null, 2) + ", checked according to the schema.");

// We check the validity of the data against the schema:

if (!valid) {
   console.log("The following errors were found in the data: ", validate.errors);
   console.log('Data not saved.');
} else {
  console.log("The data matches the declared JSON Schema");
  const result = JSON.stringify(data, null, 2);
  fs.writeFileSync("data.json", result);
  console.log('Message data saved.');
  const schresult = JSON.stringify(schema, null, 2);
  fs.writeFileSync("schema.json", schresult);
  console.log('The verification scheme has been saved.');
}
