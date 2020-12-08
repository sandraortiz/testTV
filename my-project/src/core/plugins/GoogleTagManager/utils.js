import "url-search-params-polyfill";

export const loadScript = (id, config = {}) => {
  const win = window
  const doc = document
  const script = doc.createElement("script")
  const dl = "dataLayer";

  win[dl] = win[dl] || [];
  win[dl].push({
    event: "gtm.js",
    "gtm.start": new Date().getTime(),
  });
  if (!id) {
    return;
  }
  script.async = true;
  script.defer = config.defer || false;

  const queryString = new URLSearchParams(Object.assign({id}, (config.queryParams || {})));
  script.src = `https://www.googletagmanager.com/gtm.js?${queryString}`;
  doc.body.appendChild(script);
}

export const hasScript = () => {
  return Array.from(document.getElementsByTagName("script")).some((script) => script.src.includes("googletagmanager.com/gtm.js"));
}
