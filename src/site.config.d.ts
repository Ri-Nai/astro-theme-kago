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

export interface GiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping?: string;
  strict?: string;
  reactionsEnabled?: string;
  emitMetadata?: string;
  inputPosition?: string;
  lang?: string;
  enabled?: boolean;
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

export interface SiteConfig {
  profile: ProfileConfig;
  navigation: NavigationConfig;
  homePage: HomePageConfig;
  giscus?: GiscusConfig;
}
