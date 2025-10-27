export default function sixteen(count: number) {
    let letters = ['A', 'B', 'C', 'D', 'E'];

    for (let i = 0; i < count; i++) {
        let row = '';

        for (let j = 0; j < i + 1; j++) {
            row += letters[i];
        }
        console.log(row);
    }
}
