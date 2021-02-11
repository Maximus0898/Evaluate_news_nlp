import { isValidUrl } from './urlValidator';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const inputName = document.getElementById('name').value;
  const baseUrl = 'http://localhost:8082/sentiment';

  if (isValidUrl(inputName)) {
    loadData(baseUrl, inputName).then((results) => {
      const el = document.getElementById('results');
      updateUI(el, results);
    });
  } else {
    alert('Please enter a valid URL.');
  }
}

const loadData = async (url = '', src = {}) => {
  console.log('Checking:', src);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: src }),
  });

  try {
    const newData = await response.json();
    console.log('Data received:', newData);
    return newData;
  } catch (error) {
    console.log('Error: ', error);
  }
};

const updateUI = async (el, data) => {
  console.log('Updating UI:', data);
  console.log('Updating UI', el);

  try {
    el.innerHTML = `<ul>
    <li>Confidence: ${data.confidence}</li>
      <li>Score tag: ${data.score_tag}</li>
      <li>Subjectivity: ${data.subjectivity}</li>
      <li>Irony: ${data.irony} </li>
      </ul>`;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export { handleSubmit, loadData, updateUI };
