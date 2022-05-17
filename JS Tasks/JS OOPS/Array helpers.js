Array.prototype.sum = function(){
  return this.reduce((a,b) => a+b,0)
}

Array.prototype.square = function(){
  return this.map((num) => num*num);
}

Array.prototype.cube = function(){
  return this.map((a) => a*a*a);
}

Array.prototype.even = function(){
  return this.filter((number) => number%2==0);
}

Array.prototype.odd = function(){
  return this.filter((num) => num%2==1);
}

Array.prototype.average = function(){
  return this.sum()/this.length;
}
