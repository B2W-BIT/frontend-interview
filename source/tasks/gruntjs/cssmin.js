module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
    site: {
      files: [{
        expand: true,
        cwd: '<%= projectDir %>/css/',
        src: ['*.css'],
        dest: '<%= projectDir %>/css/'
      }]
    }
  };
};
