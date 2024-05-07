import React from 'react';

const Card = () => {
    return (
        <div className='card'>
            <div className='offer'>
                <h2>Service offered</h2>
            </div>
            <div className='card-info'>
                <div className='cards'>
                    <h1>Pool Table</h1>
                    {/* <img src='/src/assets/Jojo_logo.png' alt='pool table'/> */}
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className='cards'>
                    <h1>Lodges</h1>
                    {/* <img src='/src/assets/Jojo_logo.png' alt='rooms'/> */}
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className='cards'>
                    <h1>Karaoki</h1>
                    {/* <img src='/src/assets/Jojo_logo.png' alt='karaoki'/> */}
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className='cards1'>
                    <h1>Ample space for hosting ceremonies</h1>
                    {/* <img src='/src/assets/Jojo_logo.png' alt='hall'/> */}
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className='cards'>
                    <h1>Restaurant</h1>
                    {/* <img src='/src/assets/Jojo_logo.png' alt='restaurant'/> */}
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
export default Card;