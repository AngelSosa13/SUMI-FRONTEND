import React, { useEffect, useState, componentDidMount } from 'react'
import "../css/pages.css"
import "../css/navbar.css"
import { AddBtn } from "./addButton"

export function Notes() {
    const [backEndData, setBackEndData] = useState([{}])
    const [searchData, setSearchData] = useState([{}])
    const [val, setVal] = useState('')

    const search2 = async (event) => {
      event.preventDefault()
      const value = event.target.value;
      setVal(event.target.value);
      fetch(`/notes/title/${value}`).then(
          response => response.json(),
          console.log(value)
        ).then(
          data=>{
            setBackEndData(searchData)
            setSearchData(data)
          }
        )
    }

    async function search(event) {
      event.preventDefault()
      const value = event.target.value;
      setVal(event.target.value);
      fetch(`/notes/title/${value}`).then(
          response => response.json(),
          console.log(value)
        ).then(
          data=>{
            setBackEndData(searchData)
            setSearchData(data)
          }
        )
    }

    useEffect(()=>{
      fetch("/notes").then(
        response => response.json()
      ).then(
        data=>{
          setBackEndData(data)
        }
      )
    }, [])

    return(
        <div className="main-notes">
          <nav className="nav-notes sticky-top">
              <ul className="nav-list">
                  <form className="d-flex" role="search">
                  <input value={val} onChange={search2} className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"></input>
                  </form>
              </ul>
            </nav>
            <div className="notes-container">
                { searchData !== "undefined" ? (
                  backEndData === "undefined" ? (
                    <p>Loading...</p>
                  ) : (
                    backEndData.map((note, index) => (
                        <div key={index} className="note-card card border-0 rounded">
                            <p>{note._id}</p>
                            <h2 className='note-title'>{note.title}</h2>
                            <p className='note-content'>{note.content}</p>
                        </div>
                    ))
                  )  
                ) : (
                  searchData.map((note, index) => (
                    <div key={index} className="note-card card border-0 rounded">
                        <p>{note._id}</p>
                        <h2 className='note-title'>{note.title}</h2>
                        <p className='note-content'>{note.content}</p>
                    </div>
                  ))
                )}

            </div>
            <AddBtn />
        </div>
    )

}

const Nav = (bool) => {

};

/*                  <div className="note-card card border-0 rounded">
                      <h2 className='note-title'>title</h2>
                      <h5 className='note-content'>content fgññldfljmdlñ liñdfhvñklduifngv vñdugjnñodufhngviñudbnvñudnf nvkl blkdfvbkdb nvkudbfvi ubliauniubsflisvsñkudfvb ñsnvñuod nvñsdfnvñ iuhn ibnnsdfvbusdfb vñlisufbvn ibvisbfvli sbfvlib fi viufhvibrdib irdbvib iluhvi budrvb </h5>
                  </div>
                  <div className="note-card card border-0 rounded">
                      <h2 className='note-title'>title</h2>
                      <h5 className='note-content'>content</h5>
                  </div>
                  <div className="note-card card border-0 rounded">
                      <h2 className='note-title'>title</h2>
                      <h5 className='note-content'>content</h5>
                  </div>*/


/*const fetchRandomDog = () => { 
setIsLoading(true);
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((dog) => {
    setImageUrl(dog.message);
    setIsLoading(false);
  });
};

if (isLoading) {
return (
  <div className="App">
    <h1>Cargando...</h1>
  </div>
);
}*/