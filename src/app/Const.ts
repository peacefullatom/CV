export const JS = 'JavaScript';
export const TS = 'TypeScript';
export const HTML = 'HTML';
export const CSS = 'CSS';
export const LESS = 'LESS';
export const NODE = 'Node.js';
export const WP = 'WebPack';
export const BABEL = 'Babel';
export const JQ = 'jQuery';
export const A1X = 'Angular 1.x';
export const A2X = 'Angular 2.x+';
export const R = 'React';
export const RN = 'React Native';
export const RX = 'Redux';
export const SQL = 'MSSQL';
export const MD = 'MongoDB';
export const GIT = 'Git';
export const D3 = 'D3.js';
export const ELECTRON = 'Electron.js';

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
