import data from '../podcast.json';
import PodcastCard from '../components/podcastCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainView = () => {
  const podcasts = data.podcasts.map((p) => {
    const podcast = {
      name: p['im:name'].label,
      id: p.id.attributes['im:id'],
      author: p['im:artist'].label,
      image: p['im:image'][0].label,
    };
    return podcast;
  });
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
