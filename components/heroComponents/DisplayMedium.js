import Image from '../Image'
import Link from 'next/link'

const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
  return (
    <div className="lg:w-flex-half
    mb-4 lg:mb-0
    bg-light p-8 pb-0 hover:bg-light-200">
      <Link href={`${link}`}>
        <a>
          <div className="flex flex-column justify-center items-center h-56">
            <Image src={imageSrc} alt={title} className="w-3/5" />
          </div>
          <div className="mb-8">
            <p className="text-3xl font-semibold mb-1">{title}</p>
            <p className="text-xs text-gray-700">{subtitle}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default DisplayMedium;