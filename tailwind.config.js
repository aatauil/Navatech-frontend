module.exports = {
  purge: [
    "./src/*.js",
    "./src/**/*.js",
    "./src/**/**/*.js",
    
  ],
  theme: {
    extend: {
      height: {
        '1' : '1px' 
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      backgroundColor: {
        'gray': '#F0F0F0',
        'blue': '#0079B8',
        'white': '#fff',
        'black': '#111'
      },
      boxShadow: {
        default: "0px 0px 10px rgba(0,0,0,.1)",
        "b": "0px 5px 5px rgba(0,0,0,.05)",
        "none": "0px 0px 0px rgba(0,0,0,0)"
      },
      minWidth: {
        'card-sm': '300px'
      },
      borderColor:{
        "black": 'rgba(0,0,0,.1)',
        "dark" : 'rgba(0,0,0,.8)',
      },
      textColor: {
        'gold': '#B99867',
        'red':'#EB0000',
        'blue': '#0079B8',
        'white': '#fff',
        'black': '#000',
        'gray' : '#333'
      },
    }
  },
  variants: {},
  plugins: [],
}
