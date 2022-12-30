import React from 'react'
import './style.scss'
function ServicesComponents() {
    return (
        <>
            <div className='service-section'>
                <div className='service-container'>
                    <div className='service-text'>
                        <h3>At Your Service</h3>
                    </div>
                    <div className='service-card'>
                        <div className='card'>
                            <i class="fa-regular fa-gem"></i>
                            <h4>Sturdy Themes</h4>
                            <p>Our themes are updated regularly to keep them bug free!</p>
                        </div>
                        <div className='card'>
                            <i class="fa-solid fa-laptop"></i>
                            <h4>Up to Date</h4>
                            <p>All dependencies are kept current to keep things fresh.</p>
                        </div>

                        <div className='card'>
                            <i class="fa-solid fa-globe"></i>
                            <h4>Ready to Publish</h4>
                            <p>You can use this design as is, or you can make changes!</p>
                        </div>

                        <div className='card'>
                            <i class="fa-regular fa-heart"></i>
                            <h4>Made with Love</h4>
                            <p>Is it really open source if it's not made with love?</p>
                        </div>


                    </div>


                </div>
            </div>
        </>
    )
}

export default ServicesComponents