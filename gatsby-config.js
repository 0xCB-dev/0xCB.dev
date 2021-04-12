module.exports = {
  siteMetadata: {
    title: '0xCB - Tech, Keyboards and more',
    siteUrl: 'https://0xcb.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '0xCB - Tech, Keyboards and more',
        short_name: '0xCB.dev',
        start_url: '/',
        background_color: '#2e3141',
        theme_color: '#2e3141',
        display: 'standalone',
        icon: 'src/assets/images/website-icon.svg',
        crossOrigin: 'use-credentials',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://0xcb.dev',
        sitemap: 'https://0xcb.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/', '**/404', '**/legal', '**/privacy', '**/icon*'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
  ],
};
