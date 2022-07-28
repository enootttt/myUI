module.exports = {
  title: 'My-UI',
  base: '/myUI/',
  themeConfig: {
    nav: [{
      text: 'Home', link: '/'
    },{
      text: 'Github', link: 'https://github.com/enootttt/myUI/tree/master'
    },{
      text: 'Npm', link: 'https://www.npmjs.com/package/myadd-ui'
    }],
    sidebar: [
      '/',
      '/componentDocs/card',
      '/componentDocs/button',
      '/componentDocs/input',
      '/componentDocs/InputNumber',
      '/componentDocs/radio',
      '/componentDocs/RadioGroup',
      '/componentDocs/checkbox'
    ],
    smoothScroll: true
  }
}