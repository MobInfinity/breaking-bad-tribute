const characters = [
  {
    sym: 'W',
    num: '74',
    name: '沃尔特·怀特',
    en: 'Walter White / Heisenberg',
    actor: '布莱恩·科兰斯顿',
    line: '我才是那个敲门的人。',
    note: '从唯唯诺诺的化学老师到心狠手辣的毒枭，美剧史上最深的人物弧光。',
  },
  {
    sym: 'J',
    num: '∞',
    name: '杰西·平克曼',
    en: 'Jesse Pinkman',
    actor: '亚伦·保尔',
    line: 'Yo, bitch!',
    note: '帝国里唯一残存良知的人，一路被碾碎，又一路野蛮生长。',
  },
  {
    sym: 'S',
    num: '16',
    name: '索尔·古德曼',
    en: 'Saul Goodman',
    actor: '鲍勃·奥登科克',
    line: 'Better Call Saul!',
    note: '花西装、浮夸广告与天才般的法律钻营，后来拥有了自己的整部前传。',
  },
  {
    sym: 'G',
    num: '31',
    name: '古斯塔沃·弗林',
    en: 'Gustavo Fring',
    actor: '吉安卡罗·埃斯波西托',
    line: '我会好好看着你死。',
    note: '炸鸡店老板的完美双面人生，西装革履的深渊。',
  },
  {
    sym: 'M',
    num: '12',
    name: '迈克·厄尔曼特劳特',
    en: 'Mike Ehrmantraut',
    actor: '乔纳森·班克斯',
    line: '别再搞半吊子手段了。',
    note: '沉默的老派清道夫，全剧最稳的一杆枪，也是最疲惫的父亲。',
  },
  {
    sym: 'H',
    num: '01',
    name: '汉克·施拉德',
    en: 'Hank Schrader',
    actor: '迪恩·诺里斯',
    line: '我追了一年的海森堡……是我连襟。',
    note: '粗嗓门下的顶级直觉，矿标收藏家的执念最终把他引向荒漠。',
  },
]

export default function Characters() {
  return (
    <section className="relative py-24 md:py-36 bg-[#120b07] border-y border-[#d9a13b]/15">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="reveal mb-16 md:mb-20 text-center">
          <p className="font-display text-[#b4552d] tracking-[0.5em] text-lg md:text-xl mb-3">CHAPTER TWO</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-[#f0e3c6]">人物志</h2>
          <p className="mt-4 text-[#e7d7b4]/60 font-slab tracking-[0.3em] text-sm">每一个名字，都是一张泛黄的旧照片</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {characters.map((c, i) => (
            <div
              key={c.sym}
              className={`reveal photo-card p-6 md:p-7 ${i % 3 === 1 ? 'sm:translate-y-6' : ''} ${
                i % 2 === 0 ? 'rotate-[-1.2deg]' : 'rotate-[1.1deg]'
              } hover:rotate-0 hover:-translate-y-1 transition-transform duration-500`}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <div className="flex items-start justify-between">
                <span className="element-box font-display text-3xl md:text-4xl text-[#7e2f1e]">
                  <span className="num">{c.num}</span>
                  {c.sym}
                </span>
                <span className="font-display text-[#7e2f1e]/40 text-xl tracking-widest">FILED</span>
              </div>
              <h3 className="mt-4 text-2xl md:text-[1.7rem] font-black tracking-wider">{c.name}</h3>
              <p className="font-slab italic text-[#5c452a] text-sm mt-1">{c.en}</p>
              <p className="text-xs tracking-[0.25em] text-[#7e2f1e] mt-2">饰 · {c.actor}</p>
              <div className="my-4 h-px bg-[#2c1c10]/20" />
              <p className="font-slab font-semibold text-[15px] leading-relaxed">“{c.line}”</p>
              <p className="mt-3 text-sm leading-relaxed text-[#2c1c10]/75">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
