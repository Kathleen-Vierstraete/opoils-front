export const FETCH_PROFILES = 'FETCH_PROFILES';
export const SAVE_PROFILES = 'SAVE_PROFILES';

export const fetchProfiles = () => ({
  type: FETCH_PROFILES,
});

export const saveProfiles = (recipes) => ({
  type: SAVE_PROFILES,
  recipes: recipes,
});
