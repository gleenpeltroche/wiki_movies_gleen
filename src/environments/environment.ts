export const environment = {
  production: false,
  identityApi: {
    baseUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:',
    signInUrl: 'signInWithPassword',
    signUpUrl: 'signUp',
    apiKey: '?key=AIzaSyDBuXSetADJSpBBOxT-7wsVMT3fVurlE3U',
  },
  localStorage: {
    tokenKey: 'WM_TOKEN',
    userKey: 'WM_USER',
  },
  jwtAuthorization: {
    authText: 'Authorization',
    tokenText: 'Bearer',
  },
};
