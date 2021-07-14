module.exports = (x, y , callback) => {
    if (x <= 0  || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero, Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null,{ // null means no error
                perimeter: () => 2 * (x + y),
                area: () => x * y,
            }),
            2000
        );
    }
}
