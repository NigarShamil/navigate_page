import React from 'react'
import Logo from "./Website.svg"
import WebHello from "./Hello-web (1).svg"

const Home = () => {
  return (
    <div className='home_field'>
      <div className="about_card" style={{display:"flex", justifyContent: "center", height: "100vh", flexDirection:"column" }}>
        <div><h1>Hello Website</h1></div>
        <div ><img src={WebHello} alt="logo2" style={{width: 300}} /></div>
      </div>
    </div>
  )
}

export default Home