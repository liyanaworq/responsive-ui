// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'mobile-left-show', 'mobile-left-hidden',
    'mobile-right-show', 'mobile-right-hidden'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
