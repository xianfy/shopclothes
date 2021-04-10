import Toast from "./Toast";
// 创建一个对象
const obj = {}

obj.install = function (Vue) { //这里会默认将Vue传入
  // console.log(Vue)
  // 1.创建组件构造器
  const toastConstrustor = Vue.extend(Toast)
  // 2.以new的方式,根据组件构造器来创建一个Toast组件对象
  const toast = new toastConstrustor()
  // 3.将组件对象手动挂载到dom元素上
  toast.$mount(document.createElement('div'))
  // 4.将组件对象添加到body中
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
