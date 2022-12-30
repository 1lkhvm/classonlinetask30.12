import React from 'react'
import './style.scss'
export default function PortfolioComponents() {
    return (
        <>
            <div className='portfolio-card'>
                <h1>
                    Portfolio
                </h1>
                <div className='portfolio-card1'>
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/1.jpg' />
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/2.jpg' />
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/3.jpg' />

                </div>
                <div className='portfolio-card2'>
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/4.jpg' />
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/5.jpg' />
                    <img src='https://startbootstrap.github.io/startbootstrap-creative/assets/img/portfolio/fullsize/6.jpg' />
                </div>
                <div className='portfolio-dowloand'>
                    <h3>
                        Free Download at Start Bootstrap!
                    </h3>
                    <button>DOWLOAND NOW</button>
                </div>
            </div>

        </>
    )
}
