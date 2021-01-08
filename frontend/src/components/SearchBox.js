import { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
      setKeyword('');
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        size='sm'
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 form-control'
      ></Form.Control>
      {/* <Button
        type='submit'
        variant='outline-dark'
        size='sm'
        className='p-2 px-3 text-dark search-btn'
      >
        Search
      </Button> */}
    </Form>
  );
};

export default SearchBox;
