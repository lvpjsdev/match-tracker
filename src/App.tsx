import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from './api/api';
import { Loader } from './components/Loader';
import { ErrorComponent } from './components/ErrorComponent';
import { MatchCard } from './components/MatchCard';

function App() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <>
      {isError && <ErrorComponent />}
      {isFetching && <Loader />}
      <>
        {data?.data.matches.map((match, index) => (
          <MatchCard
            key={index}
            homeTeamName={match.homeTeam.name}
            awayTeamName={match.awayTeam.name}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            status={match.status}
          />
        ))}
      </>
    </>
  );
}

export default App;
