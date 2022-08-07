/** @type {import('@sveltejs/kit').GetSession} */

export function getSession(event) {
  const cookies = event.request.headers
    .get("cookie")
    ?.split(";")
  .map(cookie => cookie.trim().split("="))
  .reduce((acc, [key, value]) => {
    if (key.trim() === "isDarkMode") {
        return {
            ...acc,
            [key]: value === "true" ? true : false,
        };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  const isDarkMode = cookies?.isDarkMode || false

  return {isDarkMode}
}
