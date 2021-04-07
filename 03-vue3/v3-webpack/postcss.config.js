module.exports = {
    "plugins": {
      // to edit target browsers: use "browserlist" field in package.json
      "postcss-pxtorem": {
        rootValue: 16, // 结果为：设计稿元素尺寸/100，比如元素宽1920px,最终页面会换算成 19.2rem
        propList: ['*'],
        minPixelValue: 1,
        selectorBlackList: ['.threems'] // 过滤掉.threems-开头的class，不进行rem转换
      }
    }
}