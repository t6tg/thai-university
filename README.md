![thai-university](https://socialify.git.ci/t6tg/thai-university/image?font=Inter&forks=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdb%2FNpm-logo.svg%2F1200px-Npm-logo.svg.png&owner=1&stargazers=1&theme=Light)
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
