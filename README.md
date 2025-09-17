# Astro Theme Ri-Nai

基于 BIT-SE 样式的 Astro 博客主题。

## 特性

- 现代化的响应式设计
- 支持 MDX 和数学公式渲染
- 图片画廊和预览功能
- 自动生成目录
- 社交链接集成
- Tailwind CSS 样式

## 使用方法

在你的 Astro 项目中，将此主题作为 Git submodule 添加：

```bash
git submodule add <your-theme-repo-url> themes/astro-theme-ri-nai
```

然后在 `astro.config.mjs` 中配置路径别名：

```javascript
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 其他配置...
  vite: {
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'themes/astro-theme-ri-nai/src'),
      },
    },
  },
});
```

在 `tsconfig.json` 中添加路径映射：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@theme/*": ["./themes/astro-theme-ri-nai/src/*"]
    }
  }
}
```

## 目录结构

```
src/
├── layouts/          # 页面布局
├── components/       # 可重用组件
├── styles/          # 全局样式
├── utils/           # 工具函数
└── config.ts        # 主题配置
```

## 开发

此主题作为独立的 Git 仓库进行维护，可以在多个项目中重复使用。

## 许可证

MIT