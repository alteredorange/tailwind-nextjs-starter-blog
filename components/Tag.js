import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-sm font-medium text-blue-700 dark:text-blue-400 uppercase hover:text-blue-600 dark:hover:text-blue-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
