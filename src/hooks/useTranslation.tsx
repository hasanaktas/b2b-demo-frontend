import { useRouter } from 'next/router'
import { LanguageCode } from '@/types'
import * as locales from '@/locales'

const useTranslation = () => {
    const router = useRouter()
    const languageCode = (router.locale === 'tr' ? 'tr' : 'en') as LanguageCode

    return {
        t: locales[languageCode],
        languageCode,
    }
}

export default useTranslation
