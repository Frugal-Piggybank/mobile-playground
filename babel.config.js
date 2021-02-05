module.exports = function getPresets(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
