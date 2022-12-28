function solution(D, S) {
    let arr = ["one", "two", "three", "four", "five"];
    if (D >= 1 && D <= 5 && arr.indexOf(S) !== -1) {
        returnD * (arr.indexOf(S) + 1);
    }
}