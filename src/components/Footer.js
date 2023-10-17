import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Footer() {

    const { footerRef } = useContext(Context)

    return (
        <div className='Footer' ref={footerRef}>
            <h3>Made by TerexFed</h3>
            <h3>Thats all products you can see</h3>
        </div>
    )
}

export default Footer
