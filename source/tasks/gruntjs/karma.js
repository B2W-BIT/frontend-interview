module.exports = function(grunt, options){

  var continuousIntegrationMode = grunt.option('ci') || false;

  return {
    site: {
      configFile: './karma.conf.js',
      singleRun: continuousIntegrationMode,
      reporters: continuousIntegrationMode ? ['teamcity'] : ['progress']
    }
  };

};
