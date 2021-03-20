// 读取到用户的设备宽度，并设置项目的根字体大小
// resizeEvt:监听页面大小发生变化
(function(doc, win) {
  let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recale = function() {
        let clientWidth = docEl.clientWidth;
        if(!clientWidth) {
          return
        }
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
      }
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recale, false);   //页面大小发生变化时计算fz大小
  doc.addEventListener('DOMContentLoaded', recale)  //页面加载完成时时计算fz大小
})(document, window)  