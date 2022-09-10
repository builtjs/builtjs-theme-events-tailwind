// If nothing in environment variables, will default back to local settings
const DEFAULT_BACKEND_DOMAIN = 'localhost';
const DEFAULT_BACKEND_URL = `http://${DEFAULT_BACKEND_DOMAIN}:1337`;
const DEFAULT_API_URL = `${DEFAULT_BACKEND_URL}/api`;
const USE_IMAGE_PROVIDER = true;

module.exports = {
  images: {
    domains: [
      process.env.BACKEND_DOMAIN || DEFAULT_BACKEND_DOMAIN,
      'localhost'
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || DEFAULT_API_URL,
    BACKEND_URL: process.env.BACKEND_URL || (process.env.NODE_ENV === 'production' || USE_IMAGE_PROVIDER ? '' : DEFAULT_BACKEND_URL),
    NAME: 'Wanaka Concert Society',
    BANK_ACCOUNT_NO: '03 1739 000 5648 01',
    POSTAL_ADDRESS: 'P O Box 856, Wanaka 9343',
    EMAIL: 'info@wanakaconcertsociety.org.nz',
    NEWSLETTER_URL: 'https://wanakaconcertsociety.us18.list-manage.com/subscribe/post?u=9425e366bda64b3abe929b7f5&amp;id=edb480e86a'
  }
};
