import './App.css';
import Header from './Header/Header.js'
import Blog from './Blog/Blog.js'
import Floor from './Floor/Floor.js'
import Home from './Home/Home.js'
import NoPage from './NoPage/NoPage.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/*" element={<NoPage />} />
            </Routes>
            <Floor />
        </Router>
    );
}

export default App
