import { useEffect, useState } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      
      sections.forEach((sec: any) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link: any) => {
            link.classList.remove('active');
          });
          const activeLink = document.querySelector(`header nav a[href*=${id}]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });

      // Sticky navbar
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      // Remove toggle icon and navbar when scrolling
      setMenuActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">Afrirobot</a>

      <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleMenuClick}></i>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skill</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;