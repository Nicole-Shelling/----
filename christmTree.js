const twinkles = document.querySelectorAll('.twinkle');
const noLight = 'radial-gradient(40% 50%, rgb(146, 146, 146), #585858)';
const light = 'radial-gradient(40% 50%, rgb(231, 171, 171), #c51c1c)';
const dialog = document.querySelector('dialog');
const select = () => document.querySelector('select').value;

let right = []; //правильная последовательность шариков
let flag = 0; //указатель на следующий правильный шарик


document.querySelectorAll('.twinkle').forEach((e) => e.addEventListener('click', () => {
    if (right[flag] == e) {
        e.style['box-shadow'] = '0 0 10px 5px rgba(255, 0, 0, 0.699)';
        e.style.background = light;
        flag += 1;
        if (flag == right.length) {
            document.querySelector('.star').style.visibility = 'visible';
            setTimeout(() => dialog.showModal(), 3000);
        }
    } else {
        for (let i = 0; i < flag; i++) {
            right[i].style['box-shadow'] = 'none';
            right[i].style.background = noLight;
        }
        flag = 0;
    }
})); //обработчик клика на шарик

restart();

function restart() { //перемешивает шарики на елке и создает новую правильную последовательность
    right = [];
    let max = 230;
    let min = -230;
    let r = (max - 50) / (select() - 1);
    flag = 0;
    for (let e of twinkles) {
        if (getComputedStyle(e).display != 'none') {
            right.push(e);
        }
        let x = min - 0.5 + Math.random() * (max - min + 1);
        e.style.left = `${x}px`;
        max -= r;
        min += r;
    }
    right.sort(() => Math.random() - 0.5);
}

document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.star').style.visibility = 'hidden';
    for (let i = 0; i < flag; i++) {
        right[i].style['box-shadow'] = 'none';
        right[i].style.background = noLight;
    }
    restart();
    dialog.close();
});


document.querySelector('select').addEventListener('change', () => {
    for (let i = 5; i < twinkles.length; i++) {
        if (i >= select()) {
            twinkles[i].style.display = 'none';
        } else {
            twinkles[i].style.display = 'block';
        }
    }
    restart();
});