export default {
    getCurrentDate: () => {
        const date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = date.getDate();

        return [year, month, day].join("-");
    }
}
