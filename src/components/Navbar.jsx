import React, { useState } from "react";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Settings");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "#140C73" }}>
      <Container>
        <Toolbar sx={{ justifyContent: "center" }}> {/* Center the items */}
          <Button
            sx={{
              color: activeTab === "Home" ? "#140C73" : "#140C73",
              borderBottom: activeTab === "Home" ? "2px solid #140C73" : "none",
            }}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </Button>
          <Button
            sx={{
              color: activeTab === "Course Details" ? "#140C73" : "#140C73",
              borderBottom: activeTab === "Course Details" ? "2px solid #140C73" : "none",
            }}
            onClick={() => handleTabClick("Course Details")}
          >
            Course Details
          </Button>
          <Button
            sx={{
              color: activeTab === "Student Bio" ? "#140C73" : "#140C73",
              borderBottom: activeTab === "Student Bio" ? "2px solid #140C73" : "none",
            }}
            onClick={() => handleTabClick("Student Bio")}
          >
            Student Bio
          </Button>
          <Button
            sx={{
              color: activeTab === "Payment" ? "#140C73" : "#140C73",
              borderBottom: activeTab === "Payment" ? "2px solid #140C73" : "none",
            }}
            onClick={() => handleTabClick("Payment")}
          >
            Payment
          </Button>
          <Button
            sx={{
              color: activeTab === "Login" ? "#140C73" : "#140C73",
              borderBottom: activeTab === "Login" ? "2px solid #140C73" : "none",
            }}
            onClick={() => handleTabClick("Login")}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

