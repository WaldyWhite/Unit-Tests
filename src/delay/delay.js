export function delay (callback, milsec) {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve( callback() )         
        }, milsec)
    })
}

//delay(() => 5 * 2, 1000).then(res => console.log);
