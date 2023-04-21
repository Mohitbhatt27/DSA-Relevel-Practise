var evalRPN = function (tokens) {
    let st = [];

    // operator with keys mapped to function
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    };

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token in operators) {
            let b = st.pop();
            let a = st.pop();
            let result = operators[token](a, b); // using the operators object to call the function
            st.push(result);
        } else {
            st.push(Number(token));
        }
    }

    return st.pop();
};
