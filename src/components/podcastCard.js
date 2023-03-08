import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PodcastCard({ podcast }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Link to={`/podcast/${podcast.id}`}>
          <Card.Text className="text-uppercase">{podcast.name}</Card.Text>
        </Link>
        <Card.Text>Author: {podcast.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PodcastCard;
