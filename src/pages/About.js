const About = () => {
  return (
    <>
      <div class="about-container">
    <div class="home-container">
      <div class="about-header">About the Bongo Boys</div>
      <div class="about-photo"><img src={require("./bono_pics/menubono.png")}/></div>
    </div>
    <div class="about-body"> A collaborative and revolutionary music project between Bongo, famed singer of U3, and his clones. Bongo Boys
    aims to take music where music has yet to travel. Literally. Whether its a Walmart checkout ailse, or a Denny's at 3 a.m.,
    the Bongo Boys are there. Any time. Any Place. Any Event. No other artist has yet to go through these lengths to deliver their music to the masses.</div>
    {/* <div class="menu-photo">  
      <img src={require("./bono_pics/bonowalmart.png")}></img>
    </div>
    <div class="menu-photo">
      <img src="bono_pics/bonolivingroom.png"></img>
      <img src="bono_pics/bonodisney2.png"></img>
      <img src="bono_pics/bonosplash.png"></img>
    </div>*/}
    <div class="masonry">
      <div class="item"><img src={require("./bono_pics/bonowalmart.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonolivingroom.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonodisney2.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonograve2.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonosplash.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonodennys.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonograve.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonowalmart2.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bonoballoon.png")}></img></div>
      <div class="item"><img src={require("./bono_pics/bongo.png")}></img></div>

    </div>

  </div>
    </>)
  };
  
  export default About;