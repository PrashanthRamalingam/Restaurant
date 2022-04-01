import Foodite from './Components/Foodite.js';
import Drinks from './Components/Drinks';
import './App.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
function App() {
  const data = [

    {
      rType: 'Veg',
      rFood: ' French Toast ',
      rPrice: '620 INR'
    },

    {
      rType: 'Veg',
      rFood: ' Pancakes ',
      rPrice: '320 INR'
    },

    {
      rType: 'Non Veg',
      rFood: 'Chicken Sandwich',
      rPrice: '180 INR'
    },
    {
      rType: 'Veg',
      rFood: ' Cheese Pizza ',
      rPrice: '1120 INR'
    },

    {
      rType: 'Non Veg',
      rFood: 'Caesar Salad',
      rPrice: '800 INR'
    },
    {
      rType: 'Veg',
      rFood: '    Paneer Steak ',
      rPrice: '100 INR'
    },

    {
      rType: 'Non Veg',
      rFood: 'Mutton Biryani',
      rPrice: '580 INR'
    },
    {
      rType: 'Non Veg',
      rFood: ' Butter Chicken Momos ',
      rPrice: '220 INR'
    },

    {
      rType: 'Non Veg',
      rFood: 'Egg Shezwan Rice',
      rPrice: '180 INR'
    },
    {
      rType: 'Non Veg',
      rFood: 'Glazed Ham',
      rPrice: '580 INR'
    },
    {
      rType: 'Non Veg',
      rFood: ' Crispy Calamari Rings ',
      rPrice: '2220 INR'
    },

    {
      rType: 'Non Veg',
      rFood: 'Tuscan Garlic Chicken',
      rPrice: '870 INR'
    },
  ]

  const dataOne = [
    {
      rType: 'Cocktail',
      rFood: 'Mojito',
      rPrice: '390 INR'
    },

    {
      rType: 'Mocktail',
      rFood: 'Shirley Ginger',
      rPrice: '280 INR'
    },

    {
      rType: 'Cocktail',
      rFood: 'PISCO PUNCH',
      rPrice: '1120 INR'
    },

    {
      rType: 'Cocktail',
      rFood: 'Sidecar ',
      rPrice: '500 INR'
    },
    {
      rType: 'Mocktail',
      rFood: 'Berry Burlesque',
      rPrice: '580 INR'
    },

    {
      rType: 'Cocktail',
      rFood: ' LONG ISLAND ICED TEA',
      rPrice: '600 INR'
    },
    {
      rType: 'Cocktail',
      rFood: 'AVIATION',
      rPrice: '1240 INR'
    },

    {
      rType: 'Cocktail',
      rFood: 'OLD FASHIONED',
      rPrice: '1600 INR'
    },
    {
      rType: 'Cocktail',
      rFood: 'NEGRONI',
      rPrice: '2800 INR'
    },


  ]
  return (
    <div  >
      <h1 id='h7'>Karnataka Cafe </h1>
      <h1 id='h1'>Main Course</h1>
       {data.map((item) => <Foodite rType={item.rType} rFood={item.rFood} rPrice={item.rPrice} />)} 
       
      <h1 id='h1' >Cocktails</h1>
      {dataOne.map((item) =>  <Drinks rType={item.rType} rFood={item.rFood} rPrice={item.rPrice} />)}
      <Footer/>
      <Header/>
    </div> 
  );
  
}

export default App;
//Method 1 <Foodite rType={data[0].rType} rFood={data[0].rFood} rPrice={data[0].rPrice} />
//Method 2  <Foodite rType={data[0].rType} rFood={data[0].rFood} rPrice={data[0].rPrice} />