import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/firestore";
import "bootstrap/dist/css/bootstrap.css"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx"
import "./ItemDetailContainer.css"

function ItemDetailContainer (){
    const [data, setData] = useState ({});
    const [error, setError] = useState (false);
    const [isLoading, setIsLoading] = useState (true);
    const { id } = useParams();

    useEffect(() => {
        getSingleItem(id)
        .then((respuestaDatos) => setData(respuestaDatos))
        .catch((errormsg) => 
        {setError(errormsg.message);
        })
        .finally( () => setIsLoading(false));
    }, [id]);

    if (isLoading) {
        return <>
        { error ? 
            <div>
                <h2>Error obteniendo los datos</h2>
                <p>{error}</p>
            </div>
            :
            <h2 className="loader">Cargando. . .</h2>
        } 
        </>
    }

    return (
        <div>   
            <div className="mainContainer">
                <ItemDetail item= {data}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;