import axios from 'axios';
import { FETCH_DOGS_PROFILES, saveDogsProfiles, FETCH_MEMBERS_PROFILES,saveMembersProfiles, FETCH_ACCOUNT_DOGS_PROFILES, saveAccountDogsProfiles, FETCH_ACCOUNT_MEMBER_PROFILE, saveAccountMemberProfile, fetchAccountProfiles, SEND_NEW_ACCOUNT, sendNewAccount, SUBMIT_NEW_DOG, fetchAccountDogsProfiles, DELETE_DOG, deleteDog} from '../actions/profiles';

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

    case FETCH_ACCOUNT_MEMBER_PROFILE:
      axios.get('http://caroline-georges.vpnuser.lan:8090/api/member',
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data, 'member');
          store.dispatch(saveAccountMemberProfile(response.data.memberData));
        })
        .catch((error) => {
          console.log(error);
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
          console.log(response.data);
          store.dispatch(saveAccountDogsProfiles(response.data.dogs));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEND_NEW_ACCOUNT:
      axios.post('http://caroline-georges.vpnuser.lan:8090/api/secure/members',
        {
          username: store.getState().user.username,
          password: store.getState().user.password,
          email: store.getState().user.email,
        },
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_NEW_DOG:

      const addedDog = store.getState().profiles.dogs.slice(-1)[0];

      axios.post('http://caroline-georges.vpnuser.lan:8090/api/secure/dogs', {
        name: addedDog.name,
        age: addedDog.age,
        personality: addedDog.personality,
        size: addedDog.size,
        race: addedDog.race,
      },
      {
        headers: {
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

      case DELETE_DOG:

        axios.delete(`http://caroline-georges.vpnuser.lan:8090/api/secure/dogs/${action.slug}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(deleteDog());
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
