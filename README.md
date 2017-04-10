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
## Reactive Component 生命周期 ##
![](http://i.imgur.com/nA0Ts5v.jpg)

代码：

    export default class xxx extends Component {
    constructor(props){
    super(props);
    this.state = {
    };
    }
    
    componentWillMount (){
       // 在初始化渲染执行之前立刻调用
    }
    
    componentDidMount(){
    //在初始化渲染执行之后立刻调用一次
    }
    
    componentWillReceiveProps( nextProps){
    // 在组件接收到新的 props 的时候调用，
    // 也就是父组件修改子组件的属性时触发。
    // 在初始化渲染的时候，该方法不会调用。
    // 可以用于更新 state 来响应某个 prop 的改变。
    }
    
    shouldComponentUpdate( nextProps,  nextState){
    return true;
    // 在接收到新的 props 或者 state，将要渲染之前调用,
    // 如果确定新的 props 和 state 不会导致组件更新，
    // 则此处应该 返回 false。返回true将进行渲染。
    }
    
    componentWillUpdate( nextProps,  nextState){
    // 在接收到新的 props 或者 state
    // 并且shouldComponentUpdate返回true时调用
    }
    
    
    componentDidUpdate( prevProps,  prevState){
    // 在组件的更新已经同步到 DOM 中之后立刻被调用
    }
    
    componentWillUnmount(){
    // 在组件从 DOM 中移除的时候立刻被调用。
    // 在该方法中执行任何必要的清理，
    // 比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。
    }
    
    render() {
    return <view/>;
    }
    }


## react native class定义的几种方式 ##
# view组件封装 #
    
    //方式一
    export default class className extends Component{}
    
    //方式二
    class className extends Component{
    
    }
    export.module = className

	//方式三
	const className = React.createClass(
	{ 
	
		 render() {
			 return (
			 <View/>
			 );
		 }
	});
	export.module = className

# 组件内部的代码结构 #
react-navite 的特点就是组件
内部既包含了js的控制逻辑也包含了View的视图组装

    export default class xxx extends Component {
    constructor(props){
    	super(props);
    		this.state = {
    				//定义一个属性name 用来接收父组件传来的数据
    				name:null;
    		};
    	}
    	customfnc =（）=>{
    		 // 用属性的方式定义自己定方法
    		}
    	   	
		// 构建组件的方法返回一个View		
    	render() {
    		return (
    				<View>
    					//...
    				</View>);
    	}
    }

## 打包发布 ##

# Android #

1.debug模式下react Native 项目会在自己的电脑上发布一个本地服务让app在服务上动态获取代码进行渲染。所以APP在debug模式下安装到真机上流畅性会比较差

2.release模式下的用户体验与原生应用接近 很流畅

3.release打包方法
  
- 在项目路径下执行 mkdir -pandroid/app/src/main/assets
- 紧接着运行以下命令，进行生成 inde.android.bundle 文件

    react-native bundle--platform android --dev false --entry-file index.android.js \
      --bundle-outputandroid/app/src/main/assets/index.android.bundle \
      --assets-dest android/app/src/main/res/

- Mac下cd android && ./gradlew assembleRelease
- Windows下 android && gradlew assembleRelease
- 将资源管理打开到工程路径的android/app/build/outputs/apk下
- 这里生成的release-unsigned.apk文件需要签名才能安装到真机上



# iOS打离线包 #

1、生成bundle
在项目根目录中执行命令命令：

- mkdir .ios/bundle
- react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle

2、将bundle以文件形式添加到Xcode打开的项目中（用Add Files to “项目”）

3、更改AppDelegate.m中的资源地址（jsCodeLocation）代码：

    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];

4、使用Xcode按iOS一般流程打包。
# ReactNative 学习入门第二课课 在genymotion下调试React for Android #

- ![](http://i.imgur.com/Hq0NmKV.png) 
- 点击右侧的红圈出弹出菜单 选中Debug JS Remotely 点击重新打开选项 会弹出一个页面
- ![调试页面](http://i.imgur.com/IkAHUAy.png)
- 这样我就是可以想调试一个web项目一样调试我们的APP了

# ReactNative 学习入门第三课 经常遇到的那些坑 #


## npm命令 ##

- npm 命令后面的几种情况 -g与没有-g区别在于是否将安装的结果保存到package.json中
 
- react-native 版本问题 react-native经常会出现有些依赖安装后会报错，可以尝试使用react-native upgrade -g 更新react-native版本来解决

- 执行npm install 命令时请注意 有的时候有些依赖还是无法被下载，这时候需要针对没有被下载下来的包单独下载

- 大家在使用官方提供的依赖的时候请注意说明文档上面有标记为iso 或标记为Android表示只有在某一平台上才可以用

