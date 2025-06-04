import React from "react";
import Heade from './components/Heade.jsx';
import Navbar from './components/Navbar.jsx';
import PostList from './components/PostList.jsx';
import TagList from './components/TagList.jsx';
import Footer from './components/footer.jsx'; 

import './styles/App.css';
import './styles/AppLayout.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Heade />
      <main className="main-layout">
        <div className="content-wrapper">
          <PostList />
          <TagList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
