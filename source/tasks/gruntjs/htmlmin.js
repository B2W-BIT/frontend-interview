module.exports = function(grunt, options){

	var projectDir = options.projectDir;
  var projectDev = options.projectDev;

	return {
		site: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        '<%= projectDir %>/index.html': '<%= projectDev %>/html/index.html',
        '<%= projectDir %>/angular/index.html': '<%= projectDev %>/html/angular/index.html',
        '<%= projectDir %>/react/index.html': '<%= projectDev %>/html/react/index.html'
      }
    }
  }
};
