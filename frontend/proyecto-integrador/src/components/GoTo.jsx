import React from 'react'
import { Link } from "react-router-dom";

function GoTo({ argumentOne, argumentTwo }) {
  return (
    <Link style={{textDecoration: 'none', color: '#846FEF'}} to={argumentTwo}>
        {argumentOne}
    </Link>
  )
}

export default GoTo