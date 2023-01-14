import Badge from 'react-bootstrap/Badge';

function VariationsExample() {
  return (
    <div>
      <Badge bg="primary ">
       <h3> Happy <br></br></h3>
      </Badge>{' '}
      <Badge bg="secondary">
      <h3> Birthday<br></br></h3>
      </Badge>{' '}
      <Badge bg="success">
      <h3> My<br></br></h3>
      </Badge>{' '}
      <Badge bg="danger">
      <h3> Love<br></br></h3>
      </Badge>{' '}
      <Badge bg="info">
      <h3> Nikki💝<br></br></h3>
      </Badge>
    </div>
  );
}

export default VariationsExample;