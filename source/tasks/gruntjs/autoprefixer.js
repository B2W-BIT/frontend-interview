module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
	  site: {
      files: [{
        options: {
            browsers: ['last 2 version', 'ie 9']
        },
        expand: true,
        cwd : '<%= projectDir %>/css/',
        src : ['*.css'],
        dest: '<%= projectDir %>/css/'
      }]
    }
  };
};
