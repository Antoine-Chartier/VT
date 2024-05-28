import { parseISO, format } from 'date-fns'
import { fr, enUS } from 'date-fns/locale'


type LocaleKeys = 'fr' | 'en';

type Props = {
  dateString: string
  locale?: LocaleKeys
}

const DateFormatter = ({ dateString, locale = "fr" }: Props) => {
  const date = parseISO(dateString)
  const locales = { fr, en: enUS }
  return <time dateTime={dateString}>{format(date, 'd	MMMM, yyyy', {locale: locales[locale] })}</time>
}

export default DateFormatter
