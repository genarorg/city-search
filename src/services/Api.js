export default (function Api() {

  const _getCities = function() {
    return ['san', 'san jose', 'santiago', 'san francisco', 
            'santa rosa', 'san juan', 'sabadell', 'salamanca', 
            'salt lake city', 'salinas', 'salem', 'sausalito', 
            'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 
            'tijuana', 'tieling', 'thousand oaks', 'thunder bay', 
            'tokyo', 'tulsa'];
  };

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
