import React from 'react'
import Profilepic from '../assets/images/profilepic-576x432.png'
import '../css/header.css'
import Helmet from 'react-helmet'

class Header extends React.Component {
    render() {

        return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Title</title>
              <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
              <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
              <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="OTAxZDg1NTktY2NhOS00MGVkLWIyOGQtNTdiNWViZTc0ZjBjNjM3MDU5NDMwMDE3Njk1ODY2"></script>
            </Helmet>
            <div className="userphoto">
                <a href="https://salemaziel.com">
                <img className="photo" src={Profilepic} alt=""></img></a>
                <h1 className=""> @rbl_art760</h1>
            </div>
        </>
        )

    }
}

export default Header