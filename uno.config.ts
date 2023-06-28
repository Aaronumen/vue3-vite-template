import { defineConfig, presetIcons, presetUno } from "unocss"
import presetAttributify from "@unocss/preset-attributify"
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default)
      }
    })
  ]
})
