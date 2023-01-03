import { Hero } from '~/components/Sections/Hero'
import { Archive } from '~/components/Sections/Archive'
import { Biography } from '~/components/Sections/Biography'
export default function Index() {
  return <><Hero /><Biography />
    <Archive />
  </>
}
