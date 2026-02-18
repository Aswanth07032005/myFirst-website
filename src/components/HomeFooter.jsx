import { Col, Container, Row } from "react-bootstrap";
import "./HomeFooter.css";

function HomeFooter() {
  

  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col className="p-6 text-center my-3" md={12}>
          {/* <table>
           <tbody>
             <tr>
                <td>Xiomi</td>
            </tr>
            <tr>
                <td>Xiomi</td>
            </tr>
           </tbody>
          </table> */}
          <h6>Xiomi India.com </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeFooter;
