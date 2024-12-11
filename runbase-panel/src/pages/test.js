import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import axios from 'axios'
import Button from 'components/button'
import Container from 'components/container'

import Layout from 'components/layout/dashboard'

export default function Test({ children, session, projects }) {
  return (
    <>
      <Container>
        asd
        <Button>Publicar Aplicação</Button>
      </Container>
    </>
  )
}

Test.getLayout = function getLayout(page) {
  return <Layout teste="brasil">{page}</Layout>
}

export async function getStaticProps() {
  return { props: { title: 'brasil' } }
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
