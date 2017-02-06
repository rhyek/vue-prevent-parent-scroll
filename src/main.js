module.exports = {
  install(Vue) {
    Vue.directive('prevent-parent-scroll', {
      bind(el) {
        el.preventParentScroll = (event) => {
          if (el.scrollTop === 0  && event.deltaY < 0 ||
              el.scrollTop === el.scrollHeight - el.clientHeight &&
              event.deltaY > 0)
          {
            event.preventDefault()
          }
        }
        el.addEventListener('wheel', el.preventParentScroll)
      },
      unbind(el) {
        el.removeEventListener('wheel', el.preventParentScroll)
      }
    })
  }
}