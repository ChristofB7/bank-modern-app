import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /></h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I'm in the business of misery let's take it from the top she's got a body like an hourglass, it's ticking like a clock.</p>
            <Button styles='mt-10' />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className='w-[100%] h-[100%]' />

        </div>
    </section>
)

export default CardDeal