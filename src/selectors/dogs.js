/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export function findDog(dogs, searchedSlug) {
  const dog = dogs.find((testedDog) => {
    return testedDog.slug === searchedSlug;
  });
  return dog;
}
