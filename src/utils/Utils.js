export const formatDateToInput = (date) => {
  let tempDate = date ? new Date(date) : new Date()

  let month = (tempDate.getMonth() + 1).toString()
  let day = tempDate.getDate().toString()
  return tempDate.getFullYear() + '-' + (month.length === 1 ? `0${month}` : month) + '-' + (day.length === 1 ? `0${day}` : day)
}