module.exports = {
  name: 'px-base',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/px-base',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
