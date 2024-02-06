import React from "react";
import hand_icon     from "../Assets/hand_icon.png";
import arrow_icon   from "../Assets/arrow.png";
import hero_img    from "../Assets/hero_image.png";
const Hero = () => {    
    return (
        <>
            <main>
                <section className="banner_page mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="">
                                    <div className="">
                                        <div className="mb-5">
                                            <h5 className="h6">NEW ADDIVALS ONLY</h5>
                                            <h1 className="display-3 "><b>New<span><img src={hand_icon} className="w-25" alt=""/> </span><br/> collections for everyone</b></h1>
                                        </div>
                                        <button className="btn btn-danger rounded">lotest collection</button>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-6">
                                <div>
                                    <img src={hero_img} className="w-75" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
        </>
    );
}
export default Hero;