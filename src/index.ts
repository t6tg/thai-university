import { Iuniversity } from "./types"
import u from "./universities.json";


const getUniversities = () :Iuniversity => {
    return {"data":u };
}

export {getUniversities }
