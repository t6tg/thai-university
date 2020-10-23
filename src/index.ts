import { IgetByUID, Iuniversity } from "./types"
import u from "./universities.json";


const getUniversities = () :Iuniversity => {
    return {"data":u };
}

const getByUID = (uid: string) : IgetByUID => {
        const found = u.filter(r => r.uid === uid);   
        return {"data" : found[0]};
}

export {getUniversities, getByUID }
