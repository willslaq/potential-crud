export default function getAge(dateString: Date): number {
  const today = new Date();
  const birthDateTemp = dateString;
  let ageTemp = today.getFullYear() - birthDateTemp.getFullYear();
  const month = today.getMonth() - birthDateTemp.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDateTemp.getDate())) {
    ageTemp -= 1;
  }
  return ageTemp;
}
