function isValidUrl(inputText) {
  console.log('::: Checking the URL :::', inputText);

  const regEx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  if (regEx.test(inputText)) {
    return true;
  } else {
    return false;
  }
}

export { isValidUrl };
