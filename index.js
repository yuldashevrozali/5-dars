const first = document.getElementById('first');
const second = document.getElementById('second');
const qoshuvchi = document.getElementById('qoshuvchi');
const ayiruvchi = document.getElementById('ayiruvchi');
const kopaytiruvchi = document.getElementById('kopaytiruvchi');
const boluvchi = document.getElementById('boluvchi');

qoshuvchi.addEventListener('click', function () {
    const block = document.getElementById('block');
    let b = 0;
    if (first.value && second.value) {
        b = Number(first.value) + Number(second.value);
    } else {
        alert("ma'lumotar kiritilmagan")
    }

    if (first.value && second.value) {
        let h1 = document.createElement('h1');
        h1.textContent = b
        block.appendChild(h1);
        document.getElementById('form').reset();
    } else {
        alert("ma'lumotar kiritilmagan")
    }
});

ayiruvchi.addEventListener('click', function () {
    const block = document.getElementById('block');
    let d = 0;
    if (first.value && second.value) {
        d = Number(first.value) - Number(second.value);
    } else {
        alert("ma'lumotar kiritilmagan")
    }

    if (first.value && second.value) {
        let h1 = document.createElement('h1');
        h1.textContent = d
        block.appendChild(h1);
        document.getElementById('form').reset();
    } else {
        alert("ma'lumotar kiritilmagan")
    }
});

kopaytiruvchi.addEventListener('click', function () {
    const block = document.getElementById('block');
    let f = 0;
    if (first.value && second.value) {
        f = Number(first.value) * Number(second.value);
    } else {
        alert("ma'lumotar kiritilmagan")
    }

    if (first.value && second.value) {
        let h1 = document.createElement('h1');
        h1.textContent = f;
        block.appendChild(h1);
        document.getElementById('form').reset();
    } else {
        alert("ma'lumotar kiritilmagan")
    }
});

boluvchi.addEventListener('click', function () {
    const block = document.getElementById('block');
    let l = 1;
    if (first.value && second.value) {
        l = Number(first.value) / Number(second.value);
    } else {
        alert("ma'lumotar kiritilmagan")
    }
    if (first.value && second.value) {
        let h1 = document.createElement('h1');
        h1.textContent = l;
        block.appendChild(h1);
        document.getElementById('form').reset();
    } else {
        alert("ma'lumotar kiritilmagan")
    }
});