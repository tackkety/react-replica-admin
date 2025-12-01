import { useEffect } from 'react';

const SkillsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startIndividualSkillLoading();
        }
      });
    }, { threshold: 0.3 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const startIndividualSkillLoading = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    
    skillBars.forEach((bar: any) => {
      bar.style.width = '0%';
      bar.classList.remove('animating');
    });
    
    skillPercentages.forEach((percentage: any) => {
      percentage.textContent = '0%';
      percentage.classList.remove('counting');
    });
    
    skillBars.forEach((bar: any, index: number) => {
      const targetWidth = bar.getAttribute('data-width');
      const percentageElement = skillPercentages[index] as HTMLElement;
      
      setTimeout(() => {
        bar.style.setProperty('--target-width', targetWidth + '%');
        bar.classList.add('animating');
        animatePercentage(percentageElement, 0, parseInt(targetWidth), 1500);
      }, index * 400);
    });
  };

  const animatePercentage = (element: HTMLElement, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const updatePercentage = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      
      element.textContent = currentValue + '%';
      
      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      } else {
        element.textContent = end + '%';
        element.classList.add('counting');
      }
    };
    
    requestAnimationFrame(updatePercentage);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills_section">
        <div className="skills_head">
          <h2 className="heading">Our <span>Skills</span></h2>
        </div>

        <div className="skills_main_enhanced">
          {/* Technical Skills */}
          <div className="skill-category technical">
            <div className="category-header">
              <div className="category-icon">
                <i className='bx bx-code-alt' style={{ color: 'rgb(255, 255, 255)' }}></i>
              </div>
              <div className="category-title">
                <h3>Programming Skills</h3>
                <span>Development & Programming</span>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">HTML/CSS/JAVASCRIPT</span>
                <span className="skill-percentage">100%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="98" data-skill="html-css"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">REACT/TYPESCRIPT/PHP</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="87" data-skill="javascript"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">PYTHON/BASH/SQL</span>
                <span className="skill-percentage">87%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="92" data-skill="python"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">JAVA/C++/C#</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80" data-skill="react"></div>
              </div>
            </div>
          </div>
          
          {/* Design Skills */}
          <div className="skill-category design">
            <div className="category-header">
              <div className="category-icon">
                <i className='bx bx-palette' style={{ color: 'rgb(255, 255, 255)' }}></i>
              </div>
              <div className="category-title">
                <h3>Design Skills</h3>
                <span>Visual & Creative</span>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Graphic Design</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90" data-skill="graphic-design"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Video Editing</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85" data-skill="video-editing"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">UI/UX Design</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="95" data-skill="ui-ux"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Motion Graphics</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90" data-skill="motion-graphics"></div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="skill-category design">
            <div className="category-header">
              <div className="category-icon">
                <i className='bx bx-brain' style={{ color: 'rgb(255, 255, 255)' }}></i>
              </div>
              <div className="category-title">
                <h3>Technical Skills</h3>
                <span>Builds & Delivers</span>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Front-end/Back-end</span>
                <span className="skill-percentage">100%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="100" data-skill="graphic-design"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Cybersecurity/Ethical Hacking</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75" data-skill="video-editing"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Creative Branding/Marketing</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="95" data-skill="ui-ux"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">AI/Automation</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80" data-skill="motion-graphics"></div>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="skill-category soft">
            <div className="category-header">
              <div className="category-icon">
                <i className='bx bx-group' style={{ color: 'rgb(255, 255, 255)' }}></i>
              </div>
              <div className="category-title">
                <h3>Soft Skills</h3>
                <span>Professional & Personal</span>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Communication/Collaboration</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="95" data-skill="communication"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Teamwork/Adaptability</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="95" data-skill="teamwork"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Problem Solving/Innovation</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80" data-skill="problem-solving"></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Attention to Detail/Flexible Workflow</span>
                <span className="skill-percentage">87%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="100" data-skill="self-motivation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;