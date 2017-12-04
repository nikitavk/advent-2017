let arr = [
    [5, 4, 2],
    [10, 1, 1],
    [11, 23, 25]
];

const input = 325489;

for (let i = 1; i < 4; i++) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i].push(0);
        arr[i].unshift(0);
    }
    arr.push(new Array(i * 2 + 3).fill(0));
    arr.unshift(new Array(i * 2 + 3).fill(0));

    const rowl = i * 2 + 3 - 1;
    //right
    for (let j = arr.length - 2; j >= 0; j--) {
        try {
            arr[j][rowl] += arr[j + 1][rowl];
        } catch (e) {}
        try {
            if (j)
                arr[j][rowl] += arr[j - 1][rowl];
        } catch (e) {}
        try {
            arr[j][rowl] += arr[j + 1][rowl - 1];
        } catch (e) {}
        try {
            arr[j][rowl] += arr[j][rowl - 1];
        } catch (e) {}
        try {
            if (j)
                arr[j][rowl] += arr[j - 1][rowl - 1];
        } catch (e) {}

        if (arr[j][rowl] > input) {
            console.log(arr[j][rowl]);
            break;
        }
    }
    //top 
    for (let j = rowl - 1; j >= 0; j--) {
        try {
            arr[0][j] += arr[0][j + 1];
        } catch (e) {}
        try {
            arr[0][j] += arr[1][j + 1];
        } catch (e) {}
        try {
            arr[0][j] += arr[1][j];
        } catch (e) {}
        try {
            if (j)
                arr[0][j] += arr[1][j - 1];
        } catch (e) {}
        try {
            if (j)
                arr[0][j] += arr[0][j - 1];
        } catch (e) {}


        if (arr[0][j] > input) {
            console.log(arr[0][j]);
            break;
        }
    }

    //left
    for (let j = 1; j < arr.length; j++) {
        try {
            arr[j][0] += arr[j - 1][0];
        } catch (e) {}
        try {
            arr[j][0] += arr[j - 1][1];
        } catch (e) {}
        try {
            arr[j][0] += arr[j][1];
        } catch (e) {}
        try {
            arr[j][0] += arr[j + 1][1];
        } catch (e) {}
        try {
            arr[j][0] += arr[j + 1][0];
        } catch (e) {}

        if (arr[j][0] > input) {
            console.log(arr[j][0]);
            break;
        }
        
    }

    //bottom
    for (let j = 1; j < arr.length; j++) {
        try {
            arr[rowl][j] += arr[rowl][j - 1];
        } catch (e) {}
        try {
            arr[rowl][j] += arr[rowl - 1][j - 1];
        } catch (e) {}
        try {
            arr[rowl][j] += arr[rowl - 1][j];
        } catch (e) {}
        try {
            if (j + 1 <= rowl)
                arr[rowl][j] += arr[rowl - 1][j + 1];
        } catch (e) {}
        try {
            if (j + 1 <= rowl)
                arr[rowl][j] += arr[rowl][j + 1];
        } catch (e) {}

        if (arr[rowl][j] > input) {
            console.log(arr[rowl][j]);
            break;
        }
    }
}

// console.log(arr);