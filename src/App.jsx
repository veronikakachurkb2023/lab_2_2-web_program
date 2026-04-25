function App() {
  const card =
    "relative overflow-hidden rounded-[22px] border border-[#ead5cf] bg-white p-[26px] shadow-[0_12px_28px_rgba(75,18,35,0.08)] before:absolute before:left-[26px] before:top-0 before:h-[5px] before:w-[70px] before:rounded-b-md before:bg-gradient-to-r before:from-[#6f102b] before:to-[#b94465]";

  const title = "mt-[10px] mb-[18px] font-serif text-[28px] text-[#6f102b]";

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#2a0612,#7a1232,#f3e7df)] px-[18px] py-[40px] font-sans text-[#1f1f1f]">
      <header className="relative mx-auto max-w-[1050px] overflow-hidden rounded-t-[32px] border-b border-[#e4c9c0] bg-[#fff8f3] px-[48px] py-[42px]">
        <div className="absolute -right-[80px] -top-[90px] h-[280px] w-[280px] bg-[radial-gradient(circle,rgba(122,18,50,0.35),transparent_65%)]" />
        <div className="absolute bottom-[18px] right-[45px] text-[95px] font-black text-[#7a1232]/10">
          CV
        </div>

        <h1 className="relative z-10 max-w-[620px] font-serif text-[64px] leading-[0.95] tracking-[-2px] text-[#6f102b]">
          Kachur Veronika
        </h1>

        <p className="relative z-10 mb-[28px] mt-[18px] text-[20px] uppercase tracking-[1px] text-[#2b2b2b]">
          Cybersecurity Student
        </p>

        <nav className="relative z-10">
          <ul className="flex list-none flex-wrap gap-[10px] p-0">
            {[
              "Contact Information",
              "Summary",
              "Tech Skills",
              "Projects",
              "Education",
              "Additional Information",
            ].map((item) => (
              <li key={item}>
                <a className="inline-block rounded-full bg-[#f0ddd7] px-[15px] py-[9px] text-[13px] text-[#6f102b] transition hover:bg-[#6f102b] hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto grid max-w-[1050px] grid-cols-[1.15fr_0.85fr] gap-[18px] bg-[#fff8f3] p-[28px]">
        <section className="relative overflow-hidden rounded-[22px] border border-[#ead5cf] bg-[linear-gradient(145deg,#6f102b,#9b173d)] p-[26px] text-white shadow-[0_12px_28px_rgba(75,18,35,0.08)]">
          <h2 className="mb-[18px] mt-[10px] font-serif text-[28px]">
            Contact Information
          </h2>
          <ul className="m-0 pl-[20px]">
            <li>Email: veronika.kachur@gmail.com</li>
            <li>Location: Lviv, Ukraine</li>
          </ul>
        </section>

        <div></div>

        <section className={card}>
          <h2 className={title}>Summary</h2>
          <p className="leading-[1.65]">
            Student of Lviv Polytechnic National University since 2023.
            Interested in backend development and cybersecurity.
          </p>
        </section>

        <section className={`${card} bg-[#fbf0ec]`}>
          <h2 className={title}>Tech Skills</h2>
          <ul className="grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px]">
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Cybersecurity Tools</li>
            <li>Wireshark, Kali Linux</li>
          </ul>
        </section>

        <section className={`${card} col-span-2`}>
          <h2 className={title}>Projects</h2>
          <ul className="grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px]">
            <li>Project 1: Cybersecurity Simulation</li>
            <li>Project 2: Web Application Development</li>
          </ul>
        </section>

        <section className={card}>
          <h2 className={title}>Education</h2>
          <p className="leading-[1.65]">
            Bachelor of Science in Cybersecurity, Lviv Polytechnic National
            University, 2023 - Present
          </p>
        </section>

        <div></div>

        <section className={`${card} col-span-2 bg-[#f7ebe7]`}>
          <h2 className={title}>Additional Information</h2>
          <ul className="grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px]">
            <li>Fluent in English and Ukrainian</li>
            <li>Passionate about ethical hacking and network security</li>
          </ul>
        </section>
      </main>

      <footer className="mx-auto max-w-[1050px] rounded-b-[32px] bg-[#fff8f3] px-[28px] py-[20px] text-center text-[14px] text-[#6f102b]">
        © 2026 Kachur Veronika. Personal CV page.
      </footer>
    </div>
  );
}

export default App;