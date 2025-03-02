export const getCharacters = async () => {
  const response = await fetch(
    'https://dragonball-api.com/api/characters?limit=51',
  );
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  const a = 1;
  // console.log('response', data);
  return response.json();
};
