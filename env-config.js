const debug = process.env.NODE_ENV !== 'production';
const gitRepoName = 'Tailwindcss';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${gitRepoName}` : '',
};
