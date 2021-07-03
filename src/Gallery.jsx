import React, { useState } from 'react';
import Menu from "./Menu";

const Gallery = () => {
    const [items, setItems]=useState(Menu);
    console.log(Menu);
  return (
        <>

            <h2 className="text-center mt-5">Order Your Food</h2>
            <hr />

            <div className="menu container mt-4">
                <div className="menu-tab d-flex justify-content-around">
                <button type="button" className="btn btn-warning">BreakFast</button>
                <button type="button" className="btn btn-warning">Lunch</button>
                <button type="button" className="btn btn-warning">Dinner</button>
                <button type="button" className="btn btn-warning">Eveninig</button>
                <button type="button" className="btn btn-warning">All</button>
                </div>
            </div>


            <div className="container-fluid food mt-4">
            
                {/*let {id, name, image, description, category, price}=elm;*/}
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                        {items.map((elem)=>
                        {
                            return(
                            <div className="item col-12 col-md-4 col-sm-6 col-lg-4 col-xl-4 my-2 mx-2">
                                <div className="item-inside row">
                                    <div className="col-12 col-md-12 col-lg-5 img-div">
                                        <img src={elem.image} alt="missing-img" className="img-fluid"/>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-7">
                                        <div className="main-title pt-4 pd-3">
                                            <h1>{elem.name}</h1>
                                            <p>{elem.description}</p>
                                        </div>

                                        <div className="menu-price-book">
                                            <div className="price-book-divide d-flex justify-content-between">
                                                <h4>Price {elem.price}</h4>
                                                <a href="#">
                                                    <button type="button" className="btn btn-primary">Order Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                        })}
                        </div>
                    </div>
                </div>
            
            </div>
     
      </>
  )
}

export default Gallery
