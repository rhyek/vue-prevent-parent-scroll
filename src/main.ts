const map = new Map<HTMLElement, EventListenerOrEventListenerObject>()

export function install(Vue) {
  Vue.directive('prevent-parent-scroll', {
    bind(el: HTMLElement) {
      const handler = (event: WheelEvent) => {
        if (el.scrollTop - Math.abs(event.deltaY) <= 0  && event.deltaY < 0 ||
            Math.abs(el.scrollTop - (el.scrollHeight - el.clientHeight)) - event.deltaY <= 1 &&
            event.deltaY > 0)
        {
          event.preventDefault()
        }
      }
      map.set(el, handler)
      el.addEventListener('wheel', handler)
    },
    unbind(el: HTMLElement) {
      el.removeEventListener('wheel', map.get(el))
      map.delete(el)
    }
  })
}
