import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as S from 'styles/login'
import axios from 'axios'

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // const request = axios.get(process.env.STRAPI_API_URL + '/projects')
    // axios
    //   .post('http://localhost:1337/api/auth/local/register', {
    //     username: 'Strapi teste',
    //     email: 'user@gmail.com',
    //     password: 'strapiPassword',
    //   })
    //   .then((response) => {
    //     // Handle success.
    //     console.log('Well done!')
    //     console.log('User profile', response.data.user)
    //     console.log('User token', response.data.jwt)
    //   })
    //   .catch((error) => {
    //     // Handle error.
    //     console.log('An error occurred:', error.response)
    //   })
  }

  const onSubmitGoogle = async () => {
    await signIn('google', { callbackUrl: '/' })
  }

  return (
    <S.Container>
      <S.Brand>
        {/* <Image width={120} height={65} src="/fa-logo.webp" alt="F.A. Colchões - Marca" /> */}
        Cadsatrar
      </S.Brand>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input name="email" placeholder="Email" type="email" {...register('email')} />
        <S.Input name="password" placeholder="Senha" type="text" {...register('password')} />
        <S.Button type="submit">Cadastrar</S.Button>
      </form>
      <button onClick={() => onSubmit()}>Cadastrar</button>
    </S.Container>
  )
}
