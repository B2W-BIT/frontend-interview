module.exports = function(grunt, options){

  var projectDev = options.projectDev;

  return {
    options: {
      quiet: true,
      configFile: './.eslintrc'
    },
    site: ['<%= projectDev %>/js/{,*/,**/}*.js']
  };
};
