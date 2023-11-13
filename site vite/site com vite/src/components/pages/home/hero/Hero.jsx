import React, { useState } from "react"
import { hero } from "../../../../Data"
import "./hero.css"

import Card from "./Card"
//import SinglePageSlider from "../../singlePage/slider/SinglePageSlider"

const Hero = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
                {/*<SinglePageSlider />*/}
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero