import { Auth } from 'aws-amplify';

export const signUp = async ({ username, password, name }) => {
  return await Auth.signUp({
    username,
    password,
    attributes: {
      name
    },
    autoSignIn: { // optional - enables auto sign in after user is confirmed
      enabled: true,
    }
  });
}


export const confirmSignUp = async ({ username, code }) => {
  return Auth.confirmSignUp(username, code);

}

export const signIn = async ({ username, password }) => {
  return await Auth.signIn({
    username,
    password,
  });

}

export const signOut = async () => {
  return Auth.signOut()
}