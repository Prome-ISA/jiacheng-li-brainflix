function formatDate(milliseconds) {

    let date = new Date(milliseconds);

    let day = date.getDate();
    let month = date.getMonth() + 1; // Month starts from 0, so add 1
    let year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return day + '-' + month + '-' + year;
}

export default formatDate