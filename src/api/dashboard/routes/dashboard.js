module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/dashboard',
     handler: 'dashboard.find',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
