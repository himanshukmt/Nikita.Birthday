import Carousel from 'react-bootstrap/Carousel';
import Image from 'C:/Birthday/nikita/src/2023-01-12.png';
import Image1 from 'C:/Birthday/nikita/src/2023-01-120.png';
import Image2 from 'C:/Birthday/nikita/src/IMG_20221002_193250.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={Image}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;