import './fooditem.css'

function Drinks(props) {
  return (
    <div className='drinks'
    >
      <div id='h6'><span style={{color: props.rType==="Cocktail"? "Gold" : "Dark Grey"}} id='span'>{props.rType}</span> {props.rFood} < button id='ab'>{props.rPrice}</button> </div>
      
    </div>


  );

}
export default Drinks;