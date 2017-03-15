/**
 * Created by RanXianghui on 2017/3/15.
 */
export const formatDateString = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
};