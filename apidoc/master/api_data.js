define({ "api": [
  {
    "type": "post",
    "url": "/auth/change-password",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Change user password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeatPassword",
            "description": "<p>new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>reset code sent to the user email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Change Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/change-password",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/profilepic",
    "title": "Change Profile Picture",
    "name": "ChangeProfilePicture",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Change user profile picture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>picture</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Change Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/profilepic",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/forgot-password",
    "title": "Forgot Password",
    "name": "ForgotPassword",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Get an email to change the password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>username or email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Forgot Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/forgot-password",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github",
    "title": "Github Auth",
    "name": "Github_Auth",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github OAuth (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github/callback",
    "title": "Github Auth Callback",
    "name": "Github_Auth_Callback",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github Auth Callback (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/load",
    "title": "Load",
    "name": "Load",
    "group": "Auth",
    "version": "1.0.0",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Get currently authenticated user (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Load",
        "content": "curl -X GET\nhttps://wallet.example/auth/load",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Login (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Login",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"username\": \"alice\",\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/auth/login",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1\n  \"username\": \"alice\",\n  \"email\": \"alice@example.com\",\n  \"email_verified\": true,\n  \"github_id\": null,\n  \"destination\": \"451744\",\n  \"profile_picture\": \"https://wallet.example/api/users/alice/profilepic\",\n  \"name\": \"Alice\",\n  \"phone\": null,\n  \"address1\": null,\n  \"address2\": null,\n  \"city\": null,\n  \"region\": null,\n  \"country\": null,\n  \"zip_code\": null,\n  \"invite_code\": null,\n  \"identifier\": \"alice@wallet.example\",\n  \"balance\": 987,\n  \"minimum_allowed_balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Logout (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Logout",
        "content": "curl -X POST\nhttps://wallet.example/auth/logout",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/invites/:code",
    "title": "Delete invite code",
    "name": "DeleteInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Invite code (uuid)</p>"
          }
        ]
      }
    },
    "description": "<p>Delete invite code</p>",
    "examples": [
      {
        "title": "Delete invite code",
        "content": "curl -X DELETE -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/invites/eaee4ea6-d5a4-4cd8-b78e-97a34374352c",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "get",
    "url": "/invites",
    "title": "Get an invite code",
    "name": "GetInvite",
    "group": "Invites",
    "version": "1.0.0",
    "description": "<p>Get an invite code</p>",
    "examples": [
      {
        "title": "Get an invite code",
        "content": "curl -X GET\nhttps://wallet.example/invites/6a6a7ebc-0e18-49d3-8c9c-646caa56f213",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"6a6a7ebc-0e18-49d3-8c9c-646caa56f213\",\n    \"amount\": 100,\n    \"claimed\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "get",
    "url": "/invites",
    "title": "Get all invite codes",
    "name": "GetInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get all invite codes</p>",
    "examples": [
      {
        "title": "Get all invite codes",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/invites",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": " HTTP/1.1 200 OK\n [\n   {\n     \"code\": \"6a6a7ebc-0e18-49d3-8c9c-646caa56f213\",\n     \"amount\": 100,\n     \"claimed\": false,\n     \"created_at\": \"2017-05-11T22:51:32.737Z\",\n     \"updated_at\": \"2017-05-11T22:51:32.737Z\",\n     \"user_id\": null,\n     \"User\": null\n  },\n  {\n     \"code\": \"2cd765ce-4b15-4e40-99a0-fa4cd8ddce93\",\n     \"amount\": 200,\n      \"claimed\": false,\n      \"created_at\": \"2017-05-11T22:51:21.642Z\",\n      \"updated_at\": \"2017-05-11T22:51:21.642Z\",\n      \"user_id\": null,\n      \"User\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "post",
    "url": "/invites",
    "title": "Create an invite code",
    "name": "PostInvites",
    "group": "Invites",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Create an invite code</p>",
    "examples": [
      {
        "title": "Create an invite code",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"amount\": \"1000\"\n}'\nhttps://wallet.example/invites",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"amount\": 1000,\n    \"code\": \"eaee4ea6-d5a4-4cd8-b78e-97a34374352c\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/invites.js",
    "groupTitle": "Invites"
  },
  {
    "type": "GET",
    "url": "/config",
    "title": "Wallet config",
    "name": "GetConfig",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get wallet config</p>",
    "examples": [
      {
        "title": "Get wallet config",
        "content": "curl -X GET\nhttps://wallet.example/config",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"clientUri\": \"https://wallet.example\",\n  \"ledgerUri\": \"https://wallet.example/ledger\",\n  \"currencyCode\": \"USD\",\n  \"currencyScale\": 9,\n  \"currencySymbol\": \"$\",\n  \"registration\": true,\n  \"antiFraud\": false,\n  \"title\": \"Wallet Name\",\n  \"track\": {},\n  \"githubAuth\": false,\n  \"versions\": {\n    \"current\": \"2.0.2\",\n    \"hash\": \"bc056cc\",\n    \"latest\": \"2.0.2\"\n  },\n  \"settlementMethods\": [\n    {\n      \"id\": \"7b4a73b0-19c5-46ed-8905-febeae2b0a05\",\n      \"name\": \"Paypal\",\n      \"type\": \"paypal\",\n      \"description\": null,\n      \"uri\": null,\n      \"logo\": \"https://wallet.example/paypal.png\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/webfinger",
    "title": "Get webfinger info",
    "name": "GetWebfinger",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get webfinger info</p>",
    "examples": [
      {
        "title": "Get webfinger info",
        "content": "curl -X GET\nhttps://wallet.example/webfinger?resource=acct:alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"subject\": \"acct:alice@wallet.example\",\n  \"links\": [\n    {\n      \"rel\": \"https://interledger.org/rel/ledgerUri\",\n      \"href\": \"https://wallet.example/ledger\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/socketIOUri\",\n      \"href\": \"https://wallet.example/socket.io\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/payment\",\n      \"href\": \"https://wallet.example/payments\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/quote\",\n      \"href\": \"https://wallet.example/payments/quote\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/spsp/v2\",\n      \"href\": \"https://wallet.example/spsp/alice\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/webfinger.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/parse/destination",
    "title": "Parse destination",
    "name": "ParseDestination",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Parse a destination</p>",
    "examples": [
      {
        "title": "Parse a destination",
        "content": "curl -X GET\nhttps://wallet.example/parse/destination?destination=alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ledgerUri\": \"http://wallet.example/ledger\",\n    \"paymentUri\": \"http://wallet.example/api/spsp/alice\",\n    \"ilpAddress\": \"wallet.alice\",\n    \"identifier\": \"alice@wallet.example\",\n    \"currencyCode\": \"USD\",\n    \"currencySymbol\": \"$\",\n    \"name\": \"Alice\",\n    \"imageUrl\": \"http://wallet.example/api/users/alice/profilepic\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Health check",
    "name": "health",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Health check</p>",
    "examples": [
      {
        "title": "Health check",
        "content": "curl -X GET\nhttps://wallet.example/health",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/health.js",
    "groupTitle": "Misc"
  },
  {
    "type": "put",
    "url": "/payments/:id",
    "title": "Make payment",
    "name": "PutPayments",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Make payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>generated payment uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>text message for the destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Make a payment",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"quote\": {QuoteResponse},\n    \"message\": \"Here's some money for you\"\n}'\nhttps://wallet.example/payments/9efa70ec-08b9-11e6-b512-3e1d05defe78",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "POST",
    "url": "/spsp/:username",
    "title": "SPSP query",
    "name": "Query",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>SPSP Query</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "SPSP Query",
        "content": "curl -X POST -H \"Content-Type: application/json\"\nhttps://wallet.example/api/spsp/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"destination_account\": \"wallet.alice.iD4LnxavIqs4CKbwVkelHEluk5VTnH8Vw\",\n    \"shared_secret\": \"dwGaLn1pIrrOmmq6Xk362g\",\n    \"maximum_destination_amount\": \"18446744073709552000\",\n    \"minimum_destination_amount\": \"1\",\n    \"ledger_info\": {\n        \"currency_code\": \"USD\",\n        \"currency_scale\": 9\n    },\n    \"receiver_info\": {\n        \"name\": \"Alice Jan\",\n        \"image_url\": \"http://wallet.example/api/users/alice/profilepic\",\n        \"identifier\": \"alice@wallet.example\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "POST",
    "url": "/payments/quote",
    "title": "Request a quote",
    "name": "Quote",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Request a quote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination webfinger account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount (optional, used if destinationAmount is not provided)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount (optional, used if sourceAmount is not provided)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request a quote",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"destination\": \"bob@wallet.example\",\n    \"destinationAmount\": \"10\"\n}'\nhttps://wallet.example/payments/quote",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"406e6682-b18e-4e8b-8235-e88ad16a15a0\",\n  \"sourceAmount\": \"1\",\n  \"destinationAmount\": \"1\",\n  \"destinationAccount\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n  \"connectorAccount\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n  \"sourceExpiryDuration\": \"10\",\n  \"spsp\": {\n    \"destination_account\": \"wallet.bob._1nG4HIOEdgsGt03lQnSA6Bqv9Ju55vtA\",\n    \"shared_secret\": \"1pvx93ZEd8gTGHfiqKhD5w\",\n    \"maximum_destination_amount\": \"18446744073709552000\",\n    \"minimum_destination_amount\": \"1\",\n    \"ledger_info\": {\n      \"currency_code\": \"USD\",\n      \"currency_scale\": 9\n    },\n    \"receiver_info\": {\n      \"name\": \"\",\n      \"image_url\": \"https://wallet.example/api/users/bob/profilepic\",\n      \"identifier\": \"bob@wallet.example\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/receivers/:username",
    "title": "Get receiver details",
    "name": "GetReceiver",
    "group": "Receiver",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>receiver username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get receiver details",
        "content": "curl -X GET\nhttps://wallet.example/receivers/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"payee\",\n  \"account\": \"wallet.alice\",\n  \"currency_code\": \"USD\",\n  \"currency_scale\": 2,\n  \"name\": \"Alice Faye\",\n  \"image_url\": \"http://server.example/picture.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "Receiver"
  },
  {
    "type": "get",
    "url": "/users/:username",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get user</p>",
    "examples": [
      {
        "title": "Get user",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username",
    "title": "Create a user",
    "name": "PostUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Post user",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username",
    "title": "Update user",
    "name": "PutUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update user email",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"email\": \"alice@example.com\"\n    \"name\": \"Alice Faye\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username/resend-verification",
    "title": "Resend verification email",
    "name": "ResendVerificationEmail",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Resend verification email",
        "content": "curl -X POST\nhttps://wallet.example/users/alice/resend-verification",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username/verify",
    "title": "Verify user email address",
    "name": "VerifyUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>verification code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Verify user email address",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"code\": \"1f7aade2946667fac85ebaf7259182ead6b1fe062b5e8bb0ffa1b9d417431acb\"\n}'\nhttps://wallet.example/users/alice/verify",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1,\n  \"email_verified\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  }
] });