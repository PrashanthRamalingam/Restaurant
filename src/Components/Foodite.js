import {useState} from 'react'
import './fooditem.css'

function Dddd(props) {
 let [val,chgVal] = useState(props.rFood)  
 console.log(val)
 const updateVal=()=> {
 console.log("vaulueUpdated")
 chgVal("Indian Toast")

 }

  return (

    <div className='items'>

      <div className='image' id='h2' > <span style={{ color: props.rType === "Veg" ? "Green" : "Red" }} id='span'>{props.rType}</span> {val} < button id='ab' onClick={updateVal}>{props.rPrice}  </button> </div>

    </div>


  );

}
export default Dddd;