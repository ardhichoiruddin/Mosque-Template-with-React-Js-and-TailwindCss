import React, { useEffect } from 'react';
import Glide from "@glidejs/glide";


const Slider = ({ nameClass, sliderConfiguration, sliderBullets, children }) => {

    const slider = new Glide( `.${nameClass}`, sliderConfiguration );

    useEffect(() => {

        slider.mount()

        return () => slider.destroy();
        
    }, [slider])

    return(
        <>
        <div className={nameClass}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {
                        children
                    }
                </ul>
            </div>
            {
                sliderBullets ? (
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                    { 
                        Array.apply(0, Array(sliderBullets)).map(function (x, i) {
                            return <button key={i} className="glide__bullet" data-glide-dir={`=${i}`}></button>;
                        })
                    }
                    </div>

                ):null
            }
        </div>
        </>
    )
}

export default Slider;