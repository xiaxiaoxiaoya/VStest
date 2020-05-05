const path = require('path');
//__dirname 当前文件所在的目录 : layout
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //是否使用eslint
    lintOnSave: false,
    devServer: {
        port: 6262, // 配置端口号
        open: true, //配置自动启动浏览器
        //配置跨域
        proxy: {
            //请求是可以找到4000服务器 可是4000服务没有对应的接口  devserve会主动返回index.html
            '/6262': {//本地localhost启动的端口
                target: 'https://m.you.163.com',
                changeOrigin: true, //允许跨域
                secure: true,//不是https协议不需要配置，或者改为false  所以这个是为了解决配置https的
                pathRewrite: {
                    "^/6262": ""
                }
            },
        }

    },
    configureWebpack: { //配置原生webpack，在此配置别名
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
                'common': resolve('src/common'),
                
            }
        },
        module: { //配置sass-loader
            rules: [{
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass','less']
            }]
        },

    },
    // 配置使用stylus全局变量
    chainWebpack: config => {
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type =>
            addStyleResource(config.module.rule("stylus").oneOf(type))
        );
    },
}
// ====定义函数addStyleResource===
function addStyleResource(rule) {
    rule
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
            patterns: [path.resolve(__dirname, "./src/common/stylus/style.styl")] //后面跟着的路径是你自己放公共stylus变量的路径
        });
}