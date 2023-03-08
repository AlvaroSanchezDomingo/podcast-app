import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import MainView from './pages/mainView';
import PodcastPage from './pages/podcastPage';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainView />} />
        <Route path="podcast/:id" element={<PodcastPage />} />
        <Route path="*" element={<MainView />} />
      </Route>
    </Routes>
  );
}

export default App;
