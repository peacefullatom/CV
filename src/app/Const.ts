export const SECOND = 1E3;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * ((28 + 31) / 2);
export const YEAR = DAY * 365.25;
export const DECADE = YEAR * 10;
export const CENTURY = YEAR * 1E2;
export const EON = YEAR * 1E3;

export const MINUTES = 'minute(s)';
export const HOURS = 'hour(s)';
export const DAYS = 'day(s)';
export const MONTHS = 'month(s)';
export const YEARS = 'year(s)';

export const MONTHS_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const CONVERT_DATE = (date: Date) => {
    if (!isNaN(date.getTime())) {
        return MONTHS_LIST[date.getMonth()] + ' ' + date.getFullYear();
    }

    return '';
};

export const CONVERT_LINK = (link: string) => (link.replace(/(^\w+:|^)\/\//, ''));

export const DOB = new Date(1981, 11, 9);

export const LOCATION = 'Perm, Russian Federation';
