import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
    
  } from 'reactstrap'
  import Primario from './primario';
  import '../app.css'
  import '../css/cardcontent.css'
import Header from './header';



 


function cardContent() {
    
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        [
            {
                name : 'Primeiro.primeiro',
                url : 'Primeiro.primeiro'
            },
            {
                name : 'Primeiro.segundo',
                url : 'Primeiro.segundo'
            }
        ],
        [
            {
                name : 'Segundo.primeiro',
                url : 'Segundo.primeiro'
            },
            {
                name : 'Segundo.segundo',
                url : 'Segundo.segundo'
            }
        ],
        [
            {
                name : 'Terceiro.primeiro',
                url : 'Terceiro.primeiro'
            },
            {
                name : 'Terceiro.segundo',
                url : 'Terceiro.segundo'
            }
        ]
    ];

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
                    <div className='items'>
                        <div className='items-head'>
                            <h3>Linktree Dashboard</h3>
                            <hr/>
                        </div>
                            {categoria.map( (x, y) => {
                              return <Primario Cat={x} Sub={subcategorias[y]} key={x} />;
                                })}
                    </div>
                Some quick example text blah blah blah

                </CardText>
                <Button>Check It Out</Button>
                
        </CardBody>
        </Card>
    )
}

export default cardContent