module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      outputStyle: 'compressed'
    },
    site: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>/scss/',
        src: ['*.scss'],
        dest: '<%= projectDir %>/css/',
        ext: '.min.css'
      }]
    }
  };
};
