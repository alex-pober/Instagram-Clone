import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {

    return(
      <>
      <p className="madeby">Made proudly by:</p>
        <div className='footer-bar'>
            <div>
              <p>Alex Poverezhskiy</p>
                <div className="icons">
                  <a href="https://github.com/alex-pober">
                    <FaGithubSquare className="footerIcon" />
                  </a>
                  <a href="https://www.linkedin.com/in/alexpober">
                    <FaLinkedin className="footerIcon" />
                  </a>
                </div>
            </div>
            <div className="infoContainer">
              <p>Joaquin Guitart</p>
                <div className="icons">
                  <a href="https://github.com/jaguitart">
                    <FaGithubSquare className="footerIcon" />
                  </a>
                  <a href="https://www.linkedin.com/in/joaquin-guitart-a950ab63/">
                    <FaLinkedin className="footerIcon" />
                  </a>
                </div>
            </div>
            <div className="infoContainer">
              <p>Christopher Hauser</p>
                <div className="icons">
                  <a href="https://github.com/christopher-hauser">
                    <FaGithubSquare className="footerIcon" />
                  </a>
                  <a href="https://https://www.linkedin.com/in/christopher-hauser-083723bb/">
                    <FaLinkedin className="footerIcon" />
                  </a>
                </div>
            </div>
            <div className="infoContainer">
              <p>Andres Aguilar</p>
              <div className="icons">
                <a href="https://github.com/droid97">
                  <FaGithubSquare className="footerIcon" />
                </a>
                <a href="https://www.linkedin.com/in/andres-aguilar-6408aa227/">
                  <FaLinkedin className="footerIcon" />
                </a>
              </div>
            </div>
        </div>
      </>
    );

}


export default Footer;
