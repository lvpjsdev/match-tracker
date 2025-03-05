import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from './api/api';
import { Loader } from './components/Loader';
import { ErrorComponent } from './components/ErrorComponent';
import { MatchCard } from './components/MatchCard';
import { Header } from './components/Header';

function App() {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });

  return (
    <>
      <Header isDisabled={isFetching} isError={isError} onRetry={refetch} />
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
