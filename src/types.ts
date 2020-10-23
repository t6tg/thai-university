export interface Iuniversity {
    data: {
        uid: string;
        th_name: string;
        en_name: string;
        short_name_th: string;
        short_name_en: string;
    }[]
}

export interface IgetByUID {
    data: {
        uid: string;
        th_name: string;
        en_name: string;
        short_name_th: string;
        short_name_en: string;
    } | null
}