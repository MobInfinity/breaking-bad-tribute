interface MarqueeProps {
  items: string[]
  reverse?: boolean
  slow?: boolean
  className?: string
  separator?: string
}

/** 跑马灯：内容复制两份实现无缝循环 */
export default function Marquee({ items, reverse = false, slow = false, className = '', separator = '✦' }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className={`marquee select-none ${className}`} aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'reverse' : ''} ${slow ? 'slow' : ''}`}>
        {row.map((text, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="px-6 md:px-10">{text}</span>
            <span className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
