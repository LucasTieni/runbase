import Image from 'next/image'
import * as S from './styles'

export default function ProjectCard({ name, price }) {
  return (
    <S.Card>
      <S.Col>
        <S.Logo />
      </S.Col>
      <S.Col>
        <S.Label>{name}</S.Label>
        <S.Text>admin.parceirofacolchoes.com.br</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Strapi CMS</S.Label>
        <S.Text>{price}</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Renovation</S.Label>
        <S.Text>August 14</S.Text>
      </S.Col>
      <S.Col>
        <S.Label>Status</S.Label>
        <S.Text>Active</S.Text>
      </S.Col>
      <S.Icon>
        <Image src="/share-box-fill.svg" alt="Launch" width={24} height={24} priority />
      </S.Icon>
    </S.Card>
  )
}
