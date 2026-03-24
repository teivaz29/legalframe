![License: MIT](https://shields.io)
![Node.js Version](https://shields.io)
![Status](https://shields.io)

# Legalframe 

Legalframe - the first legaltech framework of JavaScript for building check-up scripts JSON-based dataforms legally significant messages and JSON Schema messages, as well as their integration into scripts used for working with digital document management. Its main advantages:

* **Simplicity:** The framework is easily customized for your forms, as well as their schemas, for testing.

* **Availability of hashing:** Each message is signed with a hash based on the "crypto" JS-library; 

* **Checking Arrays:** Ability to validate JSON data arrays.

[For more information, please contact the developer](https://vk.com/teivaz29)

## Installation

Deployment and installation of the framework is easy and accessible **to a novice developer**. To deploy to Node.js, you need the ajv library. Install it via the terminal as follows:

```
npm install ajv
```

## Examples
For example, the framework validates an array of data against JSON:
```json
[
  {
    "messageID": "68200586",
    "senderID": "40709",
    "senderName": "name",
    "recipientID": "53394111",
    "recipientName": "name",
    "description": "desc",
    "hashMessage": "ec2d833c026f8cead9134eae6aceb9550efee17896f2744fe94127106480ce23"
  },
  {
    "messageID": "38721776",
    "senderID": "22549",
    "senderName": "name",
    "recipientID": "38055559",
    "recipientName": "name",
    "description": "desc",
    "hashMessage": "9e212ed7ff4e6ee67ab12237f5b3bfb5d576fd385742d8937ed31be58421be0a"
}
]
```
against the JSON-schema:
```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "messageID": {
        "type": "string",
        "pattern": "^[0-9]+$"
      },
      "senderID": {
        "type": "string",
        "pattern": "^[0-9]+$"
      },
      "senderName": {
        "type": "string",
        "minLength": 3
      },
      "recipientID": {
        "type": "string",
        "pattern": "^[0-9]+$"
      },
      "recipientName": {
        "type": "string",
        "minLength": 3
      },
      "description": {
        "type": "string",
        "maxLength": 100
      },
      "hashMessage": {
        "type": "string",
        "pattern": "^[a-f0-9]{64}$"
      }
    },
    "required": [
      "messageID",
      "senderID",
      "recipientID",
      "description",
      "hashMessage"
    ]
  },
  "minItems": 1
}
```
