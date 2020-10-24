import universitiesData from '../universities.json'

import {
    GetByUID,
    Property,
    Properties,
    University,
    Universities,
    UniversitiesData
} from './types'

const notUniversity = [9, 10],
    notEndWithUniversity = [
        ...notUniversity,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        63,
        64,
        65,
        69,
        83,
        86,
        92,
        105,
        112,
        116,
        120
    ],
    properties: Properties = [
        'th_name',
        'en_name',
        'short_name_th',
        'short_name_en'
    ]

let universities: University[] = []

const getUniversitiesData = () => {
    if (universities.length) return universities

    const parsedUniversities: Universities = universitiesData.map(
        (university, _uid) => {
            const uid = _uid + 1

            return Object.assign(
                { uid },
                ...properties.map((property, index) => {
                    let universityFieldValue: string | number

                    const isUniversity = !notUniversity.includes(uid),
                        isEndWithUniversity = !notEndWithUniversity.includes(
                            uid
                        )

                    switch (property) {
                        case 'th_name':
                            universityFieldValue =
                                (isUniversity ? 'มหาวิทยาลัย ' : 'สถาบัน ') +
                                university[index]
                            break

                        case 'en_name':
                            universityFieldValue =
                                university[index] +
                                (isEndWithUniversity ? ' University' : '')
                            break

                        default:
                            universityFieldValue = university[index]
                            break
                    }

                    return {
                        [property]: universityFieldValue
                    } as Pick<University, Property>
                })
            )
        }
    )

    universities = parsedUniversities

    return parsedUniversities
}

const getUniversities = (): UniversitiesData => {
    return { data: getUniversitiesData() }
}

/**
 * @deprecated since 1.1.1. Use getUniversityByUID instead.
 * 
 * @param uid {number}
 */
const getByUID = (uid: number): GetByUID => getUniversityByUID(uid)

const getUniversityByUID = (uid: number): GetByUID => {
    const university =
        getUniversitiesData().find((university) => university.uid === uid) ||
        null

    return { data: university }
}

export { getUniversities, getByUID, getUniversityByUID }
