import React from 'react';


const SliderItem = ({image, addClasses, children}) => {

    const regex = /[,]/g;
    const classes = addClasses.toString().replace(regex,' ');

    return(
        <>
            <li className={`glide__slide ${classes}`} style={{ backgroundImage: `url(${image})`}}>
                {
                    children
                }
            </li>
        </>
    )
}

export default SliderItem;