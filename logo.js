function createLogo({ text, textColor, shape, shapeColor }) {
    // Create an SVG string based on user input
    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" font-size="48" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
    `;
  
    return svg;
  }
  
  module.exports = {
    createLogo,
  };