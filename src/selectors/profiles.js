/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

export function findProfile(profiles, searchedSlug) {
  const profile = profiles.find((testedProfile) => {
    return testedProfile.slug === searchedSlug;
  });
  return profile;
}
