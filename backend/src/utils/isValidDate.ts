export default function isValidDate(date: Date): boolean {
  if (!Number.isNaN(date.getTime())) {
    return true;
  }
  return false;
}
