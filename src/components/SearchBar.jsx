import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import "./style.css"

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 25,
        border: "3px solid #FFFFFF",
        pl: 2,
        pr: 1,
        boxShadow: "none",
        mr: { sm: 2 },
      }}
      style={{
        boxShadow:
          "rgba(255, 105, 180, 0.3.5) 0px 8px 10px -2px, rgba(255, 205, 180, 0.3) 0px 0px 0px 1px",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
        style={{
          paddingRight: "1rem",
          outlineColor: "transparent",
          color: "pink",
        }}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "#fd4885" }}>
        <SearchRoundedIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
