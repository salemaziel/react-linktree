import React from 'react'
import Profilepic from '../assets/images/profilepic-576x432.png'
import '../css/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="userphoto">
                <a href="https://salemaziel.com">
                <img className="photo" src={Profilepic} alt=""></img></a>
                <h1 className=""> @rbl_art760</h1>
            </div>

        )

    }
}

export default Header