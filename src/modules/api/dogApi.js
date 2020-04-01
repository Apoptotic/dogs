async function fetchGet(url) {
  try {
    const result = await fetch(url);
    if (result.ok) {
      return await result.json();
    }
    return { error: result.statusText };
  } catch (error) {
    throw new Error(error);
  }
}

export function getBreedsList() {
  return fetchGet("https://dog.ceo/api/breeds/list/all");
}

export function getBreedImages(breedName) {
  const isSubBreed = breedName.includes("-");
  if (isSubBreed) {
    const [breed, subBreed] = breedName.split("-");
    return fetchGet(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`);
  }
  return fetchGet(`https://dog.ceo/api/breed/${breedName}/images`);
}
