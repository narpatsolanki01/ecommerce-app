import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
const item = (props) => {
        return (
            <>
                <div className="col-md-3 p-4 mb-5">
                    <div className="card shadow rounded-0">
                      <div className="image_card">
                         <Link to={`/product/${props.id}`}> <img src={props.image} onClick={window.scrollTo(0,0)} className="w-100" alt="" /></Link>
                      </div>
                        <div className="card-body">
                            <div>
                                <p className="text-start">{props.name}</p>
                                <div className="d-flex ">
                                    <h3 className="">${props.new_price}</h3>
                                    <p className="mt-1 mx-3">${props.old_price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default item;