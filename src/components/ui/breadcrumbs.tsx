import Link from 'next/link'

export const Breadcrumbs = () => {
  return (
    <div className="font-medium text-[#8E8E96] text-xs">
      <Link href="/account">Настройки аккаунта</Link> / Загрузка аватара
    </div>
  )
}
