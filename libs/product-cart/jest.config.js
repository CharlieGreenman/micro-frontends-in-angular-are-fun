module.exports = {
  name: 'product-cart',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/product-cart',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
