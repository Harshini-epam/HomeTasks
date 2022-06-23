function cache(func) {
    const cachedResults = {};
    return (...args) => {
      console.log(args);
      var key = JSON.stringify(args);
     
      if (!(key in cachedResults)) {
        const result = func.apply(null, args);
        cachedResults[key] = result;
      } 
          return cachedResults[key];
    };
  }
