import { stripe } from 'lib/stripe'
import * as S from 'styles/products'
import Nav from 'components/nav'
import Container from 'components/container'
import { Title } from 'components/typography'
import { Text } from 'components/typography'
import ProductCard from 'components/cards/product'
import { Grid, Col } from 'components/grid'

export default function Products() {
  return (
    <>
      <Nav />
      <Container>
        <S.Header>
          <Title>Select a template.</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        </S.Header>
        <Title as="h2" size="h3" marginT="16" marginB="8">
          Apps
        </Title>
        <Grid>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
        </Grid>
        <Title as="h2" size="h3" marginT="32" marginB="8" weight="">
          CMS
        </Title>
        <Grid>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
          <Col break={3} gutter={8}>
            <ProductCard />
          </Col>
        </Grid>
      </Container>
    </>
  )
}
