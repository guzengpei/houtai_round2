// 图片有问题时的自定义指令
export const imgError = {
  inserted (dom, options) {
    dom.onerror = function () {
      dom.src = options.value
    }
  }
}
