import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Products from "./Products";


function ProductsBtn() {

const [technics, setTechnics] = useState(data);

  const chosenTechnics = (category) => {
    const newTechnics = data.filter(element => element.category === category);
    setTechnics(newTechnics);
  }

  return (
    <div>     
     <Buttons filteredTechnics={chosenTechnics}/>
     <Products itemsForSale={technics}/>
    </div>
  )
}

export default ProductsBtn;