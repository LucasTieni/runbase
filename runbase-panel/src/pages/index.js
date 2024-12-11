import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import axios from 'axios'
import * as S from 'styles/home'
import Nav from 'components/nav'
import Container from 'components/container'
import ProjectCard from 'components/cards/project'
import { Title } from 'components/typography'
import Button from 'components/button'

import Layout from 'components/layout/dashboard'

const arraytest = [1, 2, 3, 4, 5, 6]

export default function Home({ session, projects }) {
  return (
    <>
      <Title as="h2" size="h4" marginB={16}>
        Templates
      </Title>
      <Title as="h2" size="h4" marginB={16}>
        My Apps
      </Title>
      <S.CardsContainer>
        {arraytest.map((item) => (
          <ProjectCard>Conteudo</ProjectCard>
        ))}
      </S.CardsContainer>
      {/* <S.Container>
        <S.Header>nav</S.Header>
        <S.Sidebar>menu</S.Sidebar>
        <S.Stage>stage</S.Stage>
      </S.Container> */}
      {/* <Nav />
      <Container>
        <S.Org>
          <Title as="h2" size="h4">
            Fabriciobuzatto{"'"}s Org
          </Title>
          <Button>Add New Project</Button>
        </S.Org>
        {projects.data.map((project, i) => (
          <ProjectCard key={'project' + i} name={project.attributes.name} />
        ))}
      </Container> */}
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions)

//   console.log('index', session)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   const projectsRequest = axios.get(process.env.STRAPI_API_URL + '/projects')
//   const [projects] = await Promise.all([projectsRequest])
//   return {
//     props: { projects: projects.data },
//   }
// }
