import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    
  } from 'reactstrap'
import Primario from './primario';
import '../css/cardcontent.css'
import Header from './header';
import Gallery3 from './gallerymusic'
import '../css/gallery.css'
import Gallerymusic from './gallerymusic';




function Cardcontentmusic() {
    
    return (
        <Card className="card-bg">
            <Header />
        <CardBody>
        
          <CardTitle>
              <h1 style={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  display: 'relative',
              }}>
                  IG Bio Link Tree (Think Of better name) 
                  </h1> 
            </CardTitle>
            <CardSubtitle>Just a test: Subtitle</CardSubtitle>
           
            
            <CardText>
            <Gallerymusic />
              
                
                </CardText>
                
        </CardBody>
        </Card>
    )
}

export default Cardcontentmusic