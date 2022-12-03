const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: [ "cdn.discordapp.com", "i.imgur.com", "localhost:3000" ]
},
/*
async redirects() {
  return [
      {
        source: '/link',
        destination: 'https://link_href.com',
        permanent: true, // true ? false
      },
    ]
  }
*/
});
