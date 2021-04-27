import { v4 as uuidv4 } from 'uuid';


// const lagom =         [
//     "Alldeles för låg",
//     "För låg",
//     "Lagom",
//     "För hög",
//     "Alldeles för hög"
// ]

const hurNöjd =
[
    "Mycket missnöjd", "Ganska missnöjd", "Varken nöjd eller missnöjd", "Ganska nöjd", "Mycket nöjd"
]

const grader =
[
    "Inte alls", "I låg grad", "I viss grad", "I hög grad", "I mycket hög grad"
]

const wordList = [
    'stimulerande',
    'problemlösning',
    'analyserande',
    'ämnesfördjupning',
    'intellektuellt utmanande',
    'tråkig',
    'effektiv',
    'onödig',
    'aha-upplevelse',
    'utantill-kunskap',
    'engagerande',
    'för svår',
    'för lätt',
    'intressant',
    'spretig',
    'tung',
    'praktisk tillämpning',
    'ineffektiv',
    'nyttig'
]

const wordList2 = [
    {word :'stimulerande', selected: false},
    {word :'problemlösning', selected: false},
    {word :'analyserande', selected: false},
    {word :'ämnesfördjupning', selected: false},
    {word :'intellektuellt utmanande', selected: false},
    {word :'tråkig', selected: false},
    {word :'effektiv', selected: false},
    {word :'onödig', selected: false},
    {word :'aha-upplevelse', selected: false},
    {word :'utantill-kunskap', selected: false},
    {word :'engagerande', selected: false},
    {word :'för svår', selected: false},
    {word :'för lätt', selected: false},
    {word :'intressant', selected: false},
    {word :'spretig', selected: false},
    {word :'tung', selected: false},
    {word :'praktisk tillämpning', selected: false},
    {word :'ineffektiv', selected: false},
    {word :'nyttig', selected: false},
]

let agreeOptions = [
    "Instämmer inte alls",
    "Instämmer i låg grad",
    "Instämmer i viss grad",
    "Instämmer i hög grad",
    "Instämmer helt"
]



let page0 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Hur nöjd är du med kursen i stort?',
        options: hurNöjd,
        category:'Kursen i stort'
    },
    {
        id : uuidv4(),
        inputType:'words',////////////////////////////////////////////
        value : wordList2,
        disabled : false,
        title:'Sammanfatta ditt huvudintryck av kursen genom att markera de ord som bäst beskriver kursen för dig.',
        options: wordList,
        category:'Kursen i stort'
    },
    {
        id : uuidv4(),
        inputType:'textAnswer',
        value : undefined,
        disabled : false,
        title:'Det här var särskilt bra med kursen:',
        options: agreeOptions,
        category:'Kursen i stort'
    },
    {
        id : uuidv4(),
        inputType:'textAnswer',
        value : undefined,
        disabled : false,
        title:'Det här kan förbättras med kursen:',
        options: agreeOptions,
        category:'Kursen i stort'
    },

]
let page1 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Administrationen under kursen (schema, tentamensanmälen etc) har fungerat väl.',
        options: agreeOptions,
        category:'Förutsättningar'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Jag har överlag vetat vad som förväntas av mig i den här kursen i relation till kursmålen.',
        options: agreeOptions,
        category:'Förutsättningar'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'I vilken grad har du haft svårigheter att följa med i kursen på grund av bristande förkunskaper?',
        options: grader,
        category:'Under kursen'
    },
]
let page2 = [

    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Jag anser att kursens krav på arbetsinsats motsvarar antalet kurspoäng.',
        options: agreeOptions,
        category:'Under kursen'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Studierna på kursen har varit intellektuellt utmananade.',
        options: agreeOptions,
        category:'Under kursen'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Läraren/-na har varit bra på att förklara kursinnehåll som varit svårt att förstå i kursen.',
        options: grader,
        category:'Under kursen'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'Hur nöjd är du med din egen arbetsinsats på kursen?',
        options: hurNöjd,
        category:'Under kursen'
    },

]
let page3 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'I vilken grad har studierna inom kursen bidragit till att utveckla din förmåga gällande att läsa och förstå vetenskapliga texter?',
        options: grader,
        category:'Resultat'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'I vilken grad har studierna inom kursen bidragit till att utveckla din förmåga gällande att arbeta i grupp/samarbeta med andra?',
        options: grader,
        category:'Resultat'
    },
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'I vilken grad har kursen byggt vidare på det du tidigare har lärt dig i ämnet?',
        options: grader,
        category:'Resultat'
    },

]


let initialFormData = [page0,page1,page2,page3]

export default initialFormData;