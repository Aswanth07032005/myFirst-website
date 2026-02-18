import { Col, Container, Row } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import HomeTab from "../components/HomeTabe";
import ExclusiveOffers from "../components/ExclusiveOffers";
import MultiCarusel from "../components/MultiCarousel";
import FooterLogo from "../components/FooterLogo";
import Footer from "../components/HomeFooter";
import HomeFooter from "../components/HomeFooter";


function Home() {
  return (
    <>
      <HomeCarousel />

      <Container className="mt-4">
        <Row>
          <Col className="text-center ">
            <h2 className="fw-bold"> Featured Products</h2>
          </Col>
        </Row>
      </Container>

      <HomeTab />
      <ExclusiveOffers/>

      <Container className="my-4">
        <Row>
          <Col className="text-center">
          <h2 className="fw-bold">Explore Xiaomi</h2>
          </Col>
        </Row>
      </Container>
      <MultiCarusel/>
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
          <h2 className="fw-bold">Xiaomi Support</h2>
          </Col>
        </Row>
      </Container>
      <FooterLogo/>
    <HomeFooter/>
    </>
  );
}
export default Home;
