import { Iuniversity } from "./types"
import u from "./universities.json";


const getUniversities = () :Iuniversity => {
    return {"data":u };
}

const data = getUniversities().data;
data.map(r => (console.log(r.th_name)));

export {getUniversities }
