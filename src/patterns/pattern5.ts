export default function five(count: number) {
    let colCount = count;

    for (let i = 0; i < count; i++) {
        let row = '';

        for (let j = colCount; j > 0; j--) {
            row += '*';
        }

        colCount--;

        console.log(row);
    }
}
