## 使用
```bash
  git clone https://github.com/HuangZhiming-the-Great/create-simple-react-.git
  cd create-simple-react-
  yarn
  yarn build
  yarn dev
```
接下来打开浏览器，网址栏输入：“localhost:9000”。就可以看到hello world!了。

## 功能
### 已经有的功能：
1. @babel/react 和 @babel/env
2. webpack热加载
   - css-loader 
   - url-loader
3. 
## 这个是一个网上自学的项目
- 网上资料：
  [一篇自己搭建react脚手架的文章](https://blog.csdn.net/design_lu/article/details/94856399)
## 原教程里有的问题
1. babel编译报错
  
   [这篇文章](https://blog.csdn.net/weixin_41779718/article/details/105149338)解决了问题。
2. webpack编译遇到问题
   
   这个[总结性文章](cnblogs.com/jeacy/p/13864454.html)可以很好的解决问题。

## 进一步的优化
- 这里有一个[文章](https://segmentfault.com/a/1190000023211627),讲的更加的详细，提到了生产环境和开发环境。可以为以后进一步的增强内容做参考。
  1. 将开发环境的设置加入了进来。

- 加入代码格式检查工具eslint
  主要参考[这篇文章](https://blog.csdn.net/weixin_34153893/article/details/88835565)。

  我做的工作：
  1. 首先是安装各种eslint的modules：
  ```bash
      yarn add --dev eslint eslint-config-standard eslint-plugin-node eslint-plugin-promise eslint-plugin-import
   ```
   2. 然后在package.json里的"script"中加入：
   ```json
      "lint": "eslint --ext .js --ext .jsx src/",
    "lint-fix": "eslint --fix --ext .js --ext .jsx src/",
   ```
   3. 在更目录下新建文件.eslintrc，内容是：
   ```json
      {
         "extends": "standard"
      }
   ```
   4. 
   