export default function Reviews() {
  return (
    <div className="flex-1 px-4 py-12 md:px-10 lg:px-40">
      <div className="mx-auto max-w-[800px]">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">What our community says</h1>
          <p className="text-[#608a6e] text-lg mb-8">Join over 10,000 professionals finding better ways to connect.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-xl bg-white border border-[#dbe6df] shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black mb-2">4.8</span>
              <div className="flex gap-1 mb-1 text-primary">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <span className="text-sm font-medium text-[#608a6e]">1,248 verified reviews</span>
            </div>
            <div className="w-px h-20 bg-[#dbe6df] hidden md:block"></div>
            <div className="w-full max-w-[300px] flex flex-col gap-2">
              {[
                { w: 82, label: '82%' },
                { w: 12, label: '12%' },
                { w: 4, label: '4%' },
              ].map((r, i) => (
                <div className="flex items-center gap-3" key={i}>
                  <span className="text-xs font-bold w-3">{5 - i}</span>
                  <div className="h-2 flex-1 rounded-full bg-[#f0f5f1] overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${r.w}%` }}></div>
                  </div>
                  <span className="text-xs font-medium text-[#608a6e] w-8">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mb-8 border-b border-[#dbe6df]">
          <div className="flex gap-8">
            <button className="border-b-2 border-primary pb-3 text-sm font-bold text-[#111813]">Most Recent</button>
            <button className="border-b-2 border-transparent pb-3 text-sm font-bold text-[#608a6e] hover:text-[#111813] transition-colors">Highest Rated</button>
            <button className="border-b-2 border-transparent pb-3 text-sm font-bold text-[#608a6e] hover:text-[#111813] transition-colors">Lowest Rated</button>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              initials: 'SJ',
              name: 'Sarah Jenkins',
              meta: 'Verified Professional',
              date: 'Oct 12, 2023',
              text:
                'Service Connect made finding a reliable plumber so easy. The professional arrived on time, was extremely knowledgeable, and did a fantastic job with our leak. I really appreciate the transparent pricing and the ease of booking through the platform. Highly recommend to anyone looking for quality home services!',
            },
            {
              initials: 'MR',
              name: 'Michael Rodriguez',
              meta: 'Business Owner',
              date: 'Oct 10, 2023',
              text:
                "Top notch platform. I've used it for several commercial maintenance projects now and the quality of service providers is consistently high. The review system here actually feels authentic, which makes a huge difference when hiring for expensive jobs.",
            },
          ].map((r) => (
            <article key={r.name} className="rounded-xl bg-white p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[#111813]">{r.initials}</div>
                  <div>
                    <h4 className="font-bold leading-tight">{r.name}</h4>
                    <span className="text-xs text-[#608a6e]">{r.meta}</span>
                  </div>
                </div>
                <span className="text-sm text-[#608a6e]">{r.date}</span>
              </div>
              <div className="flex gap-0.5 mb-3 text-primary">
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
              </div>
              <p className="text-[#111813] leading-relaxed mb-4">{r.text}</p>
              <div className="flex items-center gap-6 text-[#608a6e]">
                <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                  <span>Helpful</span>
                </button>
                <button className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">flag</span>
                  <span>Report</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

