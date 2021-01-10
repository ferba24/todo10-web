import Link from 'next/link'

const DefaultLink = ({url = '/', children}) => (
  <Link href={url} prefetch={false}>
    <a>
      {children}
    </a>
  </Link>
)

export const topItems = [
  {
    key: 'email',
    icon: '/icons/mail.svg',
    title: 'todo10@todo10.com',
    desc: 'For any doubt you have. Your needs are our priorities'
  },
  {
    key: 'chat',
    icon: '/icons/message.svg',
    title: 'Chat with us...',
    desc: <span><DefaultLink>Click here</DefaultLink> and get assistance from our team of experts</span>
  },
  {
    key: 'phone',
    icon: '/icons/phone.svg',
    title: '+54 9 11509090',
    desc: 'Our lines are always open for you. Just call us.',
  }
]