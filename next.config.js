/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const gitRepoName = 'Tailwindcss';

module.exports = {
  assetPrefix: !debug ? `/${gitRepoName}/` : '',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
};
