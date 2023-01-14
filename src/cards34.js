import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import  Image from 'C:/Birthday/nikita/src/71Ub6aiMV5L._AC_UF1000,1000_QL80_FMwebp_.webp';
import Image1  from 'C:/Birthday/nikita/src/Animated-Happy-Birthday-Sweetheart-Gif_WJ4U_04190420.gif';
import Image2  from 'C:/Birthday/nikita/src/61znWfjJzcL._AC_UF1000,1000_QL80_FMwebp_.webp';
function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image} />
      </Card>
      <Card>
        <Card.Img variant="top" src={Image1} />
        </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
      </Card>
    </CardGroup>
  );
}

export default GroupExample;