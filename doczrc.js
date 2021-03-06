
export default {
  title: 'superset doc',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  files: ['src/**/*.{md,markdown,mdx}'],
  menu: [
    'installation', 
    ['Getting Started', 'cloud-native'],
    ['MenuA', ['ItemY', 'ItemZ']],
    ['faq']
  ],
}
