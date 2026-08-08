const moments = [
  {
    code: 'S03E02',
    title: '屋顶上的披萨',
    en: 'Caballo sin Nombre',
    desc: '沃尔特把整张披萨甩上自家屋顶——科兰斯顿一次通过，成为全剧最著名的即兴名场面。',
    quote: '“一份不切的披萨，把省下的钱让利给顾客。”',
  },
  {
    code: 'S04E06',
    title: '我才是敲门的人',
    en: 'Cornered',
    desc: '面对斯凯勒的劝说，沃尔特撕下最后的伪装，海森堡在自家卧室里正式登基。',
    quote: '“我没有危险，我就是危险本身。”',
  },
  {
    code: 'S04E13',
    title: '养老院的对决',
    en: 'Face Off',
    desc: '轮椅上的铃铛连响三声，古斯走出房间，从容整理好领带——然后镜头转到另一半张脸。',
    quote: '“这是最后一次，赫克托。”',
  },
  {
    code: 'S05E01',
    title: '磁铁计划',
    en: 'Live Free or Die',
    desc: '一辆装着巨型电磁铁的货车掀翻了证物室的笔记本，也掀开了第五季的狂飙。',
    quote: '“Yeah, bitch! Magnets!”',
  },
  {
    code: 'S05E07',
    title: '说出我的名字',
    en: 'Say My Name',
    desc: '荒漠里，海森堡让 Declan 说出那四个字。蓝色帝国的加冕礼，也是最后的回光返照。',
    quote: '“Say my name.” — “Heisenberg.” — “You\'re goddamn right.”',
  },
  {
    code: 'S05E14',
    title: '奥西曼提斯',
    en: 'Ozymandias',
    desc: '汉克倒在荒漠，婴儿床上的电话、红色货车远去——被无数媒体称为“电视史上最伟大的一集”。',
    quote: '“吾乃万王之王，功业盖世，强者折服。”',
  },
]

export default function Moments() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="reveal mb-16 md:mb-20 text-center">
        <p className="font-display text-[#b4552d] tracking-[0.5em] text-lg md:text-xl mb-3">CHAPTER THREE</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-[#f0e3c6]">名场面包厢</h2>
        <p className="mt-4 text-[#e7d7b4]/60 font-slab tracking-[0.3em] text-sm">六帧胶片，六次心跳漏拍</p>
      </div>

      <div className="space-y-10 md:space-y-14">
        {moments.map((m, i) => (
          <article
            key={m.code}
            className={`reveal group relative border border-[#d9a13b]/25 bg-[#1e140c]/80 p-7 md:p-10 overflow-hidden hover:border-[#d9a13b]/60 transition-colors duration-500 ${
              i % 2 === 1 ? 'md:ml-16' : 'md:mr-16'
            }`}
          >
            {/* 胶片齿孔 */}
            <div className="absolute top-0 bottom-0 left-0 w-6 flex flex-col justify-around items-center opacity-40">
              {Array.from({ length: 8 }).map((_, k) => (
                <span key={k} className="w-2.5 h-2 bg-[#0f0804] rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
              ))}
            </div>
            <div className="pl-8">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="font-display text-[#d9a13b] text-2xl md:text-3xl tracking-[0.15em]">{m.code}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[#f0e3c6] tracking-wider">{m.title}</h3>
                <span className="font-slab italic text-[#e7d7b4]/45 text-sm">{m.en}</span>
              </div>
              <p className="mt-4 text-[#e7d7b4]/85 leading-loose text-[15px] md:text-base text-justify max-w-3xl">{m.desc}</p>
              <p className="mt-4 font-slab text-[#d9a13b]/90 italic leading-relaxed border-l-2 border-[#b4552d] pl-4">{m.quote}</p>
            </div>
            <span className="absolute right-5 bottom-4 font-display text-6xl md:text-8xl text-[#f0e3c6]/5 select-none group-hover:text-[#d9a13b]/10 transition-colors duration-500">
              {String(i + 1).padStart(2, '0')}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
