import React from 'react'


function YouTubeVideo({ videoId }) {
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}


function Navbar() {
    const navItems= (
      <>
       <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
      </>
    );
  return (
    <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">{navItems} </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">VIKAS STUDY ROOM</a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItems}</ul>
  </div>
  <div className="hidden md:block">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  <div className="">
    <a className="bg-white text-black p-2 rounded-md  duration-300">Login</a>
  </div>
</div>
</div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">PRIJECTS</div>
  <div className="carousel carousel-end rounded-box">
<div className="carousel-item">
      <YouTubeVideo videoId="7l5UgtWfnw0" /> 
    </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="DBMPXJJfQEA" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="W3sOezpkGWI" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="F5EYXc91Cpo" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="k-rokZ6qmzg" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="9OGhwqWQ8fI" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="DBMPXJJfQEA" /> 
  </div>
</div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">MERN STACK BLOGGING PROJECTS</div>
  <div className="carousel carousel-end rounded-box">
<div className="carousel-item">
      <YouTubeVideo videoId="WsoT4sHX7oU" /> 
    </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="MZyz139mamw" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="veA5tIwU1XI" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="5jnMFO8Im00" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="Ql__w3_rMW0" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="VYq0E3a2H5A" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="Qq1wIn7_QA8" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="TyDomOpaP4I" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="5268ugI9DLA" /> 
  </div>
</div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
      <YouTubeVideo videoId="y8FwPnK4LxY" /> 
    </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="QmX6fXjp78Y" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="B9plcgbcNFk" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="xQVtBPT3i_g" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="apJYbb_ZJjg" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="dJqDLvLOzbg" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="-hZX61AU1Mw" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="1DO3BOeCnRU" /> 
  </div>
  <div className="carousel-item">
      <YouTubeVideo videoId="uvhL-Axgz2M" /> 
  </div>
  </div>
</div>

    </>
    
  )
}


export default Navbar