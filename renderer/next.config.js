module.exports = {
  images: {
    domains: ['images.unsplash.com'], // Add 'images.unsplash.com' to the list of allowed domains
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
};
