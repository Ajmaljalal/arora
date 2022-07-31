import React, { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'

type withAuthorizationProps = {
  Component: JSX.Element
}

export default function withAuthorization(Component) {
  return function innerComponent({ ...props }) {
    const [user, setUser] = useState(null)

    const getUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser()
        return userData
      } catch (error) {
        setUser(null)
      }
    }

    useEffect(() => {
      Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            getUser().then((userData) => setUser(userData));
            break;
          case "signOut":
            setUser(null);
            break;
          case "signIn_failure":
            setUser(null);
            break;
        }
      })

    }, [])

    if (user) {
      return <Component {...props} />
    } else return null
  }
}
