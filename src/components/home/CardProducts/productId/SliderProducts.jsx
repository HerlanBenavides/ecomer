import React, { useState } from 'react'
import './style/sliderImg.css'

const SliderProducts = ({product}) => {
    const [indexImg, setIndexImg] = useState(1)

    console.log(product);

const handlePrev = () => {
    if(indexImg - 1 < 0){
        setIndexImg(product.productImgs.length - 1)
    }else{
        setIndexImg(indexImg - 1)
    }
    
}

const handleNext = () => {
    if(indexImg + 1 > product.productImgs.length - 1){
        setIndexImg(0)
    }else{
        setIndexImg(indexImg + 1)
    }
    
}

    return (
        <div className="slider">
            <button onClick={handlePrev} className='slider_prev'>&#60;</button>
            <div className="slider_static">
                <div style={{transform:`translateX( calc( -${indexImg} / 3 *100%))`}} className="slider_move">
                    {
                        product.productImgs.map(url =>(
                            <div key={url} className="slider_img-conteiner">
                                <img className='slider_img' src={url} alt="" />
                            </div>
                        ))
                    }
            
                </div>
            </div>
            <button onClick={handleNext} className='slider_next'>&#62;</button>
        </div>
    )
}

export default SliderProducts