import React, { useEffect, useState } from 'react'
import "../css/navbar.css"

const Nav = () => {
    const [backEndData, setBackEndData] = useState([{}])
    const [val, setVal] = useState('');
    function search(event) {
        event.preventDefault();
        const value = event.target.value;
        setVal(event.target.value);
        fetch(`/notes/title/${value}`).then(
            response => response.json()
          ).then(
            data=>{
              setBackEndData(data)
            }
          )
    }
    return (
        <nav className="nav-notes sticky-top">
            <ul className="nav-list">
                <li><a hfre="#" className="nav-a">Notes</a></li>
                <li>Count</li>
                <form className="d-flex" role="search">
                <input value={val} onChange={search} className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"></input>
                </form>
            </ul>
        </nav>
    );
  };

export function NavBar() {
    return (
        <Nav />
    );
  }

