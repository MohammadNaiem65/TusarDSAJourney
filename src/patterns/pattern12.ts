export default function twelve(count: number) {
    const range = count * 2;

    for (let i = 1; i < count + 1; i++) {
        let row = '';
        let revertCount = count;

        for (let j = 1; j < range + 1; j++) {
            if (j <= count) {
                if (j <= i) {
                    row += j;
                } else {
                    row += ' ';
                }
            } else {
                if (revertCount <= i) {
                    row += revertCount;
                } else {
                    row += ' ';
                }
                revertCount--;
            }
        }

        console.log(row);
    }
}
