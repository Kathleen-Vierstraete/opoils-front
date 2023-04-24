export const FETCH_DOGS_PROFILES = 'FETCH_DOGS_PROFILES';
export const SAVE_DOGS_PROFILES = 'SAVE_DOGS_PROFILES';
export const FETCH_MEMBERS_PROFILES = 'FETCH_MEMBERS_PROFILES';
export const SAVE_MEMBERS_PROFILES = 'SAVE_MEMBERS_PROFILES';
export const FETCH_ACCOUNT_DOGS_PROFILES = 'FETCH_ACCOUNT_DOGS_PROFILES';
export const SAVE_ACCOUNT_DOGS_PROFILES = 'SAVE_ACCOUNT_DOGS_PROFILES';
export const FETCH_ACCOUNT_MEMBER_PROFILE = 'FETCH_ACCOUNT_MEMBER_PROFILE';
export const SAVE_ACCOUNT_MEMBER_PROFILE = 'SAVE_ACCOUNT_MEMBER_PROFILE';

export const fetchMembersProfiles = () => ({
  type: FETCH_MEMBERS_PROFILES,
});

export const saveMembersProfiles = (profiles) => ({
  type: SAVE_MEMBERS_PROFILES,
  profiles: profiles,
});

export const fetchDogsProfiles = () => ({
  type: FETCH_DOGS_PROFILES,
});

export const saveDogsProfiles = (profiles) => ({
  type: SAVE_DOGS_PROFILES,
  profiles: profiles,
});

export const fetchAccountDogsProfiles = () => ({
  type: FETCH_ACCOUNT_DOGS_PROFILES,
});

export const saveAccountDogsProfiles = (accountDogsProfiles) => ({
  type: SAVE_ACCOUNT_DOGS_PROFILES,
  accountDogsProfiles: accountDogsProfiles,
});
export const fetchAccountMemberProfile = () => ({
  type: FETCH_ACCOUNT_MEMBER_PROFILE,
});

export const saveAccountMemberProfile = (accountMemberProfile) => ({
  type: SAVE_ACCOUNT_MEMBER_PROFILE,
  accountMemberProfile: accountMemberProfile,
});
