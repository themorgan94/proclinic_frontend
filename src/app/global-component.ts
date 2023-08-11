export const GlobalComponent = {
  // Api Calling
  API_URL : 'https://1izszgnmbe.execute-api.us-east-2.amazonaws.com/dev/api/',
  headerToken : {'Authorization': `Bearer ${localStorage.getItem('token')}`},

  // Auth Api
  AUTH_API:"https://1izszgnmbe.execute-api.us-east-2.amazonaws.com/dev/api/auth/",
  
  // Users Api
  users: 'users',
  userId: 'users/',
  userDelete: 'users/'
}