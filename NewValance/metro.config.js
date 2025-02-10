const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const { assetExts, sourceExts } = defaultConfig.resolver;

  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'otf'],
      sourceExts: [...sourceExts, 'svg'],
      mainFields: ['browser', 'module', 'main'], // 추가
    },
  };
})();
