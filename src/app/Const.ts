export const JS = "JavaScript";
export const TS = "TypeScript";
export const HTML = "HTML";
export const CSS = "CSS";
export const LESS = "LESS";
export const NODE = "Node.js";
export const WP = "WebPack";
export const BABEL = "Babel";
export const JQ = "jQuery";
export const A1X = "Angular 1.x";
export const A2X = "Angular 2.x+";
export const R = "React";
export const RN = "React Native";
export const RX = "Redux";
export const SQL = "MSSQL";
export const MD = "MongoDB";
export const GIT = "Git";

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const CONVERT_DATE = (date: Date) => {
    if (!isNaN(date.getTime()))
        return MONTHS[date.getMonth()] + " " + date.getFullYear();

    return "";
}

export const CONVERT_LINK = (link: string) => (link.replace(/(^\w+:|^)\/\//, ""));
