module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/details",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
