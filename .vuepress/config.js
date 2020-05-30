module.exports = {
  title: 'Vainilla Javascript',
  description: 'Aprende Javascript con bluuweb',
  base: '/javascript/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Vue.js', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React.js', link: 'http://curso-react-js-udemy.bluuweb.cl' },
      { text: 'Curso Bootstrap', link: 'http://curso-bootstrap-4-udemy.bluuweb.cl' },
    ],
    sidebar:
      [
        '/',
        '/fundamentos/',
        '/chat/',
      ]
  }
 
}