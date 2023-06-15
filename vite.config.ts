import { resolve } from "node:path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import UniPages from "@uni-helper/vite-plugin-uni-pages";
import UniLayouts from "@uni-helper/vite-plugin-uni-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    UniPages(),
    UniLayouts(),

    /**
     * unocss
     * @see https://github.com/unocss/unocss
     * see unocss.config.ts for config
    */
    Unocss(),

    /**
     * unplugin-auto-import 按需 import
     * @see https://github.com/antfu/unplugin-auto-import
     */
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        {
          "@dcloudio/uni-app": [
            "onLaunch",
            "onShow",
            "onHide",
            "onLoad",
            "onPullDownRefresh",
            "onReachBottom",
            // ... 按需添加 {@link https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle}
          ],
        },
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
    }),

    /**
     * unplugin-vue-components 按需引入组件
     * 注意：需注册至 uni 之前，否则不会生效
     * @see https://github.com/antfu/vite-plugin-components
     */
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),

    uni(),

  ],
});
