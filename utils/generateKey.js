module.exports = function generateKey() {
    return Math.random().toString(36).substr(2, 20);
  };
  