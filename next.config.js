const is_build = true;

let assetPrefix = '';
let basePath = '';

if (is_build) {
  // trim off `<owner>/`
  const repo = 'ATL-NVL'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`

}

module.exports = {
  reactStrictMode: true,
  distDir: 'docs',
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,

}