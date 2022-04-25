function partitionOn(pred, items) {
    var tarr = items.filter(ele => pred(ele));
    var farr = items.filter(ele => !pred(ele));
    items.splice(0);
    items.push(...farr);
    items.push(...tarr);
    return farr.length;
  }
