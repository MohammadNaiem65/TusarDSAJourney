export default function six(count: number) {
    for (let i = count; i > 0; i--) {
        let row = '';

        for (let j = 1; j < i + 1; j++) {
            row += j;
        }

        console.log(row);
    }
}
