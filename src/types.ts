export interface IuniversityList {
    [index:string]: Iuniversity
}

export interface Iuniversity {
    uid : string;
    th_name: string;
    en_name: string;
    short_name: string;
}
