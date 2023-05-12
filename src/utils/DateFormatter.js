export function DateFormatter(timestamp) {
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Adding 1 to month since it is zero-based
    const year = date.getUTCFullYear();

    // Padding with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
}
