class Formatter {
  //add static methods here

  // capitalize
  // 1) is a static method
  // 2) uppercases the first letter in a String
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  // sanitize
  // 1) is a static method
  // 2) removes non-alphanumeric characters except for dash, single quote and space
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  };

  // titleize
  // 1) is a static method
  // 2) capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  // 3) always capitalizes the first word
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const title = str
      .toLowerCase()
      .split(' ')
      .map(word => exceptions.includes(word) ? word : this.capitalize(word))
      .join(' ')

    return this.capitalize(title);
  };
};
// console.log(Formatter.titleize('getting giggles'));
// console.log(Formatter.titleize('a tale of two cities'));