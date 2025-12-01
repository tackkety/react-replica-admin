const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      <div className="orbit-ring orbit-ring-1">
        <div className="orbit-icon"><i className='bx bx-code-alt'></i></div>
        <div className="orbit-icon"><i className='bx bx-paint'></i></div>
        <div className="orbit-icon"><i className='bx bx-video'></i></div>
        <div className="orbit-icon"><i className='bx bx-cog'></i></div>
      </div>
      <div className="orbit-ring orbit-ring-2"></div>
      <div className="orbit-ring orbit-ring-3">
        <div className="orbit-icon"><i className='bx bx-cloud'></i></div>
        <div className="orbit-icon"><i className='bx bx-chip'></i></div>
        <div className="orbit-icon"><i className='bx bx-game'></i></div>
        <div className="orbit-icon"><i className='bx bx-bot'></i></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;