export type ValueOf<T> = T[keyof T]

export type Property = keyof Omit<University, 'uid'>
export type Properties = Array<Property>

export interface University {
    uid: number
    th_name: string
    en_name: string
    short_name_th: string
    short_name_en: string
}

export type Universities = University[]

export interface UniversitiesData {
    data: Universities
}

export type GetByUID = {
    data: University | null
}
