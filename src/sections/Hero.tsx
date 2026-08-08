import Marquee from './Marquee'

const marqueeA = [
  'SAY MY NAME',
  '海森堡 HEISENBERG',
  'I AM THE ONE WHO KNOCKS',
  '蓝色结晶 · 99.1%',
  'ALBUQUERQUE · NEW MEXICO',
  '2008 — 2013',
  'OZYMANDIAS',
  'REMEMBER MY NAME',
]

const marqueeB = [
  '绝命毒师',
  'BREAKING BAD',
  '五季 · 62 集',
  'AMC 出品',
  '文斯·吉利根',
  'YO, BITCH!',
  'Felina',
  'better call saul',
]

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 背景：落日荒漠渐变 + 大太阳 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a2412] via-[#241610] to-[#140c07]" />
      <div
        className="absolute left-1/2 top-[16%] -translate-x-1/2 w-[62vmin] h-[62vmin] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(233,178,84,0.85) 0%, rgba(196,120,50,0.4) 45%, transparent 70%)',
        }}
      />
      {/* 远山剪影 */}
      <svg
        className="absolute bottom-0 left-0 w-full text-[#0f0804]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        style={{ height: '22vh' }}
      >
        <path
          fill="currentColor"
          d="M0,140 L120,90 L260,130 L420,60 L560,120 L720,45 L880,110 L1040,70 L1200,125 L1330,85 L1440,120 L1440,220 L0,220 Z"
        />
        <path
          fill="#000"
          opacity="0.5"
          d="M0,180 L200,150 L400,175 L640,140 L900,178 L1140,150 L1440,180 L1440,220 L0,220 Z"
        />
      </svg>

      {/* 倾斜跑马灯（背景装饰层） */}
      <div className="absolute top-[34%] left-[-8%] w-[116%] -rotate-[3.5deg] z-[1]">
        <Marquee
          items={marqueeB}
          slow
          className="border-y-2 border-[#d9a13b]/70 bg-[#d9a13b] text-[#241610] font-display text-2xl md:text-4xl tracking-[0.15em] py-2 md:py-3"
        />
      </div>
      <div className="absolute top-[52%] left-[-8%] w-[116%] rotate-[2deg] z-[1] hidden md:block opacity-90">
        <Marquee
          items={marqueeA}
          reverse
          slow
          className="border-y border-[#f0e3c6]/40 bg-[#191009]/85 text-[#e7d7b4] font-slab text-lg md:text-2xl tracking-[0.2em] py-2"
        />
      </div>

      {/* 顶栏 */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-6 text-[#e7d7b4]/80">
        <p className="font-slab text-xs md:text-sm tracking-[0.35em]">粉丝纪念站 · A FAN TRIBUTE</p>
        <p className="font-display text-sm md:text-base tracking-[0.3em]">2008 — 2013</p>
      </div>

      {/* 主标题 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-3 md:gap-5 mb-5 md:mb-7 text-[#d9a13b]">
          <span className="element-box font-display text-4xl md:text-6xl">
            <span className="num">35</span>Br
          </span>
          <span className="element-box font-display text-4xl md:text-6xl">
            <span className="num">56</span>Ba
          </span>
        </div>
        <h1 className="text-[#f0e3c6] font-black leading-none tracking-[0.08em] text-[17vw] md:text-[11rem] drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
          绝命毒师
        </h1>
        <p className="font-display text-[#d9a13b] tracking-[0.55em] md:tracking-[0.8em] text-xl md:text-4xl mt-4 md:mt-6 indent-[0.55em] md:indent-[0.8em]">
          BREAKING BAD
        </p>
        <p className="mt-6 md:mt-8 max-w-xl text-[#e7d7b4]/85 font-slab text-sm md:text-lg leading-relaxed tracking-widest">
          一位化学老师的美国往事——关于尊严、谎言与蓝色结晶的
          <span className="ruled">五年沉沦史</span>。
        </p>
      </div>

      {/* 底部跑马灯 + 滚动提示 */}
      <div className="relative z-10">
        <Marquee
          items={marqueeA}
          className="border-y-2 border-[#f0e3c6]/25 bg-[#100a05]/90 text-[#f0e3c6] font-display text-xl md:text-3xl tracking-[0.2em] py-3 md:py-4"
        />
        <div className="flex justify-center py-5">
          <span className="text-[#e7d7b4]/60 text-xs tracking-[0.4em] animate-bounce">▼ 向下滚动 ▼</span>
        </div>
      </div>
    </header>
  )
}
