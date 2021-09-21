import miaButton from './mia-button/index.vue'
import miaHello from './mia-hello/index.vue'

const components = {
  miaButton,
  miaHello
}

function install (Vue) {
  const keys = Object.keys(components)
  keys.forEach(name => {
    const component = components[name]
    Vue.component(component.name || name, component)
  })
}

export default {
  install,
  ...components
}
