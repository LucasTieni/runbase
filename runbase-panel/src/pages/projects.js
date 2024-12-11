import { stripe } from 'lib/stripe'
import * as S from 'styles/home'
import Nav from 'components/nav'
import Container from 'components/container'
import ProjectCard from 'components/cards/project2'
import { Title } from 'components/typography'
import Button from 'components/button'

export default function Projects({ products }) {
  return (
    <>
      <Nav />
      <Container>
        <S.Org>
          <Title as="h2" size="h4">
            Fabriciobuzatto{"'"}s Org
          </Title>
          <Button>Add New Project</Button>
        </S.Org>
        {products.map((product) => (
          <ProjectCard key={product.id} name={product.name} price={product.price} />
        ))}
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: { products },
  }
}
