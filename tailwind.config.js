module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['PingFangSC-Regular,', 'Microsoft YaHei', 'Graphik', 'sans-serif'],
        'serif': ['PingFangSC-Regular,', 'Microsoft YaHei', 'Merriweather', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}
