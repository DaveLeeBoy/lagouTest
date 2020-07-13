// grunt 的入口
onst sass = require("sass")
const loadGruntTasks = require("load-grunt-tasks")
const browserSync = require("browser-sync")
const bs = browserSync.create()

module.exports = grunt => {
    grunt.initConfig({
        //sass转化为css功能
        sass: {
            options: {
                sourceMap: true, //设置后会生成相应的sourceMap文件
                implementation: sass
            },
            main: {
                files: {
                      // 目标文件：源文件
                    'dist/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        //js转化功能
        babel: {
            options: {
                sourceMap: true,//设置后会生成相应的sourceMap文件
                presets: ["@babel/preset-env"]
            },
            main: {
                files: {
                    // 目标文件：源文件
                    'dist/js/app.css': 'src/js/app.js'
                }
            }
        },
        web_swig: {
            options: {
                swigOptions: {
                    //缓存设置为false
                    cache: false
                },
                getData: function (tpl) {
                    //模板文件的数据
                    return { myGruntTitle: 'hello,grunt-web-swig' };
                }
            },
            main: {
                expand: true,
                cwd: 'src/',//源文件文件夹
                src: "**/*.html",//后缀名匹配
                dest: "dist/"//目标文件夹
            },
        },
        //监视功能
        watch: {
            js: {
                //文件地址
                files: ['src/js/*.js'],
                //执行的任务
                tasks: ['babel']
            },
            css: {
                //文件地址
                files: ['src/scss/*.scss'],
                //执行的任务
                tasks: ['sass']
            },
            html: {
                //文件地址
                files: ['src/*.html'],
                //执行的任务
                tasks: ['web_swig', 'bs-reload']
            }
        },
        //清除功能
        clean: {
            //所要清除的文件路径
            files: 'dist/**'
        }
    })

    // grunt.loadNpmTasks('grunt-sass')
    loadGruntTasks(grunt) //自动加载所有的grunt插件
    grunt.registerTask('default', ['clean', 'sass', 'babel', 'watch'])
    grunt.registerTask('bs-reload', function () {
        bs.reload()
    })
    grunt.registerTask('bs', function () {
        const done = this.async()
        bs.init({
            server: {
                port: 8080,
                // baseDir: 'dist',
                baseDir: ["dist", "public", "src"],
                files: 'dist/**',
                // open:false,
                routes: {
                    '/node_modules': "node_modules"
                }
            }
        })
    })
    grunt.registerTask('compile', ['clean', 'sass', 'babel'])
}