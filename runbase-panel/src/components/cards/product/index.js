import Image from 'next/image'
import * as S from './styles'

export default function ProductCard() {
  return (
    <S.Card>
      <S.Col>
        <S.Logo />
      </S.Col>
      <S.Col>
        <S.Label>Name</S.Label>
        <S.Text>admin.parceirofacolchoes.com.br</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Strapi CMS</S.Label>
        <S.Text>R$ 30</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Renovation</S.Label>
        <S.Text>August 14</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Status</S.Label>
        <S.Text>Active</S.Text>
      </S.Col>
    </S.Card>
  )
}
