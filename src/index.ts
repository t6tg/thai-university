import { Iuniversity} from "./types"
import u from "universities.json";

const getUniversities = () : Iuniversity[] => {
    console.log(u)
    return u;
}

console.log(getUniversities());

export {getUniversities }
