import React from 'react'
import Profilepic from '../assets/images/profilepic-576x432.png'
import '../css/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="userphoto">
                <img className="photo" src={Profilepic} alt="" />
                <h1 className=""> @rbl_art760</h1>
            </div>

        )

    }
}

export default Header