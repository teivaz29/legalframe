<p align="center">
  <img src="https://sun9-32.userapi.com/s/v1/ig2/qOCyiTRH6U-vTi2L2pKU44W0MVm156Mf0Db3w3lM0DX9H-Y-Xs-ipLieRV08yoUjmYuWaXwDZl_GOhARbNDdQfHV.jpg?quality=95&as=32x20,48x31,72x46,108x69,160x102,240x153,360x229,480x305,540x344,640x407,720x458,1080x687,1280x814,1440x916,1696x1079&from=bu&u=oxR-koFMvXvvzOZ-5Nz_TS8jlsIDtW5rWlF7jpgNRF8&cs=640x0" width="600" alt="Legalframe Logo">
</p>

# Legalframe &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/badge/npm%20version-1.0.2-blue)](https://www.npmjs.com/package/legalframe)
Legalframe - the first legaltech framework of JavaScript for building check-up scripts JSON-based dataforms legally significant messages and JSON Schema messages, as well as their integration into scripts used for working with digital document management. Its main advantages:

* **Simplicity:** The framework is easily customized for your forms, as well as their schemas, for testing.

* **Availability of hashing:** Each message is signed with a hash based on the "crypto" JS-library; 

* **Checking Arrays:** Ability to validate JSON data arrays.

[For more information, please contact the developer](https://vk.com/teivaz29)

## Installation

Deployment and installation of the framework is easy and accessible **to a novice developer**. Install the framework via **npm** to integrate it into your project:

```bash

npm install legalframe

```

To deploy to Node.js, you need the ajv library. Install it via the terminal as follows:

```bash

npm install ajv

```

## Quick Start

To connect the framework to your project, use:
```js
const legalframe = require("legalframe");
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

An example of how to use the script is located in the [examples](./examples) folder. It also contains a Dockerfile for deployment in a container environment.

## License

Legalframe is covered by the MIT License.
