// 主题入口文件
// 导出配置类型和示例配置
export type { ProfileConfig, NavigationConfig, HomePageConfig } from './site.config.d';

// 导出主要布局
export { default as BaseLayout } from './layouts/BaseLayout.astro';
export { default as HomeLayout } from './layouts/HomeLayout.astro';
export { default as AboutLayout } from './layouts/AboutLayout.astro';
export { default as FriendsLayout } from './layouts/FriendsLayout.astro';

// 导出主要组件
export { default as Navigation } from './components/Navigation.astro';
export { default as ArticleList } from './components/ArticleList.astro';
export { default as ProfileCard } from './components/ProfileCard.astro';
export { default as Gallery } from './components/Gallery.astro';
export { default as TOC } from './components/TOC.astro';
export { default as Image } from './components/Image.astro';

// 导出工具函数
export * from './utils/pathUtils';
export * from './utils/readingTime';
export * from './utils/svgUtils';
