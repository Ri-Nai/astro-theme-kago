
# Astro Theme Kago

[![npm version](https://img.shields.io/npm/v/astro-theme-kago)](https://www.npmjs.com/package/astro-theme-kago)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个美观、现代的 Astro 博客主题模板。

![screenshot](https://user-images.githubusercontent.com/23722199/233886932-047428d6-987e-4fb0-8223-751533a28a93.png)

## 特性

- 🎨 **美观的现代化设计** - 响应式设计，在所有设备上看起来都很棒。
- 📦 **开箱即用** - 包含你需要的几乎所有东西，包括文章、关于页面、友链等。
- 🚀 **Astro 5.0** - 基于最新的 Astro 5.0，享受 Astro 带来的极致性能。
- ✍️ **MDX 支持** - 在 Markdown 中使用组件，让你的内容更具交互性。
- 🧮 **数学公式** - 支持 KaTeX，轻松在文章中插入数学公式。
- 🖼️ **图片画廊** - 支持图片画廊和预览功能。
- 🧭 **自动生成目录** - 根据文章标题自动生成目录，方便读者导航。
- 🔗 **社交链接** - 轻松配置你的社交链接，展示在个人资料卡片上。
- tailwindcss - 使用 Tailwind CSS，轻松自定义主题样式。

## 如何使用

### 快速开始

你可以使用 `astro add` 命令来将此主题集成到你的项目中。

```bash
npx astro add astro-theme-kago
```

### 手动安装

1.  安装主题

    ```bash
    npm i astro-theme-kago
    ```

2.  在 `astro.config.mjs` 中添加主题

    ```javascript
    import { defineConfig } from 'astro/config';
    import kago from 'astro-theme-kago';

    export default defineConfig({
      integrations: [kago()],
    });
    ```

3.  在 `tsconfig.json` 中添加路径映射

    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        }
      }
    }
    ```

## 目录结构

```
src/
├── content/         # 内容集合
│   ├── blog/        # 博客文章
│   └── pages/       # 独立页面
├── layouts/         # 页面布局
├── components/      # 可重用组件
├── styles/          # 全局样式
├── utils/           # 工具函数
└── site.config.ts   # 网站配置
```

## 许可证

MIT
