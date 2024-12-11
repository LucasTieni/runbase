import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as S from 'styles/login'

export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    })
  }

  const onSubmitGoogle = async () => {
    const result = await signIn('google', { callbackUrl: '/' })
    console.log('result', result)
  }

  return (
    <S.Container>
      <S.Brand>
        {/* <Image width={120} height={65} src="/fa-logo.webp" alt="F.A. Colchões - Marca" /> */}
      </S.Brand>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input name="email" placeholder="Email" type="email" {...register('email')} />
        <S.Input name="password" placeholder="Senha" type="text" {...register('password')} />
        <S.Button type="submit">Entrar</S.Button>
      </form>
      <button onClick={() => onSubmitGoogle()}>Entrar com Google</button>
    </S.Container>
  )
}
