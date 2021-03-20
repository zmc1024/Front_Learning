import axios from 'axios'

const baseUrl = ''      //因为跨域所以不能在此配置

export function get(url){
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { errno, data} = res.data   //解构
      if(errno === 0){
        return data
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
}