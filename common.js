var age = document.getElementsByClassName('age');

for (var i = 0; i < age.length; i++) {
    for (var j = 0; j < age.length - 1; j++) {
        if (age[j].innerHTML > age[j + 1].innerHTML) {
            var k = age[j].innerHTML;
            age[j].innerHTML = age[j + 1].innerHTML;
            age[j + 1].innerHTML = k;
        }

    }
}