
import Link from 'next/link'

function Register() {
  return (
      <>
      <div><h1>Register</h1></div>
      <Link href='/auth/login'>
    <a>Have an account? login</a>
    </Link>
    </>
  )
}

export default Register