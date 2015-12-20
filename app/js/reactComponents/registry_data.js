module.exports = {
  Navbar: {
    baseUrl: './navbar/',
    url: 'navbar.jsx',
    children: {
      Button: {
        url: 'button.jsx'
      }
    }
  },

  PeriodicTable: {
    baseUrl: './periodicTable/',
    url: 'periodicTable.jsx',
    children: {
      Element: {
        url: 'element.jsx'
      }
    }
  },

  General: {
    baseUrl: './general/',
    url: 'transitions.jsx'
  }

}
