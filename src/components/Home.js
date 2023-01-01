import React from "react"
function Home(props) {
    console.log(props)
    return (
        <div>
      

            <div className="container">
                <h1>iPhone</h1>
                <div className="imag-wrapper">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjbSAM1W81qW9qH5T_9wbW2PfKwF2_18x_CJzo2Y&s" alt="item" width={200} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone8
                    </span><br />
                    <span>
                        Price:$1000.00
                    </span>
                </div>
                <div className="btn-wrapper -item">
                    <button className="mybtn" onClick={() => props.addTocartHandler({
                        price: 1000,
                        name: "i - Phone8"
                    })}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home