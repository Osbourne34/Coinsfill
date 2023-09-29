import { ReactElement } from 'react'
import { Layout } from '@/components/layout/layout'
import { Container } from '@/components/ui/container'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { UploadAvatarForm } from '@/components/upload-avatar-form/upload-avatar-form'

const ProfilePage = () => {
  return (
    <div className="py-5">
      <Container>
        <Breadcrumbs />

        <UploadAvatarForm />
      </Container>
    </div>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default ProfilePage
