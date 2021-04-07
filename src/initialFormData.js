import { v4 as uuidv4 } from 'uuid';


const lagom =         [
    "Alldeles för låg",
    "För låg",
    "Lagom",
    "För hög",
    "Alldeles för hög"
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

let agreeOptions = [
    "Instämmer inte alls",
    "Instämmer i låg grad",
    "Instämmer i viss grad",
    "Instämmer i hög grad",
    "Instämmer helt"
]

let meta = {done : false}


let page0 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'ett',
        options: agreeOptions,
        category:'Kursen i stort'
    },
]
let page1 = [
    {
        id : uuidv4(),
        inputType:'textAnswer',
        value : undefined,
        disabled : false,
        title:'två',
        options: "",
        category:'Förutsättningar'
    },
]
let page2 = [
    {
        id : uuidv4(),
        inputType:'words',
        value : undefined,
        disabled : false,
        title:'tre',
        options: wordList,
        category:'Under kursen'
    },
]
let page3 = [
    {
        id : uuidv4(),
        inputType:'ordinalScaleInput',
        value : undefined,
        disabled : false,
        title:'fyra',
        options: lagom,
        category:'Resultat'
    },
]


let initialFormData = [page0,page1,page2,page3]

export default initialFormData;