import { getNavigation } from '@/lib/navigation'
import { DocSidebarNav } from './doc-sidebar-nav'

export async function DocSidebar() {
  const navigation = await getNavigation()
  return <DocSidebarNav navigation={navigation} />
}

