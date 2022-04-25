function rentalCarCost(d) {
    // Your solution here
    var total=0;
  if(d==7||d>7)
  return 40*d-50;
  else if(d==3 || d>3 && d<7)
  return 40*d-20;
  else
  return 40*d;
  
  }