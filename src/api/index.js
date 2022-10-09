import axios from "../utils/request"
import base from "./base"

const api = {
  // 注册
  register(params){
    return axios.post(base.baseUrl + base.register, params)
  },
  // 登录
  login(params){
    return axios.post(base.baseUrl + base.login, params)
  },
  // 商品列表
  selectProduct(params){
    return axios.get(base.baseUrl + base.selectProduct,{params})
  },
  total(){
    return axios.get(base.baseUrl + base.total)
  },
  search(params){
    return axios.get(base.baseUrl + base.search,{
      params
    })
  },
  selectProductId(params){
    return axios.get(base.baseUrl + base.selectProductId,{
      params
    })
  },
  insertProduct(params){
    return axios.get(base.baseUrl + base.insertProduct,{
      params
    })
  },
  deleteProduct(params){
    return axios.get(base.baseUrl + base.deleteProduct,{
      params
    })
  },
  preUpdateItem(params){
    return axios.get(base.baseUrl + base.preUpdateItem,{
      params
    })
  },
  updateProduct(params){
    return axios.get(base.baseUrl + base.updateProduct,{
      params
    })
  },
  selectItemParamAll(params){
    return axios.get(base.baseUrl + base.selectItemParamAll,{
      params
    })
  },
  paramsSearch(params){
    return axios.get(base.baseUrl + base.paramsSearch,{
      params
    })
  }
}
export default api;