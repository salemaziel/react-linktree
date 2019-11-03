import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
    Container,
  } from 'reactstrap'




const Background = () => {
        return (
    <div>
    <Container style={{
        backgroundImage: 'linear-gradient(to right, #55338d, #773c98, #9846a2, #b751aa, #d65db1)',
        padding: '100px',
        border: '20px',
        borderRadius: '15px'
    }}>
      <Card style={{
          backgroundColor: '#FFF',
          padding: '25px',
          border: '10px',
          borderRadius: '15px',
      }}>
        <CardBody>
          <CardTitle>
              <h1 style={{
                  textAlign: 'center',
                  fontSize: '36px',
                  textTransform: 'uppercase',
              }}>
                  Salem's IG Bio Link Test 
                  </h1> 
            </CardTitle>
                <CardSubtitle>Just a test</CardSubtitle>
                    <CardText>Some quick example text blah blah blah </CardText>
                    <Button>Button</Button>
        </CardBody>
      </Card>
      </Container>
    </div>
  )
}



export default Background