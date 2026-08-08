import Marquee from './Marquee'

const items = [
  'REMEMBER MY NAME',
  '记住我的名字',
  'FELINA',
  '绝命毒师 · 2008—2013',
  'I DID IT FOR ME',
  'I LIKED IT',
  'I WAS GOOD AT IT',
  'AND I WAS REALLY ALIVE',
]

export default function Footer() {
  return (
    <footer className="relative">
      <Marquee
        items={items}
        slow
        className="border-y-2 border-[#d9a13b]/60 bg-[#d9a13b] text-[#241610] font-display text-2xl md:text-4xl tracking-[0.18em] py-3"
      />
      <div className="bg-[#0d0704] px-6 md:px-12 py-14 md:py-20 text-center">
        <div className="flex items-center justify-center gap-3 text-[#d9a13b] mb-6">
          <span className="element-box font-display text-2xl md:text-3xl"><span className="num">35</span>Br</span>
          <span className="element-box font-display text-2xl md:text-3xl"><span className="num">56</span>Ba</span>
        </div>
        <p className="font-slab italic text-[#e7d7b4]/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          “我做这一切不是为了家人。是为了我自己。我喜欢，我擅长，<br className="hidden md:block" />
          而且那让我觉得自己真正活着。”
        </p>
        <p className="mt-3 text-[#e7d7b4]/40 text-xs tracking-[0.3em]">—— 沃尔特·怀特 · S05E16「Felina」</p>
        <div className="my-10 mx-auto w-40 h-px bg-[#d9a13b]/30" />
        <p className="text-[#e7d7b4]/45 text-xs leading-relaxed tracking-[0.2em] max-w-xl mx-auto">
          本站为粉丝非营利纪念页，仅用于表达对剧集的敬意。
          <br />
          《绝命毒师》及相关角色版权归 Sony Pictures Television 与 AMC 所有。
        </p>
        <p className="mt-6 font-display text-[#d9a13b]/60 tracking-[0.4em] text-sm">EST. ALBUQUERQUE · NEW MEXICO</p>
      </div>
    </footer>
  )
}
