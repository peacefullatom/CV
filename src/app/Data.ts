import * as CONST from './Const';

export interface Link {
    HREF: string;
    value: string;
}

export interface Messenger extends Link {
    messenger: string;
}

interface EntryName {
    name: string;
}

interface EntryStart {
    start: Date;
}

interface EntryDescription {
    description: string;
}

export interface Skill extends EntryName, EntryStart {
    end?: Date;
}

export interface Experience extends EntryStart, EntryDescription {
    role: string;
    company: string;
    technologies: string[];
    location: string;
};

export interface Education extends EntryName, EntryStart, EntryDescription {
    link: string;
    end: Date;
    location: string;
};

export interface Readings extends EntryName, EntryDescription {
    link: string;
}

export const DOB = new Date(1981, 11, 9);
export const LOCATION = "Perm, Russian Federation";

export const PHONES: Link[] = [
    {
        HREF: "tel:+79504696434",
        value: "+79504696434"
    }
];

export const MESSENGERS: Messenger[] = [
    {
        HREF: "skype:y.i.markov?chat",
        value: "y.i.markov",
        messenger: "Skype"
    },
    {
        HREF: "tg://resolve?domain=@yuriy_markov",
        value: "@yuriy_markov",
        messenger: "Telegram"
    },
    {
        HREF: "whatsapp://send?phone=79504696434",
        value: "+79504696434",
        messenger: "WhatsApp"
    },
    {
        HREF: "viber://chat?number+79504696434",
        value: "+79504696434",
        messenger: "Viber"
    }
];

export const EMAILS: Link[] = [
    {
        HREF: "mailto:peacefullatom@gmail.com",
        value: "peacefullatom@gmail.com"
    },
    {
        HREF: "mailto:scipios@mail.ru",
        value: "scipios@mail.ru"
    }
];

export const WEB: Link[] = [
    {
        HREF: "https://github.com/peacefullatom",
        value: "GitHub"
    },
    {
        HREF: "https://www.instagram.com/peacefullatom",
        value: "Instagram"
    },
    {
        HREF: "https://twitter.com/markov_yuriy",
        value: "Twitter"
    },
    {
        HREF: "https://fb.me/yurij.markov.9",
        value: "Facebook"
    }
];

export const SKILLS: Skill[] = [
    { name: CONST.JS, start: new Date(2008, 9, 1) },
    { name: CONST.TS, start: new Date(2016, 0, 1) },
    { name: CONST.HTML, start: new Date(2008, 0, 1) },
    { name: CONST.CSS, start: new Date(2008, 4, 1) },
    { name: CONST.LESS, start: new Date(2016, 7, 1) },
    { name: CONST.NODE, start: new Date(2015, 1, 1) },
    { name: CONST.WP, start: new Date(2017, 3, 1) },
    { name: CONST.BABEL, start: new Date(2016, 9, 1) },
    { name: CONST.JQ, start: new Date(2012, 11, 1) },
    { name: CONST.A1X, start: new Date(2016, 11, 1) },
    { name: CONST.A2X, start: new Date(2017, 1, 1) },
    { name: CONST.R, start: new Date(2017, 7, 1) },
    { name: CONST.RN, start: new Date(2017, 10, 1) },
    { name: CONST.RX, start: new Date(2017, 10, 1) },
    { name: CONST.SQL, start: new Date(2007, 2, 1), end: new Date(2017, 3, 1) },
    { name: CONST.MD, start: new Date(2016, 3, 1) },
    { name: CONST.GIT, start: new Date(2016, 10, 1) },
    { name: CONST.D3, start: new Date(2018, 0, 1) },
    { name: CONST.ELECTRON, start: new Date(2017, 11, 1) }
];

export const EXPERIENCES: Experience[] = [
    {
        role: "Senior front-end developer",
        company: "Foresight LLC",
        location: LOCATION,
        start: new Date(2017, 3, 17),
        technologies: [
            CONST.JS,
            CONST.TS,
            CONST.HTML,
            CONST.GIT,
            CONST.CSS,
            CONST.LESS,
            CONST.WP,
            CONST.R,
            CONST.RN,
            CONST.RX,
            CONST.D3
        ],
        description: 'Development & support of corporate solution used in BI and analytics, resolving defects found by testers/customers. Development of mobile client on React Native and Redux.'
    },
    {
        role: "Software Developer",
        company: "SoftM LLC",
        location: LOCATION,
        start: new Date(2014, 2, 1),
        technologies: [
            CONST.JS,
            CONST.HTML,
            CONST.CSS,
            CONST.JQ,
            CONST.SQL
        ],
        description: 'Database developer: MS SQL Server 2012. Administrator of mail server. Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc. Development and support of CRM.'
    },
    {
        role: "IPTV engineer",
        company: "WildRed LLC",
        location: "Sochi, Russian Federation",
        start: new Date(2014, 1, 1),
        technologies: ["IPTV"],
        description: "Worked as IPTV engineer in Bolshoy Ice Dome during Olympic games 2014 on behalf of WildRed LLC. Main tasks were: initial hardware installation, support of system during Olympic games, dismantle of hardware upon event completion, resolving of issues connected with work of system in Bolshoy Ice Dome. Also worked as guide and interpreter for English speaking guests in free time on my own initiative."
    },
    {
        role: "Software Developer",
        company: "NMS CJSC",
        location: LOCATION,
        start: new Date(2012, 8, 1),
        technologies: [
            CONST.JS,
            CONST.HTML,
            CONST.CSS,
            CONST.JQ,
            CONST.SQL
        ],
        description: "Database developer: MS SQL Server 2012. IPTV-interface developer for various set of STBs. Administrator of mail server. Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc. Support of incident management system."
    },
    {
        role: "Network Operations Center Engineer",
        company: "NMS CJSC",
        location: LOCATION,
        start: new Date(2008, 3, 1),
        technologies: [
            CONST.JS,
            CONST.HTML,
            CONST.CSS,
            CONST.SQL
        ],
        description: "Network administrator: Cisco, Huawei, etc. Mail server administrator. Administrator/developer of MS SQL 2008 database. Partly web developer."
    },
    {
        role: "Network Engineer",
        company: "OKOS LLC",
        location: LOCATION,
        start: new Date(2004, 6, 1),
        technologies: [
            CONST.SQL
        ],
        description: "Development, management, upgrade of network, including VPNs, LANs in big buildings, joints of ISDN, ADSL, Fiber, Ethernet nets. Support of third party software running on Windows and Linux. Management of MS SQL Server 2005: database development, reports generation."
    }
];

export const EDUCATION: Education[] = [
    {
        name: "Permskiy Gosudarstvenniy Tekhnologicheskiy Universitet",
        link: "http://www.pstu.ru",
        start: new Date(2002, 8, 1),
        end: new Date(2005, 4, 1),
        location: LOCATION,
        description: "Control of quality at all stages of product/service life cycle. Specialized in automation of quality control.Attended courses on market analysis, systems of tracking of product/service from development to end user distribution, databases, C/C++ courses, Object-oriented programming."
    },
    {
        name: "Permskiy Khimiko Tekhnologicheskiy Tekhnikum",
        link: "http://www.phtt.ru",
        start: new Date(1999, 8, 1),
        end: new Date(2002, 4, 1),
        location: LOCATION,
        description: "Control of quality at all stages of product/service life cycle. Specialized in automation of quality control."
    }
];

export const READINGS: Readings[] = [
    {
        name: "Rangle's Angular Training Book",
        link: "https://angular-2-training-book.rangle.io",
        description: "One of the best sources about Angular (and not only!) available online. Includes: set of best practices; ready to use solutions; basic recommendations; etc. Written in a very understandable manner, so, the course can be easily understood by novice, but also contains a lot of professional tips."
    },
    {
        name: "Improved Redux type safety with typescript 2.8",
        link: "https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575",
        description: "Type safe actions/reducers/etc with TypeScript! Kudos to Martin Hochel!"
    }
];

export const LANGUAGES = [
    "English",
    "Russian",
    "toki pona"
];
