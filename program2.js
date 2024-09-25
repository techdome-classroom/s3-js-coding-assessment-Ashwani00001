function romanToInt(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const nextChar = s[i + 1];

        if (romanNumerals[currentChar] < romanNumerals[nextChar]) {
            result -= romanNumerals[currentChar];
        } else {
            result += romanNumerals[currentChar];
        }
    }

    return result;
}


const romanNumeral = "MCMXCIV";
const integerValue = romanToInt(romanNumeral);
console.log(integerValue); 
