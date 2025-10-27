export default function four(number: number) {
    for (let i = 1; i <= number; i++) {
        let row = '';

        for (let j = 0; j < i; j++) {
            if (j <= i) {
                row += i;
            }
        }

        console.log(row);
    }
}
