import React, {useState, useEffect} from "react";


const Favourite = ({product}) => {
    const [favProduct, setFavProduct] = useState([]);

    useEffect(() => {
        const first = JSON.parse(localStorage.getItem("favourite")) || [];
        const second = JSON.parse(localStorage.getItem("cart")) || [];
        
        if (first.includes(product.id)) {
            setFavProduct((prev) => [...prev, "favourite"]);
        }
        if (second.includes(product.id)) {
            setFavProduct((prev) => [...prev, "cart"]);
        }
    }, []);
    
  return <div>Favourite</div>;
};

export default Favourite;
