
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      width:{
        150:"150px",
        190:"190px",
        225:"225px",
        275:"275px",
        300:"300px",
        340:"340px",
        350:"350px",
        375:"375px",
        460:"460px",
        656:"656px",
        880:"880px",
        508:"508px"
      },
      height:{
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        340:"340px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        685:"685px",
        800:"800px"
      },
      minWidth:{
        210:"210px",
        350:"350px",
        620:"620px"
      },
      screens:{
        "xsm":"320px",
        sm:"600px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1534px",
      },
      colors:{
        headingColor:"#2e2e2e",
        textColor:"#515151",
        cartNumBg:"#e80013",
        primary:"#f5f3f3"
      }
    },
  
  },
}

