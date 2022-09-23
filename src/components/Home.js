import React from 'react'
function Home() {
  return (
    <div className='text-center'>
      <img src="/img/cart.png" width={100} height={100}/>
      <div className='img-wrapper '>
        <img src='https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/5/q/s/z15-z15-i-kall-original-imaggwsm9z2hyeuh.jpeg?q=70'/>
      </div>
      <div className='img-wrapper'>
      <span>Name: 100.00</span><br/>
        <span>Price: I Phone</span>
      </div>
      <div className='btn-wrapper'>
       <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Home