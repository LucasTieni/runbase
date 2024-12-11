import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Nav() {
  // const { data: session, status } = useSession()
  return (
    <>
      <S.Nav>
        <S.Brand>
          <Link href="/">
            <Image src="/runbase-brand.svg" alt="Runbase Logo" width={106} height={29} priority />
          </Link>
          {/* <div>
            Olá,
            <span>
              {'\u00A0'}
              {session?.user?.name ? session?.user?.name : session?.user?.username}!
            </span>
          </div> */}
        </S.Brand>
      </S.Nav>
    </>
  )
}
