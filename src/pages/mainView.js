import PodcastCard from '../components/podcastCard';
import { getPodcasts } from '../api/podcast-api';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainView = () => {
  const { isLoading, error, data } = useQuery('podcasts', getPodcasts);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  const podcasts = data;
  let podcastCards = podcasts.map((p) => (
    <Col key={p.id}>
      <PodcastCard key={p.id} podcast={p} />
    </Col>
  ));
  return (
    <Container>
      <Row>{podcastCards}</Row>
    </Container>
  );
};

export default MainView;
