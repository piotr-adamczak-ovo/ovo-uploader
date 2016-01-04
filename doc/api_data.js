define({ "api": [  {    "type": "post",    "url": "/api/upload",    "title": "Upload photo",    "name": "upload",    "group": "OVO_Photo_Meter_API",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Image",            "optional": false,            "field": "image",            "description": ""          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "result",            "description": "<p>Result of operation</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Bad request</p>"          }        ],        "500": [          {            "group": "500",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Server error</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/api.js",    "groupTitle": "OVO_Photo_Meter_API"  }] });
