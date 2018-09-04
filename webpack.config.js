    const htmlWebpackPlugin = require('html-webpack-plugin')
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    const path = require('path')
    module.exports = {
        entry:{ //main是默认入口,也可以是多入口
            main:'./src/main.js'
        },
        //出口
        output:{
            filename:'build.js', //指定js文件
            path: path.join(__dirname,'dist')          //最好是绝对路径
            //代表当前目录的上一级的dist
        },
        module:{
            //rules里面配置第三方插件，定义匹配规则
            rules:[       //require('./a.css||./a.js')
                {test:/\.css$/,
                 loader:'style-loader!css-loader',
                 //顺序是反过来的2!1，从后往前倒着来调用
                },
                {
                 test:/\.(jpg|svg|png|gif)$/,
                 loader:'url-loader?limit=4096&name=[hash:8]-[name].[ext]',
                 //图片会被解析成base64编码的二进制数据，设置限制。小图片编码，大图片还是按原格式加载
                 //顺序是反过来的2!1 
                 //[name].[ext]内置提供的，原文件名.原格式,aa.img而不是默认转成hash值的img
                 //   hash值是32位，为了不被后面的重名文件替换，在文件名前面加上hash值
                 // options:{
                 //    limit:4096,
                 //    name:'[name].[ext]'
                 // }
                },
                {
                    test:/\.(ttf|svg|eot|woffs|woff)$/, //处理字体图标
                    loader:'url-loader'
                },
                {
                    test:/\.less$/,
                    loader:'style-loader!css-loader!less-loader!'
                },

                {//处理ES6的js
                    test:/\.js$/,
                    loader:'babel-loader',
                    //排除 node_modules下的所有js文件，不需要处理
                    exclude:/node_modules/,

                },
                {
                    test:/\.vue$/,
                    loader:'vue-loader'
                }
            ]
        },
        mode:"development",
        devServer:{
            contentBase:path.join(__dirname, 'dist')
        },
        plugins:[
            //配置所有插件，插件的执行顺序是依次执行的
            new htmlWebpackPlugin({    //新生成一个html页面的插件
                template:'./src/index.html',   //指定模板文件路径，旧页面
                filename:'index.html'  //指定内存中生成的新页面
            }),
                //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
            new VueLoaderPlugin()
        ],
        resolve:{
            alias:{ //修改vue导入时的包的路径
                'vue$':'vue/dist/vue.js'
            }
        }




    }
