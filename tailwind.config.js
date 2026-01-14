module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nimbus: ['Nimbus Sans', 'sans-serif'],
                'playfair': ['"Playfair Display"', 'serif'],
                'oswald': ['Oswald', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'raleway': ['Raleway', 'sans-serif'],
                
            },
        },
    },
    plugins: [],
}
