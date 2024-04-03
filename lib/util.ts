// Split the string at the first occurrence of "=" character
export function splitFirstEqual(values: string) {
  const [key, ...value] = values.split("=");
  return [key, value.join("=")];
}
