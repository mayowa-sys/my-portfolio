import { useState } from 'react';
import './../styles/work.css';
import afretec from './../assets/health_challenge.png';
import rashidat from './../assets/rashidat.png';
import kehinde from './../assets/kehinde.png';

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "AFRETEC-UNILAG Innovation Challenge",
      description: "Designed and deployed the competition's informational website for the Innovation-in-Health Challenge 2025, improving outreach and engagement with participants and spectators.",
      tech: ["React", "Web Design", "IT Support"],
      image: afretec,
      link: "https://afretec-unilag-innovation.onrender.com/",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      type: "single"
    },
    {
      id: 2,
      title: "Client Portfolio Websites",
      description: "Delivered end-to-end full-stack implementations for two professional portfolio websites, improving clients' online visibility and professional presence.",
      tech: ["React", "Node.js", "Express", "Render"],
      portfolios: [
        {
          image: rashidat,
          link: "https://rashidatbalogun.onrender.com/",
          name: "Rashidat Balogun"
        },
        {
          image: kehinde,
          link: "https://kehindemuraina.onrender.com/",
          name: "Kehinde Muraina"
        }
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      type: "double"
    },
    {
      id: 3,
      title: "Movie Search Application",
      description: "A dynamic movie search app built with modern frameworks, featuring real-time search functionality and detailed movie information display.",
      tech: ["React", "API Integration", "JavaScript"],
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      link: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      type: "single"
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h2 className="work-heading">MY WORK</h2>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project-item">
              {/* Project Frame(s) */}
              {project.type === "single" ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-frame-wrapper"
                >
                  <div 
                    className="project-frame"
                    style={{ '--gradient': project.gradient }}
                  >
                    <div className="frame-inner">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <span className="view-project">View Project →</span>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="dual-frames-wrapper">
                  {project.portfolios.map((portfolio, idx) => (
                    <a 
                      key={idx}
                      href={portfolio.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-frame-wrapper small"
                    >
                      <div 
                        className="project-frame small"
                        style={{ '--gradient': project.gradient }}
                      >
                        <div className="frame-inner">
                          <img 
                            src={portfolio.image} 
                            alt={portfolio.name}
                            className="project-image"
                          />
                          <div className="project-overlay">
                            <span className="view-project">{portfolio.name} →</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Project Details */}
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}