const fs = require('fs');

const dataFile = 'data.json';

const loadItems = () => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveItems = (items) => {
  fs.writeFileSync(dataFile, JSON.stringify(items, null, 2));
};

// Add, list, and remove functionalities

module.exports = {
  // Implement your functions here
};
