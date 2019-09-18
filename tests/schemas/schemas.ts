import { type } from "os";

export class Schemas {
    
    boardSchema = {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
             id: {
                 type: "string"
             }
        }

    };
    
    listSchema = {
        type: "object",
        properties: {
            id: {
                type: "string"
             },
            name: {
                type: "string"
            },
            closed: {
                type: "string"
            },
            idBoard: {
                type: "string"
            },
            pos: {
                type: "integer"
            }
         }
    };

    mainOpenBoardSchema = {
        "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "activityBlocked": {
      "type": "boolean"
    },
    "avatarHash": {
      "type": "string"
    },
    "avatarUrl": {
      "type": "string"
    },
    "bio": {
      "type": "string"
    },
    "bioData": {
      "type": "null"
    },
    "confirmed": {
      "type": "boolean"
    },
    "fullName": {
      "type": "string"
    },
    "idEnterprise": {
      "type": "null"
    },
    "idEnterprisesDeactivated": {
      "type": "array",
      "items": {}
    },
    "idMemberReferrer": {
      "type": "string"
    },
    "idPremOrgsAdmin": {
      "type": "array",
      "items": {}
    },
    "initials": {
      "type": "string"
    },
    "memberType": {
      "type": "string"
    },
    "nonPublic": {
      "type": "object"
    },
    "nonPublicAvailable": {
      "type": "boolean"
    },
    "products": {
      "type": "array",
      "items": {}
    },
    "url": {
      "type": "string"
    },
    "username": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "aaEmail": {
      "type": "null"
    },
    "aaId": {
      "type": "null"
    },
    "avatarSource": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "gravatarHash": {
      "type": "string"
    },
    "idBoards": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    },
    "idOrganizations": {
      "type": "array",
      "items": {}
    },
    "idEnterprisesAdmin": {
      "type": "array",
      "items": {}
    },
    "limits": {
      "type": "object",
      "properties": {
        "boards": {
          "type": "object",
          "properties": {
            "totalPerMember": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "string"
                },
                "disableAt": {
                  "type": "integer"
                },
                "warnAt": {
                  "type": "integer"
                }
              },
              "required": [
                "status",
                "disableAt",
                "warnAt"
              ]
            }
          },
          "required": [
            "totalPerMember"
          ]
        },
        "orgs": {
          "type": "object",
          "properties": {
            "totalPerMember": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "string"
                },
                "disableAt": {
                  "type": "integer"
                },
                "warnAt": {
                  "type": "integer"
                }
              },
              "required": [
                "status",
                "disableAt",
                "warnAt"
              ]
            }
          },
          "required": [
            "totalPerMember"
          ]
        }
      },
      "required": [
        "boards",
        "orgs"
      ]
    },
    "loginTypes": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    },
    "marketingOptIn": {
      "type": "object",
      "properties": {
        "optedIn": {
          "type": "boolean"
        },
        "date": {
          "type": "string"
        }
      },
      "required": [
        "optedIn",
        "date"
      ]
    },
    "messagesDismissed": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "count": {
              "type": "integer"
            },
            "lastDismissed": {
              "type": "string"
            },
            "_id": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "count",
            "lastDismissed",
            "_id"
          ]
        }
      ]
    },
    "oneTimeMessagesDismissed": {
      "type": "array",
      "items": [
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    },
    "prefs": {
      "type": "object",
      "properties": {
        "privacy": {
          "type": "object",
          "properties": {
            "fullName": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "fullName",
            "avatar"
          ]
        },
        "sendSummaries": {
          "type": "boolean"
        },
        "minutesBetweenSummaries": {
          "type": "integer"
        },
        "minutesBeforeDeadlineToNotify": {
          "type": "integer"
        },
        "colorBlind": {
          "type": "boolean"
        },
        "locale": {
          "type": "string"
        }
      },
      "required": [
        "privacy",
        "sendSummaries",
        "minutesBetweenSummaries",
        "minutesBeforeDeadlineToNotify",
        "colorBlind",
        "locale"
      ]
    },
    "trophies": {
      "type": "array",
      "items": {}
    },
    "uploadedAvatarHash": {
      "type": "string"
    },
    // "uploadedAvatarUrl": {
    //   "type": "string"
    // },
    "premiumFeatures": {
      "type": "array",
      "items": {}
    },
    "isAaMastered": {
      "type": "boolean"
    },
    "ixUpdate": {
      "type": "string"
    },
    "idBoardsPinned": {
      "type": "null"
    },
    "boards": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "closed": {
              "type": "boolean"
            },
            "idOrganization": {
              "type": "null"
            },
            "pinned": {
              "type": "null"
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "closed",
            "idOrganization",
            "pinned",
            "id"
          ]
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "closed": {
              "type": "boolean"
            },
            "idOrganization": {
              "type": "null"
            },
            "pinned": {
              "type": "null"
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "closed",
            "idOrganization",
            "pinned",
            "id"
          ]
        }
      ]
    }
  },
  "addtionalProperties": false,
  "required": [
    "id",
    "activityBlocked",
    "avatarHash",
    "avatarUrl",
    "bio",
    "bioData",
    "confirmed",
    "fullName",
    "idEnterprise",
    "idEnterprisesDeactivated",
    "idMemberReferrer",
    "idPremOrgsAdmin",
    "initials",
    "memberType",
    "nonPublic",
    "nonPublicAvailable",
    "products",
    "url",
    "username",
    "status",
    "aaEmail",
    "aaId",
    "avatarSource",
    "email",
    "gravatarHash",
    "idBoards",
    "idOrganizations",
    "idEnterprisesAdmin",
    "limits",
    "loginTypes",
    "marketingOptIn",
    "messagesDismissed",
    "oneTimeMessagesDismissed",
    "prefs",
    "trophies",
    "uploadedAvatarHash",
    // "uploadedAvatarUrl",
    "premiumFeatures",
    "isAaMastered",
    "ixUpdate",
    "idBoardsPinned",
    "boards"
  ]
    }
}