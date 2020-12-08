const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const getQuerystring = () => {
  let query = window.location.search;
  let obj = {};

  // If no query string, return empty object
  if (query === '') return obj;

  // Remove the '?' at front of query string
  query = query.slice(1);

  // Split the query string into key/value pairs (ampersand-separated)
  query = query.split('&');

  // Loop through each key/value pair
  query.map(function (part) {
    let key;
    let value;

    part = part.split('=');
    key = part[0];
    value = part[1];

    // If the key doesn't exist yet, set it
    if (!obj[key]) {
      obj[key] = value;
    } else {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }

      obj[key].push(value);
    }
  });

  // Return the query string object
  return obj;
}

export default {
  isValidUrl(str) {
    try {
      new URL(str);
    } catch (_) {
      return false;
    }
    return true;
  },
  asyncForEach,
  getQuerystring
}
