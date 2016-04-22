define({ "api": [
  {
    "type": "GET",
    "url": "/config",
    "title": "Get wallet config",
    "name": "GetConfig",
    "group": "Config",
    "version": "1.0.0",
    "description": "<p>Get wallet config</p>",
    "examples": [
      {
        "title": "Find path",
        "content": "curl -x GET\nhttp://wallet.example/config",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ledgerUri\": \"http://wallet.example/ledger\",\n  \"currencyCode\": \"USD\",\n  \"currencySymbol\": \"$\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Config"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Health check",
    "name": "health",
    "group": "Health",
    "version": "1.0.0",
    "description": "<p>Health check</p>",
    "examples": [
      {
        "title": "Health check",
        "content": "curl -x GET\nhttp://wallet.example/health",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  'status': 'OK'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/health.js",
    "groupTitle": "Health"
  },
  {
    "type": "POST",
    "url": "/payments/findPath",
    "title": "Find path",
    "name": "FindPath",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Find path</p>",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "source_amount",
            "description": "<p>source amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination_amount",
            "description": "<p>destination amount</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Find path",
        "content": "curl -x POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"destination\": \"bob@wallet.example\",\n    \"destination_amount\": \"10\"\n}'\nhttp://wallet.example/payments/findPath",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"sourceAmount\": \"10\",\n  \"destinationAmount\": \"10\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/payments",
    "title": "User payments history",
    "name": "GetPayments",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Get user payments history</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of payments</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get last 2 payments",
        "content": "curl -x GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttp://wallet.example/payments?page=1&limit=2",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"list\": [\n    {\n      \"id\": \"15a3cbb8-d0f3-410e-8a59-14e8dee14abd\",\n      \"source_user\": 1,\n      \"source_account\": \"http://wallet.example/ledger/accounts/alice\",\n      \"destination_user\": 2,\n      \"destination_account\": \"http://wallet.example/ledger/accounts/bob\",\n      \"transfers\": \"http://wallet.example/ledger/transfers/3d4c9c8e-204a-4213-9e91-88b64dad8604\",\n      \"state\": null,\n      \"source_amount\": \"12\",\n      \"destination_amount\": \"12\",\n      \"created_at\": \"2016-04-19T20:18:18.040Z\",\n      \"completed_at\": null,\n      \"updated_at\": \"2016-04-19T20:18:18.040Z\",\n      \"sourceUserUsername\": \"alice\",\n      \"destinationUserUsername\": \"bob\"\n    },\n    {\n      \"id\": \"e1d3c588-807c-4d4f-b25c-61842b5ead6d\",\n      \"source_user\": 1,\n      \"source_account\": \"http://wallet.example/ledger/accounts/alice\",\n      \"destination_user\": 2,\n      \"destination_account\": \"http://wallet.example/ledger/accounts/bob\",\n      \"transfers\": \"http://wallet.example/ledger/transfers/d1fa49d3-c955-4833-803a-df0c43eab044\",\n      \"state\": null,\n      \"source_amount\": \"1\",\n      \"destination_amount\": \"1\",\n      \"created_at\": \"2016-04-19T20:15:57.055Z\",\n      \"completed_at\": null,\n      \"updated_at\": \"2016-04-19T20:15:57.055Z\",\n      \"sourceUserUsername\": \"alice\",\n      \"destinationUserUsername\": \"bob\"\n    }\n  ],\n  \"totalPages\": 5\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
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
            "field": "destination_account",
            "description": "<p>destination account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_amount",
            "description": "<p>source amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination_amount",
            "description": "<p>destination amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>path</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Make a payment with the destination_amount",
        "content": "curl -x PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -d\n'{\n    \"destination_account\": \"bob@wallet.example\",\n    \"destination_amount\": \"1\"\n}'\nhttp://wallet.example/payments/9efa70ec-08b9-11e6-b512-3e1d05defe78",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
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
        "content": "curl -x GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttp://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"account\": \"http://wallet.example/ledger/accounts/alice\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
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
        "content": "curl -x POST -d\n'{\n    \"password\": \"alice\"\n}'\nhttp://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"bob\",\n  \"account\": \"http://wallet.example/ledger/accounts/bob\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  }
] });
