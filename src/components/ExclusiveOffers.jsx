import {  Card, Col, Container, Row } from "react-bootstrap";
import "./ExclusiveOffers.css"

function ExclusiveOffers() {
  const ExclusiveOffersitem = [
    {
      image:
        "https://i03.appmifile.com/289_operator_in/11/12/2025/d9556099a90ae3cddb99a7e9ff0e6e01.jpg?thumb=1&w=840&f=webp&q=85",
      title: "Free Spotify Premium Standard",
      Paragraph: "Enjoy up to 4 Months of Ad-free Music",
    },
    {
      image:
        "https://i03.appmifile.com/746_operator_in/19/12/2025/8eee8be793413481cbb5786e0945327b.jpg?thumb=1&w=840&f=webp&q=85",
      title: "Student Deals",
      Paragraph: "Unlock Xiaomi Deals for Students",
    },
    {
      image:
        "https://i03.appmifile.com/437_operator_in/09/07/2025/ac78d4770fa4329d64859b75da98e309.jpg?thumb=1&w=840&f=webp&q=85",
      title: "New User Zone",
      Paragraph: "Get the Xiaomi Store App",
    },
  ];

  function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}


  return (
    <Container className="mt-5">
      <Row className=" justify-content-between">
        {ExclusiveOffersitem.map((item,index)=>(
           <Col key={index} className="p-2" sm={6} md={4}>
          <Card className="p-4 " >
            <Card.Img className="box img-size" variant="top" src={item.image}/>
            <Card.Body>
              <Card.Title className="text-center fw-bold">{truncateString(item.title,15)}</Card.Title>
              <Card.Text>
               {item.Paragraph}
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ExclusiveOffers;
