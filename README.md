# Heron Fresh B2B Official Website

Heron Fresh 官方网站是一款专为海外高端市场大买家（商超采购商、大型分销商及农业巨头）打造的 **高品质 B2B 旗舰级企业门户**。

网站构建于 **Next.js 14 App Router**、**Tailwind CSS**、**TypeScript** 与 **GSAP**，采用符合国际一流水准的 **米乳白轻奢有机视觉系统 (`#F7F9F5`)**，完全摒弃了传统的生硬外贸风格，树立了“现代生态、精密品控、透明物流、专业贸易”的品牌调性。

---

## 🎨 视觉与体验亮点

1. **写实全屏巨幕轮播 (Hero Slideshow)**
   * 由 Google **Nano Banana** 精品生成核心渲染的五张 4K 超写实摄影作为底色，涵盖会理生态山谷果园、整只石榴、红宝石果粒、阳光玫瑰葡萄、 Ehime 红美人柑橘。
   * 支持 Ken Burns 电影级镜推动效，并配有防重叠的轻量渐变文字遮罩，在保留极致画面质感的同时确保阅读体验。
2. **滚动优化与缓动 (Scroll Dynamics)**
   * 集成 **Lenis** 物理滚动平滑器，确保在 PC、Safari 及各类移动端设备上拥有丝滑的阻尼感滚动体验。
   * 采用 **GSAP** 跟踪页面视图，提供低功耗、高性能的淡入淡出动画。
3. **真实矢量品牌徽标 (SVG Logo)**
   * 采用像素级 SVG 矢量重构的 Heron Fresh 圆形“半切柑橘/双叶片”真实 Logo，在顶部 Navbar 与底部 Footer 分别以高对比度和反色姿态无损展现。

---

## 🌾 核心内容板块逻辑

项目彻底移除了虚构的“物联网 farming”等不实概念，严格围绕真实外贸链条进行板块划分：
* **Sourcing & Origin (直采源头)**: 讲述深山谷地直采合伙协议、海拔日照优势与 100% 采摘可追溯性。
* **Quality Standards (品控标准)**: 展示包装厂的**光电重量/果径分级**以及近红外（NIR）无损糖酸检测，保障单箱 caliber 均一并拦截黑心果。
* **Cold Chain Logistics (冷链物流)**: 介绍田间采后 **4 小时预冷**、海运 **CA 气调冷藏集装箱**控制气体浓度防变质，以及随箱交付的 USB 温度仪记录。
* **Product Portfolio (品目规格馆)**: 动态切换三种核心水果大图，展现 caliber、箱重和季度排期表。
* **B2B Solutions & RFQ (贸易解决方案)**: 详述**年度直供合同**、**贴牌 OEM 包装/贴标**以及新客**试单方案**。

---

## 🛠️ 项目目录结构

```bash
heron-fresh-website/
├── public/
│   └── images/               # 存放 Google 核心生成的超清写实水果及果园大图
├── src/
│   ├── app/
│   │   ├── globals.css       # 核心设计系统（温润有机绿/暖碳灰）变量与全局样式
│   │   ├── layout.tsx        # 全局字体（Outfit + Playfair）及根节点配置
│   │   └── page.tsx          # 入口组件
│   └── components/
│       ├── MainPage.tsx      # 全局 Lenis 滚动与 sections 组装器
│       └── sections/
│           ├── Header.tsx    # 顶部透明毛玻璃 Navbar（含矢量 Logo）
│           ├── Hero.tsx      # 全屏 Ken Burns 轮播图区
│           ├── Provenance.tsx # 直采源头与气象曲线
│           ├── QualityControl.tsx # 品控与采后分级
│           ├── ColdChain.tsx # 冷链物流与 CA 航线追踪图
│           ├── Catalog.tsx   # 水果规格卡片（支持图片动态切换）
│           └── Inquiry.tsx   # RFQ 表单（包含分流路由）与 Footer
├── package.json              # 依赖声明（gsap, lenis, canvas-confetti）
└── README.md                 # 项目说明文档
```

---

## 📈 本地开发与构建

### 1. 安装依赖
```bash
npm install
```

### 2. 本地开发预览
```bash
npm run dev
# 浏览器打开 http://localhost:3000
```

### 3. 生成静态生产包
```bash
npm run build
```

---

## 📨 RFQ 表单数据收集与流转说明

### 1. 目前版本的设计（前端捕获）
目前 [Inquiry.tsx](file:///Users/xiaokeai/Documents/antigravity/heron-fresh-website/src/components/sections/Inquiry.tsx) 中的表单提交处于**前端闭环捕获状态**：
* 当海外买家输入信息并点击 `Submit` 时，React 会捕获表单的状态变量（`name`, `email`, `port`, `desk`, `program`, `product`, `volume`, `requirements`）。
* 执行客户端验证（防止漏填）。
* 触发特效：调用 `canvas-confetti` 喷洒代表生鲜丰收的“嫩绿+金黄”的碎屑彩带。
* 状态置为 `submitted`，展示温馨的“询盘已发送，12小时内回复”谢幕页面，并在数秒后重置表单。
* **目前并不会产生跨域网络请求，亦不会存储到数据库或发送邮件（此为纯前端 Demo）**。

### 2. 生产上线后如何自动将询盘发送给您？
当您将项目正式部署到 Vercel 后，我们有以下三种**极简、零成本/极低成本**的方案实现询盘表单“自动发信到您的邮箱”或“自动记录到表格”：

#### 方案甲：集成免费发信服务 (Resend / SendGrid) — 推荐
* **原理**：在 Next.js 项目中新建一个 API 接口（`/src/app/api/inquiry/route.ts`）。
* 当买家提交时，前端通过 `fetch('/api/inquiry')` 将数据发送至该接口，接口调用 **Resend**（免费额度 3,000 封/月，足够 B2B 询盘使用）。
* **效果**：系统会自动将询盘格式化为排版美观的 HTML 邮件，瞬间发送至您的邮箱 `trade@heronfresh.com`（发件人可自定义为 `system@heronfresh.com`），并抄送给负责该 Trade Desk 的销售代表。

#### 方案乙：第三方表单集成服务 (Formspree / Web3Forms) — 零代码
* **原理**：无需编写任何 API 代码，直接在 `Inquiry.tsx` 的 `<form>` 标签中将 `action` 地址改为第三方表单工具给您的专属链接。
* **效果**：第三方平台会自动帮我们做防垃圾邮件验证（Spam Filtering），并把买家填写的每一笔询盘实时转发到您的注册邮箱中，还可以在他们的后台直接以表格形式导出。

#### 方案丙：自动写入 Google Sheets 表格 — 便于团队协作
* **原理**：前端调用 API 将数据推送给 Google Sheets API（或使用第三方中转工具如 SheetDB / Make.com）。
* **效果**：买家提交询盘的瞬间，您团队共享的 Google 云端硬盘表格里会自动新增一行，记录下买家的名字、公司邮箱、目的港、订购量及详细 OEM 备注，非常方便销售部门协同跟进。
