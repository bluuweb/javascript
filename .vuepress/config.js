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
      { text: 'Guías', link: 'https://bluuweb.github.io/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Vue.js', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React.js', link: 'http://curso-react-js-udemy.bluuweb.cl' },
      { text: 'Curso Bootstrap', link: 'http://curso-bootstrap-4-udemy.bluuweb.cl' },
    ],
    sidebar:
      [
        '/',
        '/fundamentos/',
        '/02-dom/',
        '/chat/',
      ]
  }
 
}

{/* <img :src="$withBase('/img/compu-1.gif')"> */}