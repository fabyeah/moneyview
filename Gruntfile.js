module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {

			sass: {
				files: [
					'css/*.{scss,sass}',
					'!css/__imports.scss'
				],
				tasks: ['sass:dist','newer:autoprefixer']
			},

			livereload: {
				files: [
					'*.html',
					'modules/*.php',
					'templates/*.php',
					'control/*.php',
					'js/concat/built.min.js',
					'css/*.css',
					'img/*.{png,jpg,jpeg,gif,webp,svg}'
				],
				options: {
					livereload: true
				}
			}

		}, // end watch task


		sass: {
			options: {
				// sourceMap: true
			},
			dist: {
				files: {
					// main app
					'css/main.css': 'css/main.scss'
				}
			}
		},



		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9'],
				map: true
			},
			files: {
				expand: true,
				src: 'css/*.css',
			}
		},

		jshint: {
		     files: ['gruntfile.js', 'ediscio_2014/js/repetico2014/*.js'],
		     options: {
		         globals: {
		              jQuery: true,
		              console: true,
		              module: true
		         }
		     }
		},



		/*
		newer: {
			options: {
				override: function(detail, include) {
				  	if (detail.task === 'sass') {
				    	checkForModifiedImports(detail.path, detail.time, include);
				  	} else {
				    	include(false);
				  	}
				}
			}
	    }
	    */



	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['sass:dist', 'newer:autoprefixer', 'watch']);
	grunt.registerTask('all', ['sass:dist', 'autoprefixer']);
	grunt.registerTask('hint', ['jshint']);

};