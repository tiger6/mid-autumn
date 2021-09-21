import miaButton from './mia-button/index.vue'
import miaHello from './mia-hello/index.vue'

const components = {
  miaButton,
  miaHello
}

function install (vue) {
  const keys = Object.keys(components)
  keys.forEach(name => {
    const component = components[name]
    vue.component(component.name || name, component)
  })
}

export default {
  install,
  ...components
}
