function reverseString(string) {
    let reversedString = [];

    function helper(params) {
        let splitedString = params.split('');
        if (splitedString.length === 0) return;

        reversedString.push(splitedString[splitedString.length - 1]);
        splitedString.pop()
        return helper(splitedString.join(''));
    }

    helper(string);
    return reversedString.join('');
}

reverseString('assalamualaikum');