import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {keyword ? <h1>Search Result</h1> : <h1>Lastest Products</h1>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}

      {!keyword && (
        <div className='adCard-container'>
          <Card className='my-3 p-2 adCard'>
            <i className='fas fa-thumbs-up fa-3x mt-3'></i>
            <Card.Body>
              <Card.Title className='font-weight-bold'>
                High Quality Image
              </Card.Title>
              <Card.Text>
                All digital materials are high definition ready to print. No
                water marks.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='my-3 p-2 adCard'>
            <i className='fas fa-stream fa-3x mt-3'></i>
            <Card.Body>
              <Card.Title className='font-weight-bold'>
                Life time access
              </Card.Title>
              <Card.Text>
                Purchase onec, you have access to these material forever and
                different locations! Just login your account and download.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='my-3 p-2 adCard'>
            <i className='fas fa-dollar-sign fa-3x mt-3'></i>
            <Card.Body>
              <Card.Title className='font-weight-bold'>
                More Value Less Cost
              </Card.Title>
              <Card.Text>
                Teach can be difficult especially when you need to search for
                resource. We provide everything you need for your kids at a
                lower cost to save your time, and enjoy with your kids.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
