import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import FeedPage from '../pages/feedPage/FeedPage';
import SinglePost from '../components/singlePost/SinglePost';

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* All routes that should show Navbar + Sidebar go inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<FeedPage />} />
          <Route path="posts/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
