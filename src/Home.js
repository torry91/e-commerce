import {useState} from "react";
import {data} from "./data";
import Buttons from "./buttons";
import Clothes from "./clothes";

function Home () {
    
    const [firstState, setState] = useState(data);
    
    const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => 
        element.searchTerm === searchTerm);
        setState(newClothes)
        }
        
    return (<div>
        <div className="cont">
        <h2 className="back">Free Standard Shipping</h2>
            </div>
            
    <Buttons filteredClothes={chosenClothes}/>
    <Clothes lastState={firstState}/>
    </div>
    )
    }

export default Home;