// 加载https模块，只要有获取网站链接的操作，都需要
const https = require('https')
// 加载cheerio
const cheerio = require('cheerio')
const fs = require('fs')

https.get('https://movie.douban.com/top250', (res) => {
    let html = ''
    // res.on 类似于addEventListener, 用于监听数据
    res.on('data', (chunk) => {
        html = html + chunk 
    })
    // 监听res数据加载完成，就执行我需要的效果
    res.on('end', () => {
        // console.log(html);
        const $ = cheerio.load(html)
        // 用一个数组来保存我们爬到的数据
        let allFilms = []
        
        $('li .item').each(function() {
            const title = $('.title', this).text()
            const pic = $('img', this).attr('src')
            const star =$('rating_num', this).text()
            allFilms.push({title,pic,star})
        })

        fs.writeFile('./files.json', JSON.stringify(allFilms), (err) => {
            if (!err) {
                console.log('文件写入完成');
            }
        })
    })
})