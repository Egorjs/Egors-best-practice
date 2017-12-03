var age = document.getElementsByClassName('age');
// var sort = document.querySelector('.sort');
// var ageArr = [];

age = Array.prototype.slice.call(age);

age.sort(function(a, b){
    return a.innerHTML.localeCompare(b.innerHTML);
});

console.log(age);

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