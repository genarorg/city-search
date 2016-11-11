/**
 * The search Api. This follows the module pattern and exports
 * an object with a `search` method.
 */
export default (function Api() {

  // Our data set. In a private function.
  const _getCities = function() {
    return ['san', 'san jose', 'santiago', 'san francisco', 
            'santa rosa', 'san juan', 'sabadell', 'salamanca', 
            'salt lake city', 'salinas', 'salem', 'sausalito', 
            'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 
            'tijuana', 'tieling', 'thousand oaks', 'thunder bay', 
            'tokyo', 'tulsa'];
  };

  /**
   * This method will take a term as a string and will match it against
   * the cities dataset.
   * @param {string} term - The search term.
   * @return {array} - The search results. Null if term is null or empty.
   */
  const search = function(term) {
    // Get an array of results.
    if (term) {
      return _getCities().filter((city) => city.indexOf(term.toLowerCase()) != -1);
    } else {
      return null;
    }
  };
  
  return { search };

})();
