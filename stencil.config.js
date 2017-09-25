exports.config = {
  bundles: [
    { components: ['my-name'] },
    { components: ['demo-page'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
