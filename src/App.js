import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path = "/" element={<News key="general" pageSize={6} category={'general'} apiKey={apiKey} />} />
        <Route exact path = "/business" element={<News key="business" pageSize={6} category={'business'} apiKey={apiKey} />} />
        <Route exact path = "/entertainment" element={<News key="entertainment" pageSize={6} category={'entertainment'} apiKey={apiKey} />} />
        <Route exact path = "/health" element={<News key="health" pageSize={6} category={'health'} apiKey={apiKey} />} />
        <Route exact path = "/science" element={<News key="science" pageSize={6} category={'science'} apiKey={apiKey} />} />
        <Route exact path = "/sports" element={<News key="sports" pageSize={6} category={'sports'} apiKey={apiKey} />} />
        <Route exact path = "/technology" element={<News key="technology" pageSize={6} category={'technology'} apiKey={apiKey} />} />
      </Routes>
    </div>
  );
}

export default App;
