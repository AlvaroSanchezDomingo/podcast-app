import { Link, useParams } from 'react-router-dom';

const PodcastPage = () => {
  const { id } = useParams();
  return <Link to="/">Home {id}</Link>;
};

export default PodcastPage;
