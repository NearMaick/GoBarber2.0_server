export default {
  jwt: {
    // secret: 'af7d3ec005e9d7cf9e282964d16e98de',
    secret: process.env.APP_SECRET,
    expiresIn: '1d',
  },
};
