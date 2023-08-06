import './AboutMe.css';
import Squiggle from './Squiggle.js'

function AboutMe() {
  return (
    <div className='aboutme'>
      <Squiggle/>
      <div className='boxContainer'>
          <div className='boxwrap'>
              <h1 className=''> Status</h1>
              <div className='box1-c'> 
               <p>
               • Standing Junior at the University of 
                <span style={{color: "orange"}}> Illinois </span> 
                <span style={{color: "blue"}}> Urbana-Champaign </span>
                <br/>
                <br/>
                • Major: Computer Science + Economics
                <br/>
                <br/>
                • GPA: 3.77/4.0
                <br/>
                <br/>
                • Activites: Association of Computer Machinery (ACM), SigMobile, Pakistani Student Association (PSA)
                <br/>
                <br/>
                • Achivements: Dean's List 2022
               </p>
             
              </div>
            </div>
            <div className='boxwrap'>
              <h1 className=''> Courses</h1>
              <div className='box1-c'>
                <p className='courseDesc'>
                • CS173 - Discrete Structures
                <br/>
                • ECON302 - Microeconomic Theory 
                <br/>
                • ECON203 - Economic Statistics II (Linear Regression)
                <br/>
                • CS128 - Introduction to Computer Science II (C++)
                <br/>
                • CS225 - Data Structures (C++)
                <br/>
                • MATH257 - Linear Algebra with Computational Applications (Python)
                <br/>
                • CS361 - Probability & Statistics in Computer Science (Python)
                <br/>
                • ECON455 - Economics of Poverty Alleviation (R)

                </p>
              </div>
            </div>
      </div>
      <div className='boxContainer secondboxContainer'>
          <div className='boxwrap'>
            <h1> Hobbies</h1>
                    <div className='box1-c'>
                      <div className='hobbies'>
                          <div className='music'>
                            <span className='hobbiesheader'> Music</span>
                              <p>
                              • Jay-Z 
                              <br/>
                              • Kid Cudi
                              <br/>
                              • The Strokes
                              <br/>
                              • Coldplay
                              </p>
                          </div>
                          <div className='music'>
                            <span className='hobbiesheader'> Video Games</span>
                            <br/>
                            <p>
                              • Runescape
                              <br/>
                              • League of Legends
                              <br/>
                              • Smash Bros
                              <br/>
                              • Legend of Zelda
                            </p>
                          </div>
                          <div className='music'>
                            <span className='hobbiesheader'> Sports Teams</span>
                              <br/>
                             <p>
                             • Chicago Bulls
                              <br/>
                              • Chicago Bears
                              <br/>
                              • Dallas Mavericks
                              <br/>
                              • Tennesee Titans
                             </p>
                          </div>
                        </div>
                    </div>
          </div>
          <div className='boxwrap'>
              <h1> Skills</h1>
                  <div className='box1-c'>
                  <p className='skillsText'>
                     • Leadership - Coordination of Work and Communication between all members
                      <br/>
                      • Adaptability - Immediate response to unexpected situations
                      <br/>
                      • Teamwork - Understanding my role and how to work with peers
                      <br/>
                      • Resourcefulness - Being able to find creative solutions to problems
                     </p>

                  </div>
            </div>

      </div>

    </div>
  );
}

export default AboutMe;
