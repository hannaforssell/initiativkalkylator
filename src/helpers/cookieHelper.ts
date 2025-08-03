const lateExpire = new Date(2147483647 * 1000).toUTCString();

export function setCookie(name: string, val: any) {
  const cookieValue = JSON.stringify(val);

  console.log(`Setting cookie ${name} to ${cookieValue}`);
  document.cookie = name + "=" + cookieValue + "; expires=" + lateExpire;
}

export function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");

  if (parts.length == 2) {
    const ret = JSON.parse(parts[1]);
    console.log(`Getting cookie ${name}: ${parts[1]}`);
    return ret;
  }
  return null;
}
