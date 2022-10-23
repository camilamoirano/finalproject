import React, {useState} from "react";
import { useEffect } from "react";
import "./ItemListContainer.css"
import  {getItems, getItemsByCategory} from "../../services/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Waveform } from '@uiball/loaders'



function ItemListContainer(props){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const { cat } = useParams();

    useEffect(() =>{
        setData([]);
        setIsLoading(true);
        if ( cat === undefined ){
            getItems().then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false));
        }
        else {
            getItemsByCategory(cat)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false));
        }
    },  [cat]);

        
    return (
        <div>
            
            <div className="Body">
                <h1 className="greeting">{props.greeting}</h1>
                <ItemList data={data}/>
            </div>
            <div className="loader">
            { isLoading && <Waveform size={20}
                                    speed={1.9} 
                                    color="gray"
            />}
            </div>
        </div>
    )
}

export default ItemListContainer;