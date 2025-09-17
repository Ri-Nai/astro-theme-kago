// 主题配置类型定义和示例配置
export interface ProfileConfig {
  avatar: string;
  name: string;
  bio: string;
  author: string;
  favicon: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface NavigationConfig {
  brand: {
    icon: string;
    text: string;
  };
  navItems: {
    href: string;
    label: string;
    icon: string;
  }[];
  search: {
    placeholder: string;
    title: string;
    noResultsText: string;
    errorText: string;
    startText: string;
  };
}

export interface HomePageConfig {
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    avatar?: string;
  };
  showRecentPosts?: boolean;
  recentPostsLimit?: number;
}

// 示例配置 - 用户可以参考这些值来创建自己的配置
export const exampleProfileConfig: ProfileConfig = {
  avatar: '/imgs/avatar.jpg',
  name: 'Your Name',
  bio: 'Your Bio Description',
  author: 'Your Name',
  favicon: '/favicon.png',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '/icons/github.svg',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '/icons/email.svg',
    },
  ],
};

export const exampleNavigationConfig: NavigationConfig = {
  brand: {
    icon: '✨',
    text: 'Your Blog',
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

export const exampleHomePageConfig: HomePageConfig = {
  title: "首页 - Your Blog",
  description: "Your blog description",
  hero: {
    title: "欢迎来到您的博客",
    subtitle: "Your Bio Description",
    avatar: '/imgs/avatar.jpg'
  },
};