import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from './api/api';
import { Loader } from './components/Loader';

function App() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <>
      {isFetching && <Loader />}
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
