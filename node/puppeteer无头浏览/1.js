const puppeteer = require('puppeteer');
const $ = require('cheerio');
const { resolve } = require('path');
const { rejects } = require('assert');

async function run(){
  const browser = await puppeteer.launch();   //连接到浏览器
  const page = await browser.newPage();       //浏览器加载新页面
  await page.goto('https://juejin.cn/books',{
    waitUntil: 'networkidle0'
  });

  // 截图
  // await page.screenshot({
  //   path: './jujin.png'
  // })

  // 在获取html代码前先执行几次下拉操作
  await page.evaluate(function(){
    function req(){
      return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
          document.querySelector('.copy-right').scrollIntoView()
          resolve()
        },1500)
      })
    }
    async function run(){     //async函数也有一个promise
      for(let i = 0;i < 3;i++){
        await req();
      }
    }
    // async 执行完，返回就是 promise
    // run() 这个 promise 只有三次下拉加载完成，才会resolve
    // page.evaluate 将等待 promise 完成
    return run()
  })

  // 第一页数据
  const html = await page.content();
  // console.log(html);
  const books = $('.info',html);    //books是一个数组
  let booksInfo = []
  books.each(function(){
    const book = $(this);
    let name = $(book.find('.title')).text().trim();
    let auth = $(book.find('.author-name')).text().trim();
    // console.log(name,auth);
    booksInfo.push({
      name,auth
    })
  })
  const fs = require('fs');
  // JSON.stringify(booksInfo,null,2)   可格式化样式  第二个参数还可为函数对样式进行定制
  fs.writeFile('./books.json',JSON.stringify(booksInfo,null,2),(err)=>{
    if(!err){
      console.log('写入成功');
    }
  })
  await browser.close();
}
run();
