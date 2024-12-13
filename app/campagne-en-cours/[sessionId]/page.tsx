import Layout from '@/components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { sessions } from '@/lib/data'

export const dynamicParams = false

export async function generateStaticParams() {
  return sessions.map((session) => ({
    sessionId: session.id,
  }))
}

export default function SessionPage({ params }: { params: { sessionId: string } }) {
  const session = sessions.find((s) => s.id === params.sessionId)

  if (!session) {
    return <div>Session not found</div>
  }

  return (
    <Layout>
      <Link href="/campagne-en-cours" className="inline-flex items-center text-purple-400 hover:text-gold-200 transition-colors mb-6">
        <ArrowLeft className="mr-2" />
        Retour à la campagne en cours
      </Link>
      
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {session.title}
        </h1>
        
        <p className="text-gray-300 mb-8">
          Date : {session.date}
        </p>

        <Image 
          src={session.imageUrl}
          alt={session.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />

        <div dangerouslySetInnerHTML={{ __html: session.content }} />
      </article>
    </Layout>
  )
}

