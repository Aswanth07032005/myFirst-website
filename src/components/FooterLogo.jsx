import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "./FooterLogo.css"

function FooterLogo() {
  const logoItem = [
    {
      title: "Xiaomi Exchange",
      text: "Save More & Go Green With Your Old Device",
    },
    {
      title: "Mi Complete Prote...",
      text: "Protect Your Device In Less Than ₹2/Day",
    },
    { title: "Service Centers", text: "Right Where You Need Us" },
    { title: "Right Where You Need Us", text: "हिंदी / English" },
  ];

  return (
    <Container>
      <Row>
        {logoItem.map((item,index) => (
          <Col sm={6} md={3} key={index}>
            <Card className="border-non">
              {" "}
              <Col><Image className="footer-logo-width" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1280px-Xiaomi_logo_%282021-%29.svg.png?20221112002517"/></Col>
              <Card.Title className="text-center mt-3">{item.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FooterLogo;
