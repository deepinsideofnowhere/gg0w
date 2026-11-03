import { asset } from '../lib/base'

export default function PostCover({ post, className = '' }) {
  if (post.cover) {
    return <img src={asset(post.cover)} alt="" loading="lazy" className={`object-cover ${className}`} />
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${asset('/assets/images/bg.png')})` }}
    >
      <img src={asset('/assets/images/car-top.png')} alt="" loading="lazy" className="h-[70%] w-auto rotate-90 opacity-90" />
    </div>
  )
}
