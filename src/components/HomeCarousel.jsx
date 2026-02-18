import { Carousel, Image } from "react-bootstrap";
import "./HomeCarousel.css"

function HomeCarousel() {
    return(
         <Carousel>
      <Carousel.Item>
         <Image className="carousel-image-width" src="https://i03.appmifile.com/576_operator_in/09/02/2026/2202312ffd9293779151267f213eac2a.jpg?thumb=1&w=5120&f=webp&q=85"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <Image className="carousel-image-width" src="https://i03.appmifile.com/630_operator_in/06/02/2026/86fb384024207f844876fc56b7a0fe0d.png?thumb=1&w=2800&f=webp&q=85"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="carousel-image-width" src="https://i03.appmifile.com/576_operator_in/09/02/2026/2202312ffd9293779151267f213eac2a.jpg?thumb=1&w=5120&f=webp&q=85"/>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default HomeCarousel;