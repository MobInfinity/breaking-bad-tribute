const stats = [
  { num: '62', label: '总集数', sub: '五季 · 2008—2013' },
  { num: '16', label: '艾美奖', sub: '58 项提名' },
  { num: '99', label: 'Metacritic 最终季', sub: '吉尼斯“史上评分最高剧集”' },
  { num: '4', label: '剧情类视帝', sub: '布莱恩·科兰斯顿' },
]

const spinoffs = [
  {
    year: '2015—2022',
    title: '风骚律师',
    en: 'Better Call Saul',
    desc: '索尔·古德曼的前传，吉米·麦吉尔漫长而心碎的变形记。六季之后，许多影迷认为它已与正传并肩。',
  },
  {
    year: '2019',
    title: '续命之徒：绝命毒师电影',
    en: 'El Camino: A Breaking Bad Movie',
    desc: '杰西·平克曼的逃亡与告别。荒漠尽头的雪落进车里，替这个可怜人画上句号。',
  },
]

export default function Legacy() {
  return (
    <section className="relative py-24 md:py-36 bg-[#120b07] border-t border-[#d9a13b]/15">
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="font-display text-[#b4552d] tracking-[0.5em] text-lg md:text-xl mb-3">EPILOGUE</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-[#f0e3c6]">尘埃落定之后</h2>
        </div>

        {/* 数据 */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d9a13b]/25 border border-[#d9a13b]/25 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#191009] py-10 md:py-14 px-4 text-center">
              <p className="font-display text-6xl md:text-7xl text-[#d9a13b] leading-none">{s.num}</p>
              <p className="mt-4 text-[#f0e3c6] font-semibold tracking-[0.2em]">{s.label}</p>
              <p className="mt-2 text-[#e7d7b4]/50 text-xs tracking-wider">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* 衍生 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {spinoffs.map((s) => (
            <div key={s.title} className="reveal photo-card p-7 md:p-9 rotate-[0.6deg] hover:rotate-0 transition-transform duration-500">
              <span className="tape -top-3 right-8 rotate-3" />
              <p className="font-display text-[#7e2f1e] text-xl tracking-[0.2em]">{s.year}</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-wider">{s.title}</h3>
              <p className="font-slab italic text-[#5c452a] text-sm mt-1">{s.en}</p>
              <div className="my-4 h-px bg-[#2c1c10]/20" />
              <p className="text-[15px] leading-relaxed text-[#2c1c10]/80 text-justify">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
