'use client'
import Link from 'next/link'

interface PageTemplateProps {
  title: string
  description?: string
}

export default function PageTemplate({ title, description }: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        {description || `This is a page about ${title.toLowerCase()}.`}
      </p>
      <Link href="/contact" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
        Go to Contact
      </Link>
    </div>
  )
}
