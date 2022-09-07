import React from "react"
import { Stack } from "@mui/material"

import { categories } from "../utils/constants"
import "./style.css"

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    className="sideBar-scroll"
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      py: { sx: 0, md: 2 },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#fd4885",
          color: category.name === selectedCategory && "white",
          padding: "0.5rem 1rem",
          borderRadius: "7px",
          marginBottom: "1rem",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#fd4885",
            marginRight: "20px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)

export default SideBar
