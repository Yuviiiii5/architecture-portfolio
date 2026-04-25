# 述筑建筑事务所

一个极简美学风格的建筑作品集网站，基于 React + Vite + Tailwind CSS + GSAP 构建，交互丝滑流畅。

## 在线预览

👉 [https://你的用户名.github.io/你的仓库名](https://你的用户名.github.io/你的仓库名)

## 技术栈

| 技术 | 用途 |
|------|------|
| **React 19** | UI 框架 |
| **Vite** | 构建工具 |
| **Tailwind CSS** | 样式系统 |
| **GSAP + ScrollTrigger** | 滚动动画与入场动效 |
| **Lenis** | 全局平滑滚动 |
| **TypeScript** | 类型安全 |

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 http://localhost:5173 查看效果。

## 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 自定义内容

### 修改事务所名称与标语

编辑 `src/sections/Hero.tsx`：

```tsx
<h1>述筑</h1>
<p>以纯粹几何重构自然感知</p>
```

### 修改/添加项目

编辑 `src/sections/SelectedWorks.tsx` 中的 `projects` 数组：

```tsx
{
  name: '你的项目名',
  location: '项目地点',
  year: '2024',
  category: '建筑类型',
  image: '/你的图片.jpg',
}
```

将你的图片放入 `public/` 文件夹，然后在代码中引用 `/图片名.jpg`。

### 修改联系信息

编辑 `src/sections/Footer.tsx`：

```tsx
<a href="mailto:你的邮箱">你的邮箱</a>
```

### 修改关于页文案

编辑 `src/sections/About.tsx` 中的文本段落。

## 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署工作流（`.github/workflows/deploy.yml`）。

### 步骤

1. **创建 GitHub 仓库**
   - 访问 [github.com/new](https://github.com/new)
   - 仓库名称：`portfolio`（或任意名称）
   - 选择 **Public**
   - 点击 **Create repository**

2. **上传代码**

   ```bash
   # 在项目根目录执行
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```

3. **开启 GitHub Pages**
   - 进入仓库的 **Settings → Pages**
   - **Source** 选择 **GitHub Actions**
   - 工作流会自动运行，约 1-2 分钟后部署完成

4. **访问网站**
   - 部署完成后，通过 `https://你的用户名.github.io/你的仓库名` 访问

### 重新部署

每次推送代码到 `main` 分支，GitHub Actions 会自动重新构建并部署。

## 项目结构

```
├── public/                 ← 静态资源（项目图片）
│   ├── valley-chapel.jpg
│   ├── concrete-library.jpg
│   ├── bridge-teahouse.jpg
│   ├── dune-tower.jpg
│   ├── sketch.jpg
│   ├── concrete-texture.jpg
│   └── construction.jpg
├── src/
│   ├── sections/           ← 页面区块
│   │   ├── Hero.tsx        ← 主视觉
│   │   ├── Statement.tsx   ← 理念陈述
│   │   ├── SelectedWorks.tsx ← 项目展示
│   │   ├── About.tsx       ← 关于我们
│   │   ├── DesignProcess.tsx ← 设计过程
│   │   └── Footer.tsx      ← 页脚联系
│   ├── components/
│   │   └── Navigation.tsx  ← 顶部导航
│   ├── App.tsx             ← 根组件
│   ├── main.tsx            ← 入口
│   └── index.css           ← 全局样式
├── .github/workflows/
│   └── deploy.yml          ← GitHub Pages 自动部署
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 设计特点

- **暖白背景**（`#fafafa`）搭配深黑文字，营造建筑图纸般的阅读体验
- **全站 0px 圆角**，呼应建筑的几何纯粹性
- **GSAP ScrollTrigger** 驱动的渐进式入场动画
- **Lenis 平滑滚动**，提供丝滑的浏览体验
- **交替布局**的项目卡片，在大屏幕上左右错落，视觉节奏感强
- **图片悬停微缩放**（scale 1.03），克制而优雅

## License

MIT
