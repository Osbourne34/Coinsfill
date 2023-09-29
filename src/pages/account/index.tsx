import { ReactElement, useEffect, useState } from 'react'
import { Layout } from '@/components/layout/layout'
import { Container } from '@/components/ui/container'
import Link from 'next/link'
import { AccountService } from '@/service/account-service'

const Profile = () => {
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    AccountService.getAvatar()
      .then((data) => {
        setAvatar(data.image)
      })
      .catch(() => console.log('error'))
  }, [])

  return (
    <div className="py-5">
      <Container>
        <img
          className="block h-40 w-40 rounded-full border mx-auto mb-5"
          src={avatar}
        />

        <Link href="/account/image">Перейти к загрузке аватара</Link>
      </Container>
    </div>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile
