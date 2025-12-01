export const servicePricing = {
  'graphic-design': {
    name: 'Graphic Design',
    description: 'Professional graphic design services including YouTube thumbnails, Instagram posts, and advertisement designs. High-quality visuals that capture attention and drive engagement.',
    options: {
      'youtube-thumbnail': { 
        name: 'YouTube Thumbnail', 
        single: 15, 
        package: 100, 
        packageCount: 15 
      },
      'logo-design': { 
        name: 'Logo Design', 
        single: 45, 
        package: 200, 
        packageCount: 6 
      },
      'ads-design': { 
        name: 'Ads Design', 
        single: 15, 
        package: 100, 
        packageCount: 15 
      }
    }
  },
  'video-editing': {
    name: 'Video Editing',
    description: 'Expert video editing for both short-form and long-form content. Perfect for social media, YouTube, commercials, and corporate videos with professional quality.',
    options: {
      'short-form': { 
        name: 'Short Form Video', 
        single: 25, 
        package: 300, 
        packageCount: 15,
        description: 'Videos under 3 minutes (Reels, TikTok, Shorts)'
      },
      'long-form': { 
        name: 'Long Form Video', 
        single: 40, 
        package: 500, 
        packageCount: 15,
        description: 'Videos over 3 minutes (YouTube, Tutorials, Documentaries)'
      }
    }
  },
  'tech-development': {
    name: 'Tech Development',
    description: 'Comprehensive technology development services including websites, mobile apps, AI solutions, and security systems. Built with modern technologies and best practices.',
    options: {
      'web-development': {
        name: 'Web Development',
        tiers: [
          { name: '6 Pages Website', price: 300, description: 'Up to 6 pages with basic functionality' },
          { name: '6+ Pages Website', price: 450, description: '6+ pages with advanced features (up to $800)' }
        ]
      },
      'mobile-app': {
        name: 'Mobile App Development',
        tiers: [
          { name: 'Simple App', price: 500, description: 'Basic functionality and UI' },
          { name: 'Advanced App', price: 1000, description: 'Complex features and premium design' }
        ]
      },
      'ai-development': {
        name: 'AI Development',
        tiers: [
          { name: 'Simple AI', price: 1000, description: 'Basic AI integration and functionality' },
          { name: 'Advanced AI', price: 2000, description: 'Complex AI systems and machine learning' }
        ]
      }
    }
  }
};