import React from "react"
import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import "./style.css"
import { logo } from "../utils/constants"
import SearchBar from "../components/SearchBar"

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "linear-gradient(190deg,#ffc6cf,#ffedf0) ",
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
            "rgba(255, 105, 180, 0.35) 0px 10px 15px, rgba(255, 20, 147, 0.19) 0px 5px 5px",
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
