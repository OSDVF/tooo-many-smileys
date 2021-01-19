import { cs } from '../locales/index'

export default {
  computed: {
    $recoLocales () {
      const recoLocales = this.$themeLocaleConfig.recoLocales || {}

      return { ...cs, ...recoLocales }
    }
  }
}
