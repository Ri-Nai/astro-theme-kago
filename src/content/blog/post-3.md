---
title: "使用 Astro 构建静态网站"
description: "探索 Astro 的强大功能，了解如何构建高性能的静态网站。"
pubDate: 2025-01-03
tags: ["astro", "静态网站", "前端"]
category: "技术"
math: true
---

# 使用 Astro 构建静态网站

Astro 是一个现代的静态网站生成器，专为构建快速、以内容为中心的网站而设计。

## 为什么选择 Astro？

1. **零 JavaScript 默认**: Astro 默认生成零 JavaScript 的 HTML
2. **组件岛屿**: 只在需要时加载交互组件
3. **多框架支持**: 可以使用 React、Vue、Svelte 等
4. **优秀的开发体验**: 热重载、TypeScript 支持等

## 核心概念

### 组件岛屿架构

Astro 使用"组件岛屿"架构，这意味着：

- 页面主体是静态 HTML
- 交互组件作为"岛屿"独立运行
- 只有必要的 JavaScript 被发送到客户端

### 内容集合

Astro 的内容集合功能让你能够：

```typescript
// content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

### 页面路由

Astro 使用基于文件的路由系统：

```
src/pages/
├── index.astro          # /
├── about.astro          # /about
├── blog/
│   ├── index.astro      # /blog
│   └── [slug].astro     # /blog/post-name
```

## 性能优势

Astro 的性能优势体现在：

- **更小的包大小**: 只发送必要的 JavaScript
- **更快的加载速度**: 静态 HTML 加载更快
- **更好的 SEO**: 服务器端渲染的内容

## 数学公式支持

如果你需要在文章中使用数学公式，Astro 配合 KaTeX 可以很好地支持：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

行内公式也很简单：$f(x) = ax + b$

## 总结

Astro 是构建现代静态网站的优秀选择，特别适合：

- 博客和文档网站
- 营销页面
- 电子商务网站
- 任何以内容为主的网站

开始你的 Astro 之旅吧！
