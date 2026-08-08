const seasons = [
  {
    no: '壹',
    year: '2008',
    title: '第一季 · 觉醒',
    en: 'Pilot — Crazy Handful of Nothin\'',
    desc: '50岁生日后确诊肺癌的化学老师沃尔特·怀特，为给家人留下一笔钱，与昔日学生杰西·平克曼开着房车驶入荒漠。第一炉蓝色结晶出炉，"海森堡"从此诞生。',
    tag: '7 集 · AMC',
  },
  {
    no: '贰',
    year: '2009',
    title: '第二季 · 深陷',
    en: 'Grilled — ABQ',
    desc: '与图科的亡命周旋、简的死、以及那场从天而降的客机相撞——沃尔特第一次发现，谎言的碎片会像机翼一样砸向无辜的人。',
    tag: '13 集',
  },
  {
    no: '叁',
    year: '2010',
    title: '第三季 · 棋子',
    en: 'No Más — Full Measure',
    desc: '炸鸡店老板古斯·弗林伸出橄榄枝，地下超级实验室启用；双胞胎杀手越境而来。季终一声枪响，盖尔倒下，师徒二人彻底沦为棋局中的死子。',
    tag: '13 集',
  },
  {
    no: '肆',
    year: '2011',
    title: '第四季 · 弑君',
    en: 'Box Cutter — Face Off',
    desc: '师徒与古斯的冷战步步惊心：墨西哥毒杀、养老院轮椅上的铃铛、以及那半张被炸碎的脸。"我赢了。"——沃尔特第一次品尝到帝王的味道。',
    tag: '13 集',
  },
  {
    no: '伍',
    year: '2012—2013',
    title: '第五季 · 帝国与灰烬',
    en: 'Live Free or Die — Felina',
    desc: '从磁铁劫案到荒漠火车大劫案，海森堡帝国登顶又崩塌。汉克倒在沙土中，《Ozymandias》封神；最终沃尔特在制毒室的机器臂旁倒下，血与雪落定。',
    tag: '16 集 · 上下两部',
  },
]

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="reveal mb-16 md:mb-24 text-center">
        <p className="font-display text-[#b4552d] tracking-[0.5em] text-lg md:text-xl mb-3">CHAPTER ONE</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-[#f0e3c6]">五年编年</h2>
        <p className="mt-4 text-[#e7d7b4]/60 font-slab tracking-[0.3em] text-sm">二〇〇八 —— 二〇一三 · 阿尔伯克基</p>
      </div>

      <div className="relative">
        {/* 中轴线 */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d9a13b]/50 to-transparent" />

        {seasons.map((s, i) => (
          <div
            key={s.no}
            className={`reveal relative mb-14 md:mb-20 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
            }`}
          >
            {/* 节点 */}
            <span
              className={`absolute top-2 left-[9px] md:left-auto w-3 h-3 rotate-45 bg-[#d9a13b] shadow-[0_0_16px_rgba(217,161,59,0.8)] ${
                i % 2 === 0 ? 'md:right-[-6px]' : 'md:left-[-6px]'
              }`}
            />
            <p className="font-display text-[#d9a13b] text-5xl md:text-6xl leading-none">{s.year}</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-black text-[#f0e3c6] tracking-wider">
              第{s.no}季<span className="text-[#b4552d]"> · </span>{s.title.split('· ')[1]}
            </h3>
            <p className="mt-1 font-slab italic text-[#e7d7b4]/50 text-sm tracking-wider">{s.en}</p>
            <p className="mt-4 text-[#e7d7b4]/85 leading-loose text-[15px] md:text-base text-justify">{s.desc}</p>
            <span className="inline-block mt-4 border border-[#d9a13b]/50 text-[#d9a13b] text-xs tracking-[0.3em] px-3 py-1">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
