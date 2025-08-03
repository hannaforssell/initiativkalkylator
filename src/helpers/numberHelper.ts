export function toSignedString(a: number) {
  if (a >= 0) {
    return "+" + a;
  } else {
    return a.toString();
  }
}
