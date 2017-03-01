# ReactNative 学习入门第一课 环境搭建 #
## 1.安装node.js ##
首先去官网下载node.js https://nodejs.org/zh-cn/
这里我使用了最新版的V7.6.0版本
将下载好的安装包直接双击安装即可
## 2. 设置npm加速##
在这里我们打开windows命令窗口 或者苹果的控制台窗口
输入如下命令 :
'npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global'

'npm config set disturl https://npm.taobao.org/dist --global'
做这两步的目的是讲npm的包管理的下载地址映射到淘宝提供的npm库 从而实现包下载加速的目的。
## 3.Yarn、React Native的命令行工具（react-native-cli）##
在控制台输入如下命令：

npm install -g yarn react-native-cli

执行此命令也是为了下载加速,Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

## 4.编译环境安卓版本需要下载并配置AndroidStudio##
下载地址：[https://dl.google.com/dl/android/studio/install/2.2.3.0/android-studio-bundle-145.3537739-windows.exe](https://dl.google.com/dl/android/studio/install/2.2.3.0/android-studio-bundle-145.3537739-windows.exe "点击下载")
使用mac的小伙伴可以直接使用xcode编译ios版本


## 5. 代码编辑器##
代码编辑器推荐两款比较流行的代码编辑器webStorm和sublime text3

## 6.测试环境安装##

iso可以使用xcode提供的手机模拟器

Android用户推荐使用Genymotion或海马玩模拟器，Androidstudio自带的模拟器速度比较慢

[https://www.genymotion.com/download](https://www.genymotion.com/download "genymotion下载")（genymotion需要依赖VirtualBox虚拟机，下载选项中提供了包含VirtualBox和不包含的选项，请按需选择）。
打开Genymotion。如果你还没有安装VirtualBox，则此时会提示你安装。
创建一个新模拟器并启动。
启动React Native应用后，可以按下F1来打开开发者菜单。

# 初识ReactNavtie #
## 1.创建一个reactNative项目 ##

打开命令终端输入如下命令

1. react-native init 项目名称
2. cd 项目名称
3. react-native run-android/react-native run-ios

在模拟器中就可以看见你创建的项目了尝试修改index.android.js/index.ios.js中的代码重新运行命令3就可以看见修改的效果了


# 了解ReactNavtie项目的机构 #
![项目结构图](http://i.imgur.com/xTgaQzW.jpg)

项目创建后会生成一个 

1. android文件夹这个文件夹是一个android的项目工程 可以使用AndroidStudio打开此工程
2. ios文件则是一个xcode项目可以使用xcode编译器打开
3. 这里面有两个入口文件分别是iso和Android项目启动时的入口index.ios.js和index.android.js
4. 下方有一个package.json文件 这个文件中管理了该reactnative项目所依赖的js依赖库 当我们在这个文件路径下执行 npm install 命令时系统会下载package.js中涉及到的依赖库到node_modules文件夹中。
