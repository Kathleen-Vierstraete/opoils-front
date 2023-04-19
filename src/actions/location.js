export const FETCH_REGIONS = 'FETCH_REGIONS';
export const SAVE_REGIONS = 'SAVE_REGIONS';
export const FETCH_DEPARTEMENTS = 'FETCH_DEPARTEMENTS';
export const SAVE_DEPARTEMENTS = 'SAVE_DEPARTEMENTS';

export const fetchRegions = () => ({
  type: FETCH_REGIONS,
});

export const saveRegions = (regions) => ({
  type: SAVE_REGIONS,
  regions: regions,
});

export const fetchDepartements = () => ({
  type: FETCH_DEPARTEMENTS,
});

export const saveDepartements = (departements) => ({
  type: SAVE_DEPARTEMENTS,
  departements: departements,
});
