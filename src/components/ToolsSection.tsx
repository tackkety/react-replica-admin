import { useEffect } from 'react';

const ToolsSection = () => {
  useEffect(() => {
    // Initialize tools/clients slider
    const toolsContainer = document.querySelector('.tools-track');
    if (toolsContainer) {
      // Add dynamic logo items here if needed
    }
  }, []);

  return (
    <section className="tools" id="tools">
      <h2 className="heading">Our <span>Clients</span></h2>
      <div className="tools-container">
        <div className="tools-track">
          {/* Logo items will be dynamically added here */}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;