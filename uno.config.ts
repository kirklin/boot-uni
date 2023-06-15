import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetWeApp from "unocss-preset-weapp";
import presetChinese from "unocss-preset-chinese";
import { transformerAttributify, transformerClass } from "unocss-preset-weapp/transformer";

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
    }),

    presetChinese(),

    /**
     * 微信小程序预设
     * @see https://github.com/MellowCo/unocss-preset-weapp
     */
    presetWeApp(),
  ],
  shortcuts: [
  ],
  transformers: [
    transformerClass(),
    transformerAttributify(), // 开启属性模式(支持小程序)
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ],
});
