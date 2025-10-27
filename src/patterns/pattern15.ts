export default function fifteen(count: number) {
    let letters = ['A', 'B', 'C', 'D', 'E'];

    for (let i = count; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += letters[j];
        }
        console.log(row);
    }
}
