export const colorsList: string[] = [
    'red',
    'yellow',
    'green',
    'blue',
    'grey',
]

export const getColor = () => {
    const color = `${window?.localStorage?.getItem('color')}`
    if (colorsList.includes(color)) return color

    return 'red'
}