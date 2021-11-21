//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();
  // solution adds a setTimeout that places the recursive function inside the
  // task queue which allows the calling fn to run to completion -- clearing the stack
  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
}

removeItemsFromList();
