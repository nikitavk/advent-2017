function oneton(n) {
    if (n == 0) {
        return 1;
    } else {
        return (n * (n + 1)) / 2;
    }
}

const input = 325489;

for (let i = 1; i < 1000; i++) {
    let start = 1 + oneton(i) * 8 + 1;
    let finish = 1 + oneton(i + 1) * 8;
    let size = (i + 1) * 8;
    let side = (size / 4);

    let se = finish - side * 0;
    let sw = finish - side * 1;
    let nw = finish - side * 2;
    let ne = finish - side * 3;

    if (input < finish && input > start) {
        if (input < se && input > sw) {
            console.log(Math.abs(input - (se - side / 2)) + i + 1);
        } else if (input < sw && input > nw) {
            console.log(Math.abs(input - (sw - side / 2)) + i + 1);
        } else if (input < nw && input > ne) {
            console.log(Math.abs(input - (nw - side / 2)) + i + 1);
        } else {
            console.log(Math.abs(input - (ne - side / 2)) + i + 1);
        }
        break;
    }
}