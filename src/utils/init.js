import store from "../store"
if(localStorage.getItem("shop")){
  store.commit("login/setUser",JSON.parse(localStorage.getItem("shop")))
}