module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      gameInterface: {
        src: [
          'lib/classes/game-interface-singleton.js',
          'lib/classes/game-state-class.js',
          'lib/classes/view-class.js',
          'lib/classes/graphic-class.js',
          'lib/classes/graphic-bitmap-class.js',
          'lib/classes/graphic-text-class.js',
          'lib/classes/bitmap-resource-class.js',
          'lib/classes/audio-resource-class.js'
        ],
        dest: 'dist/gameInterface.js'
      }
    }
  });

  grunt.registerTask('helpme', function () {
    grunt.log.subhead('GRUNT TASKS FOR GAME INTERFACE\n');
    grunt.log.writeln('make\t(default) make library');
  });

  // tasks are ...
  grunt.log.write('Grunt ...\n');
  grunt.log.muted = true; // to spammy
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('help', ['helpme']);
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('make', ['concat']);
};