import { useState } from "react"

import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly h-16 bg-backgroundWhite shadow-md w-full">
      <ul className="flex gap-4 items-center text-m">
        <li className="font-mono text-xl mr-12">
          <Link to="/">ecoHorizon.com</Link>
        </li>
        <li>
          {/* <Link to="/knowledgebase">Knowledgebase</Link> */}
          <Link to="/knowledgebase">Tudásbázis</Link>
        </li>
        <li>
          {/* <Link to="/contacts">Contacts</Link> */}
          <Link to="/contacts">Kapcsolatok</Link>
        </li>
        <li>
          {/* <Link to="/forms">Forms</Link> */}
          <Link to="/forms">Űrlapok</Link>
        </li>
      </ul>
      <div></div>
      <ul className="flex items-center justify-center gap-4">
        <li className="text-sm">
          {/* <Link to="/login">Login</Link> */}
          <Link to="/login">Bejelentkzés</Link>
        </li>
        <li className="text-sm">
          {/* <Link to="/signup">Signup</Link> */}
          <Link to="/signup">Regisztráció</Link>
        </li>
      </ul>
      <div className="cursor-pointer">
        {/* <Moon size={18} /> */}
        <Sun size={18} />
      </div>
    </div>
  )
}

export default Navbar
