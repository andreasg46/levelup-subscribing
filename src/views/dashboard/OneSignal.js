import OneSignal from 'react-onesignal';

export async function runOneSignal() {
  await OneSignal.init({ appId: 'cca1bd1f-8df1-47e4-a28e-454eeb0b5ab3', allowLocalhostAsSecureOrigin: true });
  OneSignal.showSlidedownPrompt();
}

export async function AddTags(userId, email) {
  const options = {
    method: 'PUT',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: `${process.env.REACT_APP_APP_ID}`,
      tags: {
        email: email,
        classes: ''
      }
    })
  };

  fetch('https://onesignal.com/api/v1/players/' + userId, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}