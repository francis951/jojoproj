import React from 'react';

const Card = () => {
    return (
        <div className='card'>
            <div>
                <h2>Service offered</h2>
            </div>
            <div className='card-info'>
                <div>
                    <p>Pool Table</p>
                    <img src='/src/assets/Jojo_logo.png' alt='pool table'/>
                </div>
                <div>
                    <p>Lodges</p>
                    <img src='/src/assets/Jojo_logo.png' alt='pool table'/>
                </div>
                <div>
                    <p>Karaoki</p>
                    <img src='/src/assets/Jojo_logo.png' alt='pool table'/>
                </div>
                <div>
                    <p>Ample space for hosting ceremonies</p>
                    <img src='/src/assets/Jojo_logo.png' alt='pool table'/>
                </div>
                <div>
                    <p>Restaurant</p>
                    <img src='/src/assets/Jojo_logo.png' alt='pool table'/>
                </div>
            </div>
        </div>
    );
}
export default Card