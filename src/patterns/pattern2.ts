export default function two(number: number) {
    for (let i = 0; i < number; i++) {
        let row = '';

        for (let j = 0; j < number; j++) {
            if (j <= i) {
                row += '*';
            } else {
                row += '-';
            }
        }

        console.log(row);
    }
}
