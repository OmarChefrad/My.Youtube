import React from "react"
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { logo } from "../utils/constants"
import SearchBar from "../components/SearchBar"

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#ffecef",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", height: "3.5rem" }}
    >
      <img
        src={logo}
        alt="logo"
        height={45}
        width={60}
        style={{
          boxShadow:
            "rgba(255, 105, 180, 0.35) 0px 6px 20px, rgba(255, 20, 147, 0.19) 0px 3px 3px",
          borderRadius: "0.9rem",
        }}
      />
      <p className="logo">My.YouTube</p>
      <p className="MA">MA</p>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
