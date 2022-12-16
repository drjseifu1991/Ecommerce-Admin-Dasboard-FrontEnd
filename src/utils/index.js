export const setUserId = value => {
    localStorage.setItem('userId', JSON.stringify(value))
}

export const getUserId = () => {
    return JSON.parse(localStorage.getItem('userId'))
}

export const removeUserId = () => {
    localStorage.removeItem('userId')
}