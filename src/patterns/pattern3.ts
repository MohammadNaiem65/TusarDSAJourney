export default function three(number: number) {
    for (let i = 0; i < number; i++) {
        let row = '';

        for (let j = 0; j < number; j++) {
            if (j <= i) {
                row += j + 1;
            } else {
                row += '_';
            }
        }

        console.log(row);
    }
}
