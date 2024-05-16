import React from 'react'
import Hero from './Hero'
import Services from './Services';

const HeaderContent = () => {

    const imgHero = "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
    <div>
        <Hero data={imgHero} />
        <Services data={imgHero} />
    </div>
    </>
  )
}

export default HeaderContent