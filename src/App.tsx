import React, { RefObject } from 'react';
import "./App.css"
import { useRef } from 'react';

function onIconHover(ref: RefObject<HTMLDivElement>){
  let element = ref.current as HTMLDivElement
  let child_nodes: NodeListOf<ChildNode> = element.childNodes
  element.style.backgroundColor = "white"
  element.style.color = "black"
  element.className = `${element.className} trans`
  for (var i = 0; i < child_nodes.length; i ++){
    if (child_nodes[i].nodeName === "IMG"){
      var img = child_nodes[i] as HTMLImageElement;
      img.src = require(`${img.id}-inverse.png`)
      break;
    }
  }
}

/*
    Adding new features
*/

function onIconHoverEnded(ref: RefObject<HTMLDivElement>){
  let element = ref.current as HTMLDivElement
  let child_nodes: NodeListOf<ChildNode> = element.childNodes
  element.style.backgroundColor = "#1e272e"
  element.style.color = "white"
  for (var i = 0; i < child_nodes.length; i ++){
    if (child_nodes[i].nodeName === "IMG"){
      var img = child_nodes[i] as HTMLImageElement;
      img.src = require(`${img.id}.png`)
      break;
    }
  }
}

/*
        Structure:
        
        - NavBar
        - Previous work slide
        - IntroSection
        - Solutions section(Icons with different )
        - Where services are currently provided
        - Footer( Address, Contact Info)

*/

function NavBar(){
  return (
    <>
       <nav className="navbar navClass navbar-expand-lg sticky-top" style={{backgroundColor: "#0a0d09"}}>
          <div className="container-md g-0 text-center ms-3">
            <span className="mb-0 h1 navHeader">Cortez & Concrete</span>
          </div>
       </nav>
    </>
  )
}

const CreateImageDiv = (props : any) => {
  let class_value;
  if (props.index === 0){
    class_value = "carousel-item active"
  }
  else{
    class_value = "carousel-item"
  }
  return <>
      <div className={class_value}>
         <img src={require(`images/demoSlides/demo${props.index + 1}.jpg`)} className="d-block w-100 object-fit-lg-contain " alt="..." style={{maxHeight: "800px"}}></img>
      </div>
  </>
}

function WorkSlideSection(){
  /*
        TODO: dynamically add all images from src/images/*
  */
  const image_list: Array<string> = ["images/demoSlides/demo1.jpg", "images/demoSlides/demo19.jpg", "images/demoSlides/demo17.jpg"]

  return (
    <>
        <div style={{ backgroundColor: "#111610"}}>
          <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {Array.from({ length: 19 - 1 + 1 }, (_, index) => (
                <CreateImageDiv key={index} index={index}/>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    </>
  );
}

function IntroSection(){
  const image1 = require("images/demoSlides/demo4.jpg")
  return (
    <>
              <div className="container-fluid text-center" style={{ backgroundColor: "#f5f6fa"}}>
                <div className="row align-items-center" style={{color: "black"}}>
                  <div className="col">
                    <h1 className="display-5 fw-bolder mt-3">Full Construction and Maintantence Services</h1><br/>
                    <p className="fs-4 fw-light">We bring excellence and Quality right to you. Our team have decades of experience in the field and are ready to create your dream today!</p>
                    </div>
                  <div className="col-sm">
                          <img alt="Pic Here" src={image1} className='rounded m-5 w-75' style={{maxHeight: "500px"}}></img>
                  </div>
                </div>


          </div>
    </>
  );
}


function IconSolutions(){
  const bricks = require("images/icons/bricks.png")
  const cement = require("images/icons/cement-truck.png")
  const construction = require("images/icons/construction.png")

  /*
          TODO: enable hover over affects with icons
  */
  const floor_icon = useRef<HTMLDivElement>(null);
  const cement_icon = useRef<HTMLDivElement>(null);
  const construction_icon = useRef<HTMLDivElement>(null);

  return (
    <>
          <div className="container-fluid text-center" style={{ backgroundColor: "#1e272e"}}>
            <h1 className="display-6 p-5 fw-bolder" style={{ color: "#45aaf2" }}>OUR SOLUTIONS</h1><br/>
            <div className="container-fluid text-center pb-5">
            <div className="row">
              <div className="col">
              <div className="card border-0" style={{ backgroundColor: "#1e272e", color: "white" }} ref={floor_icon} onMouseEnter={(e) => onIconHover(floor_icon)} onMouseLeave={(e) => onIconHoverEnded(floor_icon)}>
                 <img id="images/icons/bricks" src={bricks} className="card-img-top object-fit-contain mt-3" alt="..." style={{ maxHeight: "100px"}}></img>
                  <div className="card-body">
                    <h5 className="card-title fs-2 fw-medium">Flooring</h5>
                    <p className="card-text">Expertise in Brick and Rock Flooring</p>
                  </div>
              </div>
              </div>
              <div className="col">
              <div className="card border-0" style={{ backgroundColor: "#1e272e", color: "white" }} ref={cement_icon} onMouseEnter={(e) => onIconHover(cement_icon)} onMouseLeave={(e) => onIconHoverEnded(cement_icon)}>
                 <img id="images/icons/cement-truck" src={cement} className="card-img-top object-fit-contain mt-3" alt="..." style={{ maxHeight: "100px"}}></img>
                <div className="card-body">
                  <h5 className="card-title fs-2 fw-medium">Cement</h5>
                  <p className="card-text">Experience in Concrete Solutions</p>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card border-0" style={{ backgroundColor: "#1e272e", color: "white" }} ref={construction_icon} onMouseEnter={(e) => onIconHover(construction_icon)} onMouseLeave={(e) => onIconHoverEnded(construction_icon)}>
                 <img id="images/icons/construction" src={construction} className="card-img-top object-fit-contain mt-3" alt="..." style={{ maxHeight: "100px"}}></img>
                <div className="card-body">
                  <h5 className="card-title fs-2 fw-medium">Construction</h5>
                  <p className="card-text">General Property Maintanence and Construction Work</p>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>

    </>
  );
}

function ServiceArea(){
  const image1 = require("images/static_google_map.png")
  return (
    <>
        <div className="container-fluid text-start" style={{ backgroundColor: "#111610" }}>
          <div className="row" style={{ color: "white"}}>
            <div className="col m-5 ps-5">
            <h2 className="display-7 p-3" style={{ color: "#45aaf2"}}>AREAS WE SERVICE</h2>
              <ul>
                  <li><p className="fs-3 fw-medium p-3">San Jose</p></li>
                  <li><p className="fs-3 fw-medium p-3">Cupertino</p></li>
                  <li><p className="fs-3 fw-medium p-3">Los Gatos</p></li>
                  <li><p className="fs-3 fw-medium p-3">San Francisco</p></li>
                  <li><p className="fs-3 fw-medium p-3">Fremont</p></li>
              </ul>
            </div>
            <div className="col">
                <img alt="Pic Here" src={image1} style={{ minHeight: "250px", minWidth: "250px"}} className='rounded img-thumbnail mt-5 mb-5'></img>
            </div>
        </div>
        </div>
    </>
  );
}

function Footer(){
  return (
    <>
        <div className="d-flex align-items-stretch" style={{ backgroundColor: "#0a0d09", color: "white" }}>
             <div className="container h-100">
              <h4 className="display-7"><strong>Contact:</strong></h4>
              <span><strong>Telephone:</strong> </span><a href="tel:+1 669-732-0066">(669)-732-0066</a><br/>
              <span><strong>Email:</strong> </span><a href="mailto:salvadoraldacocortez@icloud.com">salvadoraldacocortez@icloud.com</a>
              </div>
        </div>
    </>
  );
}

function App() {
  return (
    <>
      <NavBar/>
      <WorkSlideSection/>
      <IntroSection/>
      <IconSolutions/>
      <ServiceArea/>
      <Footer/>
    </>
  );
}

export default App;
