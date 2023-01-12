import { Button } from 'devextreme-react';
import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const UpdateUrlTest = () => {
  const [count, setCount] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearch = () => {
    setCount(count + 1);
    setSearchParams({ count: `${count}` });
  };

  return <Button onClick={() => updateSearch()}>Click</Button>;
};

export default UpdateUrlTest;
