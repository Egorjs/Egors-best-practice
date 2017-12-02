var age = document.getElementsByClassName('age');
var sort = document.querySelector('.sort');
var ageArr = [];

for (var i = 0; i < age.length; i++) {
    ageArr[i] = age[i].innerHTML;
}

ageArr.sort();

sort.onclick = function() {
for (var j = 0; j < ageArr.length; j++) {
    age[j].innerHTML = ageArr[j];
}
}