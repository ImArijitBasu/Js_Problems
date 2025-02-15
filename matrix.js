let mat = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 0],
];

// Iterate over the matrix and log each element
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        console.log(
            `User ${i + 1} has ${mat[i][j] === 1 ? "access" : "no access"
            } to Object ${j + 1}`
        );
    }
}
