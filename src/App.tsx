import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from './api/api';
import { Loader } from './components/Loader';
import { ErrorComponent } from './components/ErrorComponent';

function App() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <>
      {isError && <ErrorComponent />}
      {isFetching && <Loader />}
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
