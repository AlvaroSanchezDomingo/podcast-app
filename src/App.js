import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import MainView from './pages/mainView';
import PodcastPage from './pages/podcastPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/podcast" element={<PodcastPage />} />
      <Route path="*" element={<MainView />} />
    </Routes>
  );
}

export default App;
