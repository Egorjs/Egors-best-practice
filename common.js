var age = document.getElementsByClassName('age');
// var sort = document.querySelector('.sort');
// var ageArr = [];

age = Array.prototype.slice.call(age);

console.log(age);

age.sort(function(a, b){
    //why do you use localeCompare? a.innerHTML itself is a number. Please use native comparator for numbers instead.
    return a.innerHTML - b.innerHTML;
});
/*for(var i = 0, len = age.length; i < len; i++) {
    // store the parent node so we can reatach the item
    var parent = age[i].parentNode;
    // detach it from wherever it is in the DOM
    var detatchedItem = parent.removeChild(age[i]);
    // reatach it.  This works because we are itterating
    // over the items in the same order as they were re-
    // turned from being sorted.
    parent.appendChild(detatchedItem);
}*/

var parent = age[1].parentNode;
var delpar = parent.removeChild(age[1]);
parent.appendChild(delpar);

console.log(delpar);

// for (var i = 0; i < age.length; i++) {
//     ageArr[i] = age[i].innerHTML;
// }
//
// ageArr.sort();
//
// sort.onclick = function() {
// for (var j = 0; j < ageArr.length; j++) {
//     age[j].innerHTML = ageArr[j];
// }
// }