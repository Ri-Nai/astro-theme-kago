import type {
  HomePageConfig,
  NavigationConfig,
  ProfileConfig,
  GiscusConfig
} from "./site.config.d";

// 主题配置示例
export const profileConfig: ProfileConfig = {
  avatar: '/imgs/default-avatar.svg',
  name: 'Yourname',
  bio: 'Ciallo',
  author: 'Yourname',
  favicon: '/favicon.svg',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Yourname',
      icon: '/icons/github.svg',
    },
    {
      name: 'Email',
      url: 'mailto:example@outlook.com',
      icon: '/icons/email.svg',
    },
    {
      name: 'Bilibili',
      url: 'https://space.bilibili.com/1',
      icon: '/icons/bilibili.svg',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/profiles/1/',
      icon: '/icons/steam.svg',
    },
  ],
};

export const navigationConfig: NavigationConfig = {
  brand: {
    icon: '✨',
    text: 'Ri-Nai',
  },
  navItems: [
    { href: '/', label: '首页', icon: '🏠' },
    { href: '/blog', label: '文章', icon: '📝' },
    { href: '/friends', label: '友链', icon: '🔗' },
    { href: '/about', label: '关于', icon: '👤' },
  ],
  search: {
    placeholder: '输入关键词搜索文章...',
    title: '🔍 搜索文章',
    noResultsText: '未找到相关文章',
    errorText: '搜索失败，请稍后重试',
    startText: '开始输入以搜索文章...',
  },
};

export const homePageConfig: HomePageConfig = {
  title: "首页 - Yourname 的博客",
  description: "如果努力的尽头是奇迹",
  hero: {
    title: "欢迎来到 Yourname 的博客",
    subtitle: profileConfig.bio,
    avatar: profileConfig.avatar
  },
};

export const giscusConfig: GiscusConfig = {
  repo: "Ri-Nai/astro-theme-kago",
  repoId: "R_kgDOPyFt-A", // Your actual repo ID
  category: "Announcements",
  categoryId: "DIC_kwDOPyFt-M4CvpmA",
  mapping: "url",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "zh-CN",
  enabled: true,
};
