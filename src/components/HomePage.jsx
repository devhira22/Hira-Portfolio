

import React from 'react';
import './HomePage.css';

function HomePage({ currentPage = 0, setCurrentPage = () => {} }) {

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 5);
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + 5) % 5);
  };

  const services = [
    'Website Development',
    'Programming Education',
    'Practical Training',
    'Portfolio Development',
    'Business Profile Creation'
  ];

  const images = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqKiOSgHxdPXiR2ZrjDQBX7g20xH3SMEuZknagGs7OQ&s=10',
      alt: 'Web development workspace'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6E8Ko1tJAmibAyc9n6AI3z0X6ejiZyiF4z0fQ4_Efxg&s=10',
      alt: 'Lecturer'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTM1o013atR2CPuX-vMOcTXkuhH0aI6x_MZ5_W6qqU0A&s=10',
      alt: 'business profiles'
    }
  ];

  return (
    <div className="portfolio-home">

      {/* HOME PAGE */}
      {currentPage === 0 && (
        <section className="portfolio-section home-section">

          <div className="home-container">

            <div className="home-text">

              <h1>
                Hello, I'm <span>Hira</span>
              </h1>

              <h2>Web Developer & Lecturer</h2>

              <p className="welcome-text">
                <span>Welcome to my portfolio!</span> I provide
                professional web development and IT education services,
                focusing on modern website development, responsive
                designs, and practical programming knowledge.
              </p>

              <p>
                I specialize in front-end web development, designing
                attractive website layouts, and developing interactive
                web applications using modern technologies. My goal is
                to combine creativity, technical expertise, and education
                to build meaningful digital experiences while helping
                others grow their skills in the technology field.
              </p>

              {/* SERVICES */}
              <div className="services">

                <h3><span>Services</span> Offered</h3>

                <div className="services-list">
                  {services.map((service, index) => (
                    <div className="service-item" key={index}>
                      <h4>{service}</h4>
                    </div>
                  ))}
                </div>

              </div>

              <button
                className="about-btn"
                onClick={() => setCurrentPage(1)}
              >
                About Me
              </button>

            </div>

            {/* HOME IMAGES */}
            <div className="home-image">

              <h3>My Work <span>& Interests</span></h3>

              <div className="image-gallery">

                {images.map((image, index) => (
                  <div className="image-item" key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>
      )}    
{/* ABOUT PAGE */}
{currentPage === 1 && (
  <section className="portfolio-section about-section">
    <h1>Intro<span>duction</span></h1>
    <div className="about-container">
      <div className="about-text">
        <p>
          I am a passionate Web Developer and Lecturer with
          an interest in creating modern, responsive, and
          user-friendly websites. I enjoy developing creative
          digital solutions and teaching students modern
          programming technologies.
        </p>

        <p>
          My expertise includes frontend development,
          website designing, React applications, programming
          education, practical training, and professional
          portfolio creation. I believe in continuous learning,
          creativity, and sharing technical knowledge.
        </p>

        <p>
          My goal is to build meaningful digital experiences
          and help students develop the skills they need
          to succeed in the technology industry.
        </p>
      </div>

      {/* ABOUT IMAGES */}
      <div className="about-container">

  <div className="about-profile">
    <img
      src="https://i.pinimg.com/736x/49/84/b6/4984b66e0ab96137c9b5594e886fdedb.jpg"
      
    />
  </div>
</div>
    </div>

    {/* SKILLS CATEGORIES */}
    <div className="about-skills">

      <h2><span>My </span>Professional <span>Skills</span></h2>

      <div className="skill-category-container">

        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>


        <div className="skill-category">
          <h3>Programming Skills</h3>
          <ul>
            <li>Programming Fundamentals</li>
            <li>JavaScript Programming</li>
            <li>Problem Solving</li>
            <li>Logical Thinking</li>
            <li>Debugging</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Teaching & Training</h3>
          <ul>
            <li>Programming Education</li>
            <li>Web Development Teaching</li>
            <li>Practical Training</li>
            <li>Student Guidance</li>
            <li>Technical Presentations</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Professional Skills</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Project Management</li>
            <li>Communication</li>
            <li>Team Collaboration</li>
            <li>Continuous Learning</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Business & Portfolio</h3>
          <ul>
            <li>Business Profile Creation</li>
            <li>Personal Portfolio Development</li>
            <li>Professional Web Presence</li>
            <li>Digital Content Presentation</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

      </div>
    </div>

  </section>
)}


      {/* SKILLS PAGE */}
      {currentPage === 2 && (
        <section className="portfolio-section">

          <h1>My <span>Skills</span></h1>

          <p>My skills include developing attractive and responsive websites using HTML, CSS, JavaScript, React.js, and Bootstrap. I have a good
             understanding of website layouts, user interface design, and frontend development. I am also skilled in programming fundamentals, problem-solving,
              and creating interactive web applications. Besides development, I have experience in teaching,
             student guidance, and practical training. I always focus on improving my technical knowledge, learning new tools, and delivering quality work.</p>
           <h2>Peogramming Languages & Software</h2>
          <div className="skills-container">
            {[
              
              'HTML',
              'CSS3',
              'JavaScript',
              'React.js',
              'Bootstrap',
              'Responsive Design',         
              'Git & GitHub',          
              'Web Development (etc)'
            ].map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill}
              </div>
            ))}
          </div>
            <h2>Teaching Skills</h2>
           <div className="skills-container">
            {[
              'Programming Education',
              'Web Development Teaching',
              'Practical Training',
              'Student Guidance',
              'Technical Presentations'
            ].map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill}
              </div>
            ))}
          </div>
             <h2>Businesss Profiles</h2>
           <div className="skills-container">
            {[
              'Business Profile Creation',
              'Personal Portfolio Development',
              'Professional Web Presence',
              'Digital Content Presentation',
              'Website Maintenance',
            ].map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill}
              </div>
            ))}
          </div>

                 <h2>Software Skills</h2>
           <div className="skills-container">
            {[
              'VS Code',
              'Node.js',
              'MS Word',
              'MS Excel',
              'PowerPoint',
              'WordPress',
              'MongoDB',
              'Postman',
            ].map((skill, index) => (
              <div className="skill-item" key={index}>
                {skill}
              </div>
            ))}
          </div>


                 <div className="footer-links">
          <h1>My <span>Projects</span></h1>
          <a href="https://pattern-designer.vercel.app/" target="_blank" rel="noopener noreferrer">
           Pattern React.jsx Projects
          </a>
          <a href="https://hoor-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            Portfolio Website
          </a>
          <a href="https://punjab-medical-institute-pmi.vercel.app/" target="_blank" rel="noopener noreferrer">
          College React.jsx Projects
          </a>
          <a href="https://share.google/KdOerPWw2eQJ8P7jl" target="_blank" rel="noopener noreferrer">
            Businees Profile
          </a>    
        </div>   
        </section>
      )}

      {/* QUALIFICATION PAGE */}
      {currentPage === 3 && (
        <section className="portfolio-section">
         
  <h1>My <span>Qualification</span></h1>

  <div className="qualification-item">
    <h3>Academic Qualification</h3>
    <h4>Bachelor's Degree</h4>
    <p>
      Completed my Bachelor's Degree in Computer Science with a focus on
      developing academic knowledge, communication skills,
      and technical understanding.
    </p>
    <p><strong>Institute:</strong> Superior College</p>
    <p><strong>Affiliated:</strong> KFUEIT</p>
    <p><strong>2023:</strong> 2026</p>

    <h4>Assosiate Degree Program</h4>
    <p>
      Completed my Assosiate Degree Program in Computer Science with a focus on
      developing academic knowledge, communication skills,
      and technical understanding.
    </p>
    <p><strong>Institute:</strong> Superior University of Lahore</p>
  
    <p><strong>2021:</strong> 2023</p>
  </div>

  <div className="qualification-item">
    <h3>Professional Learning</h3>
    <h4>Web Development</h4>
    <p>
      Learned frontend web development, including HTML5,
      CSS3, JavaScript, React.js, and Bootstrap. Developed
      practical skills in creating responsive and
      user-friendly websites.
    </p>
    <p><strong>Institute:</strong> Arfa Tower Lahore</p>
  
    <p><strong>2026</strong></p>

   
    <h4>Seo & Digital Marketing</h4>
    <p>
     I have knowledge of SEO and Digital Marketing, including keyword research, on-page SEO, content optimization, and website performance improvement.
      I understand how to improve website visibility in search engines and attract relevant visitors through effective digital strategies.
    </p>
    <p><strong>Institute:</strong> Future Innovative Technology Township Lahore</p>
  
    <p><strong>2026</strong></p>
  </div>

  <div className="qualification-item">
    <h3>Technical Training</h3>
    <p>
      Gained practical knowledge of programming fundamentals,
      website designing, problem-solving, debugging,
      and modern web development tools.
    </p>
  </div>

  <div className="qualification-item">
    <h3>Teaching & Professional Development</h3>
    <p>
      Developed teaching and communication skills through
      programming education, student guidance, practical
      training, and sharing technical knowledge.
    </p>
  </div>       
        </section>
      )}

      {/* EXPERIENCE PAGE */}
      {currentPage === 4 && (
        <section className="portfolio-section">
             <h1>My <span>Experience</span></h1>
             <div className="experience-container">

    
</div>
          <div className="experience-item">
      <h3>Lecturer</h3>
      <p>
        Teaching programming and web development concepts
        through practical learning, interactive lessons,
        and technical guidance. Helping students improve
        their programming and problem-solving skills.
      </p>
    </div>
    <div className="experience-item">
      <h3>SEO & Digital Marketing</h3>
      <p>
        Working with SEO techniques, keyword research,
        content optimization, website visibility, and
        digital marketing strategies to improve online presence.
      </p>
    </div>

    <div className="experience-item">
      <h3>Website Designing</h3>
      <p>
        Designing attractive website layouts, landing pages,
        and professional portfolio websites with a focus
        on responsive design and user experience.
      </p>
    </div>
    {/* EXPERIENCE IMAGES */}
  <div className="experience-gallery">

    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
      alt="Web development"
    />

    <img
      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
      alt="Lecturer teaching"
    />

    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      alt="SEO and digital marketing"
    />

    <img
      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
      alt="Website designing"
    />

  </div>

          

        </section>
      )}

      {/* PAGE NAVIGATION */}
      <div className="page-navigation">

        <button onClick={previousPage}>
          Previous
        </button>

        <span>{currentPage + 1} / 5</span>

        <button onClick={nextPage}>
          Next
        </button>

      </div>

    </div>
  );
}

export default HomePage;
