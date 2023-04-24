import axios from 'axios';
import { FETCH_DOGS_PROFILES, saveDogsProfiles, FETCH_MEMBERS_PROFILES,saveMembersProfiles, FETCH_ACCOUNT_DOGS_PROFILES, saveAccountDogsProfiles, FETCH_ACCOUNT_MEMBER_PROFILE, saveAccountMemberProfile, fetchAccountProfiles } from '../actions/profiles';

const profilesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MEMBERS_PROFILES:
      axios.get('http://caroline-georges.vpnuser.lan:8090/api/members')
        .then((response) => {
          store.dispatch(saveMembersProfiles(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

      case FETCH_DOGS_PROFILES:
      axios.get('http://caroline-georges.vpnuser.lan:8090/api/dogs ')
        .then((response) => {
          store.dispatch(saveDogsProfiles(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case FETCH_ACCOUNT_DOGS_PROFILES:
      axios.get('http://caroline-georges.vpnuser.lan:8090/api/member',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveAccountDogsProfiles(response.data.dogs));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    
    case FETCH_ACCOUNT_MEMBER_PROFILE:
      axios.get('http://caroline-georges.vpnuser.lan:8090/api/member',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveAccountMemberProfile(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);

};

export default profilesMiddleware;
