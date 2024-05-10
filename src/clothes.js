function Clothes ({lastState}) {
    return (
        <div className="products">
            {lastState.map((element => {
                const {id,name,price,image} = element;
                return (
                <div key = {id} className="product-card" >
                    <div className="product-info">
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <img src = {image} alt="pic" width="400px" height="500px"/>
                </div>
                </div>
                )
            })) }
        </div>
    )
}

export default Clothes;