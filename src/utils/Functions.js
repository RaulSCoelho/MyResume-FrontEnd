export function toPhoneNumberString(string) {
  if (string.length === 11) {
    const ddd = string.slice(0, 2)
    const nine = string[2]
    const number1 = string.slice(3, 7)
    const number2 = string.slice(7, 11)
    return `(${ddd}) ${nine} ${number1}-${number2}`
  } else {
    return string
  }
}

export function CalculateAge(date) {
  const birthDate = new Date(
    date.split('-')[0],
    date.split('-')[2] - 1,
    date.split('-')[1]
  )
  const newDate = new Date()

  return ((newDate - birthDate) / (1000 * 3600 * 24) / 365)
    .toString()
    .split('.')[0]
}
