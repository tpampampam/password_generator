

export const getRandomChar = (min, max) => {
    const limit = max - min + 1
    return String.fromCharCode(Math.floor(Math.random()
    * limit) + min)
}

export const getSpecialChar = () => {
    const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'"
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}