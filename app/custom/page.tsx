import DansranFooter from "@/components/dansran-footer"
import DansranNavbar from "@/components/dansran-navbar"
import DansranBreadcrumb from "@/components/ui/breadcrumb"

const categories = [
  ["Шинэ жилийн бэлэг", "Түнш, харилцагч, хамт олонд"],
  ["Удирдлага / VIP бэлэг", "Удирдах түвшин, ТУЗ, хүндэт зочинд"],
  ["Түншийн бэлэг", "Хамтын ажиллагаа, онцгой харилцаанд"],
  ["Ойн баяр / Тусгай төсөл", "Ойн баяр, арга хэмжээ, нээлт болон онцгой захиалгад"],
]

const products = ["Бүтээгдэхүүн 1", "Бүтээгдэхүүн 2", "Бүтээгдэхүүн 3", "Бүтээгдэхүүн 4", "Бүтээгдэхүүн 5"]

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-5 py-6 text-[#0E6287] md:px-10 md:py-8">
      <header className="mx-auto max-w-6xl">
        <DansranNavbar hideCustom current="custom" />
        <div className="mt-5"><DansranBreadcrumb current="Custom" /></div>
      </header>

      <section className="mx-auto max-w-6xl pb-20 pt-20 md:pb-28 md:pt-32">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Custom</p>
        <h1 className="mt-6 max-w-3xl text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Захиалгат<br /><em className="font-serif font-normal">бүтээгдэхүүн</em></h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#0E6287]/70 md:text-2xl">Танай байгууллагын хэрэгцээ, зориулалтад тохируулан тусгай бүтээгдэхүүн бүтээнэ.</p>
      </section>

      <section className="bg-[linear-gradient(180deg,#f6f4ef_0%,#dceff4_100%)] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">01 / Төслийн чиглэлүүд</p>
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {categories.map(([title, description], index) => (
              <div key={title} className="border-b border-[#0E6287]/20 py-7">
                <span className="text-xs text-[#0E6287]/55">0{index + 1}</span>
                <h2 className="mt-4 text-2xl tracking-[-0.04em]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#0E6287]/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">02 / Бидний бүтээсэн</p>
        <div className="mt-8 grid gap-px bg-[#0E6287]/15 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <div key={product} className="flex min-h-44 flex-col justify-between bg-[#f6f4ef] p-5">
              <span className="text-xs text-[#0E6287]/55">0{index + 1}</span>
              <h2 className="text-xl tracking-[-0.04em]">{product}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0E6287] px-5 py-16 text-[#f6f4ef] md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#AAE7FF]">03 / Хүсэлт илгээх</p>
          <div className="mt-8 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Хамтдаа<br /><em className="font-serif font-normal">бүтээе.</em></h2>
              <p className="mt-7 max-w-sm leading-relaxed text-[#f6f4ef]/70">Хүссэн бүтээгдэхүүн, тоо ширхэг, хугацаагаа бичээд илгээгээрэй. Бид тантай эргэн холбогдоно.</p>
            </div>
            <form className="grid gap-5" action="mailto:info@dansran.mn" method="post" encType="text/plain">
              <label className="grid gap-2 text-sm"><span>Нэр *</span><input required name="name" className="border-b border-[#f6f4ef]/35 bg-transparent px-0 py-3 outline-none placeholder:text-[#f6f4ef]/40" /></label>
              <label className="grid gap-2 text-sm"><span>Байгууллага</span><input name="organization" className="border-b border-[#f6f4ef]/35 bg-transparent px-0 py-3 outline-none placeholder:text-[#f6f4ef]/40" /></label>
              <label className="grid gap-2 text-sm"><span>Утас эсвэл и-мэйл *</span><input required name="contact" className="border-b border-[#f6f4ef]/35 bg-transparent px-0 py-3 outline-none placeholder:text-[#f6f4ef]/40" /></label>
              <label className="grid gap-2 text-sm"><span>Таны хүсэлт *</span><textarea required name="request" placeholder="Ямар бүтээгдэхүүн, хэдэн ширхэг, хэзээ хэрэгтэй вэ?" rows={3} className="resize-none border-b border-[#f6f4ef]/35 bg-transparent px-0 py-3 outline-none placeholder:text-[#f6f4ef]/40" /></label>
              <button type="submit" className="mt-3 w-fit rounded-full border border-[#f6f4ef] px-6 py-3 text-sm transition-colors hover:bg-[#f6f4ef] hover:text-[#0E6287]">Илгээх</button>
            </form>
          </div>
        </div>
      </section>
      <DansranFooter />
    </main>
  )
}
