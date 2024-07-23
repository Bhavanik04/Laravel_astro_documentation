
export const laravelApiSidebar = [

  {
    label: 'Laravel & Package composition',
    link: '/package/package/'
  },
  {
    label: 'API Security',
    items: [
      {
        label: 'API Security',
        link: '/apisecurity/token/'
      }
    ]
  },
  {
    label: 'API Logging',
    autogenerate: {
      directory: 'apilogging'
    }
  },
  {
    label: 'API Documentation',
    autogenerate: {
      directory: 'apidoc/apidoc'
    },
    autogenerate: {
      directory: 'apidoc/requestobj'
    },
    autogenerate: {
      directory: 'apidoc'
    },
    autogenerate: {
      directory: 'apidoc'
    }
  }
];
