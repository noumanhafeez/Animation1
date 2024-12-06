const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Your existing Metro configuration
const baseConfig = getDefaultConfig(__dirname);
const customConfig = {
  // Add your custom Metro configurations here, if any
};

const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap the configuration with Reanimated's wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
