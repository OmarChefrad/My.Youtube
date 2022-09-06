import React from "react"
import { Stack } from "@mui/material"

import { categories } from "../utils/constants"

const selectedCategory = "Home"

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "scroll",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#ffc6cf",
          color: category.name === selectedCategory && "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#ffc6cf",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
)

export default SideBar
