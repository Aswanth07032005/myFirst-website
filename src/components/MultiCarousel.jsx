import { Card, Col, Container, Image, Row } from "react-bootstrap";

function MultiCarusel() {

    const carouselItem = [
         {img:"https://i03.appmifile.com/255_operator_in/16/06/2025/c81178abf10813dc707e005cdabb9ba8.jpg?thumb=1&w=1320&f=webp&q=85",
            text:"Xiaomi Priority Club"
         },

         {img:"https://i03.appmifile.com/941_operator_in/16/06/2025/b27f2b42d8541e84280860d973774a81.jpg?thumb=1&w=1320&f=webp&q=85",
            text:"Explore Xiaomi"



         },
         {img:"https://i03.appmifile.com/613_operator_in/16/06/2025/7817d9df9d0afdd63a3598fdefef947d.jpg?thumb=1&w=1320&f=webp&q=85",
            text:"Xiaomi Rewards Club"
         }

    ]

    return(
       <Container>
        <Row>
           {carouselItem.map((item,index)=>(
             <Col key={index} className="p-1" sm={6} md={4}>
             <Card >
                <Card.Img className="w-100" src={item.img}/>
                <Card.Text className="my-3 text-center fw-bold">{item.text}</Card.Text>
             </Card>
            </Col>
           ))}
        </Row>
       </Container>
    )
}

export default MultiCarusel;