import React from 'react'
import Logo from "./Website.svg"
import WebHello from "./Hello-web (1).svg"

const Home = () => {
  return (
    <div className='home_field'>
      <div className="about_card" style={{position:"relative", width: 900}}>
        <div ><img src={Logo} alt="logo" style={{width: 300}}/></div>
        <div><h1>Hello Website</h1></div>
        <div style={{position:"absolute", top:"97%", right:0}}><img src={WebHello} alt="logo2" style={{width: 300}} /></div>
      </div>
    </div>
  )
}

export default Home