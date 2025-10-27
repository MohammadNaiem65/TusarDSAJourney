export default function ten(count: number) {
    const rows = count * 2 - 1;
    let revertRowCount = count - 1;

    for (let i = 0; i < rows; i++) {
        let row = '';
        if (i < 5) {
            for (let j = 0; j < i + 1; j++) {
                row += '*';
            }
        } else {
            for (let j = revertRowCount; j > 0; j--) {
                row += '*';
            }
            revertRowCount--;
        }

        console.log(row);
    }
}
