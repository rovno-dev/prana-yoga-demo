import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';

const spaces = [
  ['Баррикадная', 'Стоматологическая улица, 4', '+7 (999) 999-99-99'],
  ['Тимирязевская', 'Длинно-ровное шоссе, 9 стр. 2', '+7 (888) 888-88-88'],
  ['Войковская', 'Сказочно-ненастоящий проезд, 1 стр. 2', '+7 (777) 777-77-77']
];

export default function Home() {
  return (
    <main>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-medium tracking-[0.2em] text-gray-300 uppercase mb-6">
              МОСКВА · 3 ЦЕНТРА · ОНЛАЙН
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Йога, к которой хочется возвращаться.
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
              Пространство для внимательной практики: от первого занятия до глубокой работы с телом, дыханием и вниманием.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/schedule"
                className="bg-white text-[#1A2F23] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
              >
                Выбрать занятие
              </Link>
              <Link
                href="/beginners"
                className="border border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
              >
                Я новичок
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ПРАНА" title="Всё, что нужно для своей практики — в одном месте." text="«Прана» объединяет разные направления йоги, профессиональных преподавателей и комфортную инфраструктуру. Мы сохраняем главное из философии центра: выбор, бережность и доступность." />
          <div className="stats">
            <div className="stat"><strong>24</strong><span>современных зала по данным текущего сайта</span></div>
            <div className="stat"><strong>3</strong><span>центра в Москве</span></div>
            <div className="stat"><strong>60+</strong><span>занятий в день по материалам центра</span></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Card Container */}
          <div className="flex flex-col md:flex-row bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm max-w-6xl mx-auto">

            {/* Image Container - Square */}
            <div className="w-full md:w-1/2 aspect-square">
              <img
                src="./yoga.png"
                alt="yoga-image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="text-xs tracking-widest text-gray-500 uppercase mb-4">
                ДЛЯ НАЧИНАЮЩИХ
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Начать можно спокойно.
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md">
                Не нужно быть гибким или иметь опыт. Выберите подходящий уровень, приходите в удобный центр и двигайтесь в своём темпе.
              </p>
              <Link
                href="/beginners"
                className="inline-flex text-white! items-center justify-center bg-[#1A2F23] text-white py-4 px-8 rounded-full text-sm font-medium hover:bg-[#2a4a36] transition-colors w-fit"
              >
                Первые шаги →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionTitle light eyebrow="НАПРАВЛЕНИЯ" title="Найдите практику под своё состояние." text="От спокойной Прана-йоги до динамичной Аштанги, от работы с дыханием до медитации — соберите расписание, которое подходит именно вам." />
          <div className="feature-grid">
            {[
              ['Прана-йога', 'Сила, гибкость, внимание и бережная вариативность практики.'],
              ['Аштанга-йога', 'Традиционная последовательность асан, дыхание и дисциплина регулярной практики.'],
              ['Пранаяма', 'Работа с дыханием и вниманием — от основ до углублённых программ.'],
              ['Хатха-йога', 'Классическая практика с акцентом на тело, дыхание и осознанность.'],
              ['Йогатерапия', 'Системный подход к движению и поддержке качества жизни.'],
              ['Медитация', 'Практики концентрации, наблюдения и внутренней тишины.']
            ].map(([a, b]) => (
              <article className="card feature" key={a}>
                <span className="pill">ПРАКТИКА</span>
                <h3>{a}</h3>
                <p>{b}</p>
                <Link href="/services">Подробнее →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="СЕЙЧАС В ЦЕНТРЕ" title="События, ради которых хочется прийти лично." />
          <div className="grid" style={{ marginTop: 42 }}>
            {[
              ['9–11 октября 2026', 'Весеннее очищение и детокс', 'Выездной формат · ретритный центр «Елисей»'],
              ['19–20 сентября', 'Сила дыхания: основы пранаямы', 'Практический семинар · Войковская'],
              ['17 октября — 14 ноября', 'Претичерс по Аштанга-йоге', 'Войковская + Zoom']
            ].map(x => (
              <div className="card list-card" key={x[1]}>
                <div className="eyebrow">{x[0]}</div>
                <div>
                  <h3>{x[1]}</h3>
                  <div className="muted">{x[2]}</div>
                </div>
                <Link className="btn" href="/seminars">Подробнее</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle eyebrow="ТРИ АДРЕСА" title="Выберите центр, который ближе к вам." />
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {spaces.map(s => (
              <div className="card feature" key={s[0]}>
                <span className="pill">МОСКВА</span>
                <h3>{s[0]}</h3>
                <p>{s[1]}<br />{s[2]}</p>
                <Link href="/contacts">Как добраться →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">ПЕРВОЕ ЗАНЯТИЕ</div>
            <h2>Приходите на коврик.</h2>
          </div>
          <Link className="btn" href="/schedule">Открыть расписание</Link>
        </div>
      </section>
    </main>
  );
}