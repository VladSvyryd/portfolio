const withOffline = require("next-offline");
const nextConfig = {
  devIndicators: {
    autoPrerender: false
  }
};

module.exports = withOffline(nextConfig);
