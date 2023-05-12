export function formatter(num) {
    if (Math.abs(num) >= 1000000) {
        return Math.sign(num) * Math.round(Math.abs(num) / 1000000) + 'M';
    } else if (Math.abs(num) >= 1000) {
        return Math.sign(num) * Math.round(Math.abs(num) / 1000) + 'K';
    } else {
        return Math.sign(num) * Math.abs(num);
    }
}