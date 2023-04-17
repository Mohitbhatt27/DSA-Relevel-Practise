// Input is a number and we need to minimize it by changing at max K digits. There should be no leading zeros.

function MinimizeInteger(n, k) {
    if (n == 0) return 0;
    if (k == 0) return n;
    if (n<10) return 0;

    
    let digits = n.toString().split('');
    if (digits[0]!=='1') {
        digits[0] = '1';
        k--;
    }
    for (let i = 1; i < digits.length; i++) {
        if (k == 0) break;
        if (digits[i] !== '0') {
            digits[i] = '0';
            k--;
        }
        else {
            continue;
        }

    }
    return Number(digits.join(''));
}

console.log(MinimizeInteger(1, 1));