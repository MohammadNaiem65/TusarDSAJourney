import { Alphabets } from '../index.js';

export default function eighteen(number: number) {
    for (let i = number; i > 0; i--) {
        let row = '';
        let charIndex = i - 1;

        for (let j = i; j <= number; j++) {
            row += Alphabets[charIndex];
            charIndex++;
        }

        console.log(row);
    }
}
