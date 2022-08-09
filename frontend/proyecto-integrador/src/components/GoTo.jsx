import React from 'react'
import { Link } from "react-router-dom";

function GoTo({ irA, texto }) {
  return (
    <Link to={irA}>{texto}</Link>
  )
}

export default GoTo