
export const handleCheckRepo = async (name, repository, setIsRepoExsist) => {
  let response = await fetch(
    `https://api.github.com/repos/${name}/${repository}`
  );
  let json = await response.json();
  setIsRepoExsist(!json.message)
}

export const handleSendUserInfo = async (data) => {
  let response = await fetch(
    'https://pushmore.io/webhook/6TFMGBX8n6vK1phE5kNzdgHf',
    {
      method: "POST",
      headers: {
        'Content-Type': 'text/plain',
      },
      body: data
    }
  );
  let json = await response.json();
  return json
}

export const handleContainerBackground = (isRepoExsist) => {
  let bgColor: string;
  if (isRepoExsist === false) {
    bgColor = '#FEACAC';
  } else if (isRepoExsist) {
    bgColor = '#CAFFDA';
  }
  return bgColor;
};

export const handleError = (isRepoExsist, isConnected, setErrorMessage) => {
  if (isRepoExsist === false) {
    setErrorMessage('Check your username or your repository name');
  } else if (isConnected === false) {
    setErrorMessage('Check your internet connection');
  } else {
    setErrorMessage('');
  }
};