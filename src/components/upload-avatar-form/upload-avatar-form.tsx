import { ChangeEvent, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { AccountService } from '@/service/account-service'
import { Alert } from '../ui/alert'
import { useRouter } from 'next/router'

export const UploadAvatarForm = () => {
  const { push } = useRouter()
  const [preview, setPreview] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)
  const selectedFile = useRef<File | null>()

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const types = ['png', 'jpeg', 'gif']
    const size = 5242880 // 5mb
    const file = event.target.files![0]

    if (file.size <= size && types.some((type) => file.type.includes(type))) {
      const imageUrl = URL.createObjectURL(file)
      setPreview(imageUrl)
      selectedFile.current = file
    } else {
      selectedFile.current = null
      event.target.value = ''
    }
  }

  const handleCancelUpload = () => {
    setPreview('')
    selectedFile.current = null
  }

  const handleSelectFile = () => {
    inputRef.current?.click()
  }

  const handleUploadFile = async () => {
    const reader = new FileReader()
    reader.onload = async (event) => {
      try {
        setError('')
        setIsLoading(true)
        const result = await AccountService.uploadAvatar(
          String(event.target?.result)
        )
        push('/account')
      } catch (error) {
        setError(error as string)
      } finally {
        setIsLoading(false)
      }
    }
    reader.readAsDataURL(selectedFile.current!)
  }

  return (
    <div className="mt-5">
      {preview ? (
        <>
          <h4 className="text-2xl font-bold mb-9">Фото для аватарки</h4>
          {error && <Alert className="mb-5">{error}</Alert>}
          <div className="p-5 bg-[#F3F5F5] rounded-xl">
            <img
              className="w-40 h-40 mx-auto rounded-full bg-contain"
              src={preview}
              alt="Avatar"
            />
          </div>
          <div className="mt-8 space-y-4">
            <Button
              disabled={isLoading}
              onClick={handleUploadFile}
              variant="secondary"
            >
              {isLoading ? 'Загрузка...' : 'Сохранить'}
            </Button>
            <Button
              disabled={isLoading}
              onClick={handleCancelUpload}
              variant="tertiary"
            >
              Отменить
            </Button>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-2xl font-bold mb-9">Загрузка аватара</h4>
          <div className="mb-10">
            <div className="text-sm">Загрузите файл размером до 5Мб</div>
            <div className="text-sm">По формату: JPG, PNG, GIF</div>
          </div>
          <Button onClick={handleSelectFile} variant="secondary">
            Выбрать файл
          </Button>
          <input
            onChange={handleChangeFile}
            ref={inputRef}
            type="file"
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  )
}
