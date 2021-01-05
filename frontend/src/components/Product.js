import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card
      className='my-3 p-2'
      style={{
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ borderRadius: '10px' }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
