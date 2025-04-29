import { writable } from 'svelte/store';

export const SUPPORTED_LANGS = ['en', 'zh-CN'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
const getInitialLang = (): Lang => {
  const saved = localStorage.getItem('lang');
  if (saved && SUPPORTED_LANGS.includes(saved as Lang)) return saved as Lang;

  const browserLang = navigator.language;
  if (SUPPORTED_LANGS.includes(browserLang as Lang)) return browserLang as Lang;

  return 'en';
};

function createLangStore() {
  const storedLang = getInitialLang();
  const langStore = writable<Lang>(storedLang);

  // 同步写入 localStorage
  langStore.subscribe((value) => {
    localStorage.setItem('lang', value);
  });

  return langStore;
}

export const translations = {
  en: {
    Block: 'Block',
    Christmas: 'Christmas',
    Class: 'Class',
    ER: 'ER',
    Flow: 'Flow',
    Gantt: 'Gantt',
    Git: 'Git',
    Mindmap: 'Mindmap',
    Packet: 'Packet',
    Pie: 'Pie',
    QuadrantChart: 'Quadrant Chart',
    Sequence: 'Sequence',
    State: 'State',
    'User Journey': 'User Journey',
    XYChart: 'XY Chart',
    ZenUML: 'ZenUML',
    actions: 'Actions',
    auto: 'Auto',
    changeLanguageButton: 'Change Language',
    code: 'Code',
    config: 'Config',
    copied: 'Copied',
    copy: 'Copy',
    copyImage: 'Copy Image',
    docs: 'Docs',
    edit: 'Edit',
    enterGistUrl: 'Please enter Gist URL',
    height: 'Height',
    historyTip1: 'Click the Save button to save current state and restore it later',
    historyTip2: 'Timeline will automatically be saved every minute',
    loadGist: 'Load Gist',
    loading: 'Loading...',
    noHistory: 'No items in History',
    sampleDiagrams: 'Sample Diagrams',
    share: 'Share',
    shareDesc: 'Share your diagrams with others.',
    shareLink: 'Shareable links',
    shareTip: 'The content of the diagrams you create never leaves your browser.',
    title: 'Live Editor',
    view: 'View',
    width: 'Width'
  },
  'zh-CN': {
    Block: '块图',
    Christmas: '春节',
    Class: '类图',
    ER: 'ER 图',
    Flow: '流程图',
    Gantt: '甘特图',
    Git: 'Git 图',
    Mindmap: '思维导图',
    Packet: '数据包图',
    Pie: '饼图',
    QuadrantChart: '象限图',
    Sequence: '序列图',
    State: '状态图',
    'User Journey': '用户旅程图',
    XYChart: '散点图',
    ZenUML: 'ZenUML',
    actions: '操作',
    auto: '自动',
    changeLanguageButton: '切换语言',
    code: '代码',
    config: '配置',
    copied: '已复制',
    copy: '复制',
    copyImage: '复制图片',
    docs: '文档',
    edit: '编辑',
    enterGistUrl: '请输入 Gist URL',
    height: '高度',
    historyTip1: '点击保存按钮以保存当前状态，并稍后恢复',
    historyTip2: '每分钟自动保存一次时间线',
    loadGist: '加载 Gist',
    loading: '加载中...',
    noHistory: '历史记录为空',
    sampleDiagrams: '示例图表',
    share: '分享',
    shareDesc: '与他人分享您的图表。',
    shareLink: '分享链接',
    shareTip: '您创建的图表内容始终保留在您的浏览器本地，不会上传至任何服务器。',
    title: '实时编辑器',
    view: '视图',
    width: '宽度'
  }
} as const;

export const lang = createLangStore();
