import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

// Components
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

// CSS Styles
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* Main */}
      <div className="main">
        {/* Body */}
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        {/* Footer */}
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
