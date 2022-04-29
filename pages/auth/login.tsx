import Link from 'next/link'


function Login() {
  return (
      <>
    <div><h1>Login</h1></div>
    <Link href='/auth/register'>
    <a>New user? register here</a>
    </Link>
    </>
  )
}

export default Login