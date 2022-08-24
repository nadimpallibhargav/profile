import React from 'react';
import '../styles/styles.css';
import SideNav from '../components/SideNav';

const Home = () => {
  return (
    
      <div className="container-fluid">
        <div><br/><br/></div>
        <div className="row">
          <div className="col-md-3">
            <SideNav />          
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <h3>Some of my recent work</h3>
              </div>
              <div className="col-md-4 col">
                <a
                  href="http://ondway-dev.s3-website.ap-south-1.amazonaws.com/"
                >
                  <div className="project1 img"></div>
                </a>
                <a
                  href="http://ondway-dev.s3-website.ap-south-1.amazonaws.com/"
                  className="btn btn-block btn-dark my-4"
                >
                  View Live Project
                </a>
              </div>
              <div className="col-md-4 col">
                <a
                  href="https://nadimpallibhargav.github.io/hotel/"
                  
                >
                  <div className="project2 img"></div>
                </a>
                <a
                  href="https://nadimpallibhargav.github.io/hotel/"
                  className="btn btn-block btn-dark my-4"
                  >
                    View Live Project
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://www.botsync.co/"
                  
                >
                  <div className="project3 img"></div>
                </a>
                <a
                  href="https://www.botsync.co/"
                  
                  className="btn btn-block btn-dark my-4"
                  >
                  View Live Project
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://www.bangaloresoftwarefactory.com/"
                  
                >
                  <div className="project4 img"></div>
                </a>
                <a
                  href="https://www.bangaloresoftwarefactory.com/"
                  
                  className="btn btn-block btn-dark my-4"
                >
                  View Live Project
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://www.aestheticwed.com/"
                  
                >
                  <div className="project5 img"></div>
                </a>
                <a
                  href="https://www.aestheticwed.com/"
                  
                  className="btn btn-block btn-dark my-4">
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Home;