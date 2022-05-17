function add(a){ 
     let res = function (b){ 
   return add(a+b);
    }
   res.valueOf = function(){
      return a;
    }
      return res;
  }
  
