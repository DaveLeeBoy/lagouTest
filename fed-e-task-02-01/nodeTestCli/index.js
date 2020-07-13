#!/usr/bin/env node

const commander = require('commander');


// 定义版本号
commander
        .version(require('./package.json').version)
        .option('-v, --version', '查看版本号')

// 定义init命令
commander
        .command('init <name>')
        .option('-d, --dev', '获取模版')
        .description('创建项目')
        .action(function (name, option) {
          console.log(name)
          console.log(option.dev)
        })
        
commander.parse(process.argv)