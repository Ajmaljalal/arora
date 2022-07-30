import { Auth } from 'aws-amplify';

export const signUp = async ({ username, password, name }) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        name
      },
      autoSignIn: { // optional - enables auto sign in after user is confirmed
        enabled: true,
      }
    });
    return user
  } catch (error) {
    return error
  }
}


export const confirmSignUp = async ({ username, code }) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    return error
  }
}

export const signIn = async ({ username, password }) => {
  try {
    const { user } = await Auth.signIn({
      username,
      password,
    });
    return user
  } catch (error) {
    return error
  }
}

export const signOut = async () => {
  try {
    await Auth.signOut()
  } catch (error) {
    return error
  }

}