import { useTranslation } from '@/hooks'

const Footer = () => {
    const { t } = useTranslation()
    return <div className="bg-white d-flex justify-content-center align-items-center p-3">{t.common.createdBy}</div>
}

export default Footer
