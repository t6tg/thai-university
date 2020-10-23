# Thai-University

**All** Thailand University Name. | รายชื่อมหาวิทยาลัยทั้งหมดในประเทศไทย

## Installation

```shell
npm install thai-university
```

## Example

```js
const { getUniversities } = require("thai-university");
/*
    example data
    data : [
        .
        .
        {
            uid: '64',
            th_name: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
            en_name: "King Mongkut's University of Technology North Bangkok",
            short_name_th: 'มจพ.',
            short_name_en: 'KMUTNB'
        },
        .
        .
    ]
*/
const data = getUniversities();
console.log(data);
```
