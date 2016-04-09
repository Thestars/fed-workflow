# Front End Workflow.

# 

```bash
| - fed-workflow
	| - build 构建目录
	| - src  开发源码
		| - fonts 字体文件
		| - html_modules html模块
		| - images 图片模块
		| - script js文件
		| - sass scss文件
		| - templates 模板文件
	| - public 静态公共文件
	| - node_modules js依赖模块脚本
	| - app.js 服务器端测试主程序模块
	| - config.js 服务器端测试Api地址配置
	| - gulpfile.js gulp配置文件
	| - bower.json bower配置文件
	| - README.md 项目说明文件

```
# Init

* 运行`npm install`初始化Node依赖库
* 运行`bower install` 初始化前端库

#运行

* 在`根`目录下运行`gulp`命令，打开浏览器通过：127.0.0.1:3000访问网页

* 在`根`目录下运行`gulp dist`命令，打开浏览器通过：127.0.0.1:3000访问`压缩合并构建版本`网页

