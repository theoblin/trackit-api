export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: 'AIzaSyBozM4_Aq_FnGo1Df6DrUg31dm8UZ-Y1ic',
    authDomain: 'trackit-6d281.firebaseapp.com',
    projectId: 'trackit-6d281',
    storageBucket: 'trackit-6d281.appspot.com',
    messagingSenderId: '798415993733',
    appId: '1:798415993733:web:d8a4f1f1000288d66862ec',
    measurementId: 'G-JJE4Z3MMRM',
  },

  firebase2: {
    type: 'service_account',
    project_id: 'trackit-6d281',
    private_key_id: '9750c1822d6adbf77f49c9921e676dbe6c160a94',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqbw9OuaVZohHD\nWi/ojhuV65EYkU2AW5MgPElxe0fKJTtNTFHAIbdSiMxv6g2ElwwybMk8Nq7uSsMB\nA97Xwc1quLyvbhe5D1t/3aJyaa8HjORhUDV7uDVOS4ABz84BsT5dYVm+1iDLuc2z\nJS9PdWEsKj7f4zU3Kn3FwrpKEMfGIdkV7UBtRQGUeKtiKcmdhYE/cmEj44kxROo5\nQVHEwQ3seHVFMuRXmnbLlZCNDyDv1IC55/n2B3oy4DbMaN8Youw+njLaeiDGnibt\nEaLAuN3vJ4bj0hvZQTcQ2IXpNOoqFroeOTNIvvO/7oOj/fpBfi3e4OOu8wZCQygv\n35N2l8TPAgMBAAECggEATxpb1vSoL3le2DYYLU4jtIoQnn/2IiCeoSQKDF8lG0f7\nha1p9gxQC0EN7dWKb6MxmIfQQJ+6wkO1zVdQCwDax/E1NhEZdp2PoMGr/4FYqN72\nMsppAGKnbw7wuyaJXVS39txTrJSyxQuYUtDr6+u1bauv4fcRAGk61dpC31R5fFX/\ndr/5v4JWHtVhjWWKzoyBhDp8GeeplhrM0Mp6b9KgTPrKJlajdhctf3l+lp2aCaCB\ntrSK1mPw43pN1rU7bAwWBkQBiCBy3aqR+xyrNUwOcM/Hez6VE+HHwNtqCnxirCvp\nSQ4k4xU/6CQRcHljudI/fviXLrMBP5tudRQbBMm5gQKBgQDn9aG2rbRlFX5dvsqD\nkNI3asnqFHVFUmalUkr4RwlpAO1Yv7uL3iUjq/BAwAVA8ERqpnwEQMlmtRnuN8v3\njvHg8lV9vxsu5Z8WLKixPU75J+Py/ZNkWNr2k73BHkcvggHGsOo0JDrYsUDeXW2d\nOqpvUCbrlab1IK2j2fwrEIgTgQKBgQC8GQYjVwsVN3cYdlT/++HTRQTFcg/vs7k3\nq9CfO9Fja4lNA7PilAorNnIAdMnwop0mR4yvlJs2NXcPII6Yhi6UZjW7CPb85zVC\np2qv5HeVt7aTBzK3f2YqptSpnhrCOw2priS3450BUCXwEwdZnLQDOTij41SxqCL8\nA45lFnnATwKBgGaFdFIveDntRArfFtcLnT4NHu0s2aAoCWIseyI9E3WriTvekmAB\ncVzQ08FqnWfUSgjxSIMAt4ODq9BULPxf25xWv15ypusVZjkAyBZ+SHdrIB734LtL\nYov1RLskTMY8qdhNvVYKZU/9F/SwSpBhq47DWFBrtn1FUjnHUOMfzWUBAoGAUAkd\n0X/CGX8GUARZ2qpkxq7BfvovycDheMzE8lxTlkg1ne2LZ0eyo/yAuaz4GEo5MAaV\n2EgVWxWY2Xjy8/d0bnSnPDRuU+JViU0PWlSOhcgsCZewft/YqyFdr+a0YB0cjSyq\nNwzEy8A8xFB0ei7xccWxUhry+L0gVbd1qZHMsIUCgYAv7VEXgMuNRpm4JTyLp2oI\nqI5Vfkf+s8bm9AIAhxKk+iWPLHZWPXmofRqo7OqezDXamz/MtTXymEsQ2rcQVcbX\nCLk3Z3/7ZQlUsWg+yevU4z6JbZOboVvxOFe6mj+UX2N9BVYUdfsXOqFWSJ0oGAP6\nTrRwpusW0lI8f4EAxLyEWw==\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-9lees@trackit-6d281.iam.gserviceaccount.com',
    client_id: '101326400330715852358',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9lees%40trackit-6d281.iam.gserviceaccount.com',
  },

  AUTHSCREENLINK: 'https://www.strava.com/oauth/authorize?client_id=60685&redirect_uri=http://localhost:5000/api/v1/strava/responsecode&response_type=code&scope=activity:read',
  TOKENLINK: 'https://www.strava.com/oauth/token?',
  CLIENTID: 60685,
  CLIENTSECRET: 'f67c137af06b54e2c23f8c072facfd1cd8f7a3f0',
  ACTIVITIESLINK: 'https://www.strava.com/api/v3/athlete/activities?access_token=',
  DATABASEURL: ' https://trackit-6d281firebaseio.com',
};
