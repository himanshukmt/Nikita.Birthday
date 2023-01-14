import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import  Image from 'C:/Birthday/nikita/src/IMG_20230113_011155.jpg';
import Image1  from 'C:/Birthday/nikita/src/IMG_20221002_193044.jpg';
import Image2  from 'C:/Birthday/nikita/src/IMG_20230113_011206.png';
function GroupExample1() {
  return (
    <CardGroup className='himanshu'>
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>🎉Happy Birthday Dear🎂</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>💗Love You💓</Card.Title>
         
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>🎊Happy Birthday Dear🎂</Card.Title>
          
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default GroupExample1;