import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <Container>
        <div className="div" style={{ minHeight: "75vh" }}>
          {children}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayout;
