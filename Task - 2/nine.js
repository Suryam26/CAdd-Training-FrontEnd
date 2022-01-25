var list = [1,2,3,6,9,8,7,4];

function rotateNum() {
    let first = list.pop();
    list.unshift(first);

    for (let i = 0; i < 9; i++){
        document.getElementById(i).innerHTML = list[i];
    }
}