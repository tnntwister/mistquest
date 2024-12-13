import { GetStaticPropsContext } from 'next'
import { getMarkdownContent } from '@/lib/markdown'

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string[] }>) {
  try {
    const content = await getMarkdownContent(`the-missing-5th-edition/${params?.slug?.join('/')}.md`)
    
    return {
      props: {
        content: content.content,
        title: content.metadata.title,
        metadata: content.metadata
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
} 