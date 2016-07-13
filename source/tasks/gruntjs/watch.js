module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    site: {
      options: {
        livereload: true
      },
      files: [
        '<%= projectDev %>/html/{,*/, **/}*.html',
        '<%= projectDev %>/scss/{,*/, **/, **/**/*,**/*}*.{scss,sass}',
        '<%= projectDev %>/js/{,*/,**/}*.js',
        '<%= projectDir %>/css/{,*/, **/}*.css'
      ],
      tasks: ['dev']
    }
  };
};
