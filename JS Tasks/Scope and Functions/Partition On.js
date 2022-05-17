function partitionOn(pred, items) {
    var temp = [],temp1 = [];
    items.forEach(element => {
      if(!pred(element)){
        temp.push(element);
      }
      else{
        temp1.push(element);
      }
    });
    for(var i = 0;i<temp.length;i++){
      items[i] = temp[i];
    }
    for(var j = 0;j<temp1.length;j++){
      items[i+j] = temp1[j];
    }


//function partitionOn(pred, items) {
//var tarr = items.filter(ele => pred(ele));
    //var farr = items.filter(ele => !pred(ele));
    //items.splice(0);
    //items.push(...farr);
    //items.push(...tarr);
    //return farr.length;
 // }
