import { Button, Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap"
import "./HomeTabe.css"

function HomeTab() {
    return(
       <Container className="mt-4">
        <Row>
            <Col>
             <Tabs  
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 mt-3 justify-content-center"
    >
      <Tab  className="tab-align" eventKey="event" title="Event">

       <Container>
        <Row>
            <Col md={6}>
            <Image  className="img-width box" src="https://i03.appmifile.com/480_operator_in/07/02/2026/651eb8c57e1fe8fca673ff142e5465ed.png?thumb=1&w=1680&f=webp&q=85" />
            </Col>

            <Col md={6}>
                 <Col className="text-center first-img-text-align">
                 <h1>Valentine’s Deals Live!</h1>
                 <p className="fs-4">Limited Period Offers</p>
                 <Button  variant="dark" className="rounded-3">Learn More</Button>
                 </Col>
            </Col>
        </Row>
       </Container>
      </Tab>
      <Tab eventKey="phones" title="Phones">
           
      </Tab>
      <Tab eventKey="smarttvs" title="Smart TVs">
       <Container>
        <Row>
            <Col md={6}>
            <Image  className="img-width box" src="https://i03.appmifile.com/480_operator_in/07/02/2026/651eb8c57e1fe8fca673ff142e5465ed.png?thumb=1&w=1680&f=webp&q=85" />
            </Col>

            <Col md={6}>
                 <Col className="text-center first-img-text-align">
                 <h1>Valentine’s Deals Live!</h1>
                 <p className="fs-4">Limited Period Offers</p>
                 <Button  variant="dark" className="rounded-3">Learn More</Button>
                 </Col>
            </Col>
        </Row>
       </Container>
      </Tab>
      <Tab eventKey="tablets" title="Tablets">
           <Col className="text-center">
           <h1>Pending</h1>
           </Col>
      </Tab>
      <Tab eventKey="lifestyle" title="Lifestyle">
      <Col className="text-center">
           <h1>Pending</h1>
           </Col>
      </Tab>
      
    </Tabs>
            </Col>
        </Row>
       </Container>
    )
}

export default HomeTab;