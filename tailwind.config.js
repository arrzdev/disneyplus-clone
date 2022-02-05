module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'] //alow images from this domains
  },
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}
