export const FETCH_PROFILES = 'FETCH_PROFILES';
export const SAVE_PROFILES = 'SAVE_PROFILES';
export const FETCH_ACCOUNT_PROFILES = 'FETCH_ACCOUNT_PROFILES';
export const SAVE_ACCOUNT_PROFILES = 'SAVE_ACCOUNT_PROFILES';

export const fetchProfiles = () => ({
  type: FETCH_PROFILES,
});

export const saveProfiles = (profiles) => ({
  type: SAVE_PROFILES,
  profiles: profiles,
});

export const fetchAccountProfiles = () => ({
  type: FETCH_ACCOUNT_PROFILES,
});

export const saveAccountProfiles = (accountProfiles) => ({
  type: SAVE_ACCOUNT_PROFILES,
  accountProfiles: accountProfiles,
});
