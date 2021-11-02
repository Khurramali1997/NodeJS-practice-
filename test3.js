module.exports = function (first, second) {
  this.first = first;
  this.second = second;
  this.sum = () => {
    return `Sum =${this.first + this.second}`;
  };
};
