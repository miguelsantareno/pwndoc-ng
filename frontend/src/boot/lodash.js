import Lodash from 'lodash'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.config.globalProperties.$_ = Lodash
})
