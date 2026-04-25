import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTheme(currentHour >= 7 && currentHour < 21 ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const card =
    theme === "dark"
      ? "relative overflow-hidden rounded-[22px] border border-[#5f2a3a] bg-[#2b2023] p-[26px] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] before:absolute before:left-[26px] before:top-0 before:h-[5px] before:w-[70px] before:rounded-b-md before:bg-gradient-to-r before:from-[#d94f78] before:to-[#b94465]"
      : "relative overflow-hidden rounded-[22px] border border-[#ead5cf] bg-white p-[26px] text-[#1f1f1f] shadow-[0_12px_28px_rgba(75,18,35,0.08)] before:absolute before:left-[26px] before:top-0 before:h-[5px] before:w-[70px] before:rounded-b-md before:bg-gradient-to-r before:from-[#6f102b] before:to-[#b94465]";

  const title =
    theme === "dark"
      ? "mt-[10px] mb-[18px] font-serif text-[28px] text-[#d94f78]"
      : "mt-[10px] mb-[18px] font-serif text-[28px] text-[#6f102b]";

  const headerClass =
    theme === "dark"
      ? "relative mx-auto max-w-[1050px] overflow-hidden rounded-t-[32px] border-b border-[#5f2a3a] bg-[#21191b] px-[48px] py-[42px]"
      : "relative mx-auto max-w-[1050px] overflow-hidden rounded-t-[32px] border-b border-[#e4c9c0] bg-[#fff8f3] px-[48px] py-[42px]";

  const mainClass =
    theme === "dark"
      ? "mx-auto grid max-w-[1050px] grid-cols-[1.15fr_0.85fr] gap-[18px] bg-[#21191b] p-[28px]"
      : "mx-auto grid max-w-[1050px] grid-cols-[1.15fr_0.85fr] gap-[18px] bg-[#fff8f3] p-[28px]";

  const pillClass =
    theme === "dark"
      ? "inline-block rounded-full bg-[#3a2a2d] px-[15px] py-[9px] text-[13px] text-[#f8f4ef] transition hover:bg-[#9b173d] hover:text-white"
      : "inline-block rounded-full bg-[#f0ddd7] px-[15px] py-[9px] text-[13px] text-[#6f102b] transition hover:bg-[#6f102b] hover:text-white";

  return (
    <div
      className={`min-h-screen px-[18px] py-[40px] font-sans ${
        theme === "dark"
          ? "bg-[#1a0d12] text-white"
          : "bg-[linear-gradient(135deg,#2a0612,#7a1232,#f3e7df)] text-[#1f1f1f]"
      }`}
    >
      <header className={headerClass}>
        <div className="absolute -right-[80px] -top-[90px] h-[280px] w-[280px] bg-[radial-gradient(circle,rgba(122,18,50,0.35),transparent_65%)]" />

        <div className="absolute bottom-[18px] right-[45px] text-[95px] font-black text-[#7a1232]/10">
          CV
        </div>

        <h1
          className={`relative z-10 max-w-[620px] font-serif text-[64px] leading-[0.95] tracking-[-2px] ${
            theme === "dark" ? "text-[#d94f78]" : "text-[#6f102b]"
          }`}
        >
          Kachur Veronika
        </h1>

        <p
          className={`relative z-10 mb-[28px] mt-[18px] text-[20px] uppercase tracking-[1px] ${
            theme === "dark" ? "text-white" : "text-[#2b2b2b]"
          }`}
        >
          Cybersecurity Student 🚀
        </p>

        <button
          onClick={toggleTheme}
          className={`relative z-10 mb-[18px] ${pillClass}`}
        >
          {theme === "dark" ? "Light Theme" : "Dark Theme"}
        </button>

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
                <a className={pillClass}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={mainClass}>
        <section className="relative overflow-hidden rounded-[22px] border border-[#ead5cf] bg-[linear-gradient(145deg,#6f102b,#9b173d)] p-[26px] text-white shadow-[0_12px_28px_rgba(75,18,35,0.08)]">
          <h2 className="mb-[18px] mt-[10px] font-serif text-[28px]">
            Contact Information
          </h2>
          <ul className="m-0 pl-[20px] text-white">
            <li>Email: veronika.kachur@gmail.com</li>
            <li>Location: Lviv, Ukraine</li>
          </ul>
        </section>

        <div></div>

        <section className={card}>
          <h2 className={title}>Summary</h2>
          <p className={theme === "dark" ? "leading-[1.65] text-white" : "leading-[1.65] text-[#1f1f1f]"}>
            Student of Lviv Polytechnic National University since 2023.
            Interested in backend development and cybersecurity.
          </p>
        </section>

        <section
          className={`${card} ${
            theme === "dark" ? "bg-[#322528]" : "bg-[#fbf0ec]"
          }`}
        >
          <h2 className={title}>Tech Skills</h2>
          <ul
            className={`grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px] ${
              theme === "dark" ? "text-white" : "text-[#1f1f1f]"
            }`}
          >
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
          <ul
            className={`grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px] ${
              theme === "dark" ? "text-white" : "text-[#1f1f1f]"
            }`}
          >
            <li>Project 1: Cybersecurity Simulation</li>
            <li>Project 2: Web Application Development</li>
          </ul>
        </section>

        <section className={card}>
          <h2 className={title}>Education</h2>
          <p className={theme === "dark" ? "leading-[1.65] text-white" : "leading-[1.65] text-[#1f1f1f]"}>
            Bachelor of Science in Cybersecurity, Lviv Polytechnic National
            University, 2023 - Present
          </p>
        </section>

        <div></div>

        <section
          className={`${card} col-span-2 ${
            theme === "dark" ? "bg-[#322528]" : "bg-[#f7ebe7]"
          }`}
        >
          <h2 className={title}>Additional Information</h2>
          <ul
            className={`grid grid-cols-2 gap-x-[22px] gap-y-[8px] pl-[20px] ${
              theme === "dark" ? "text-white" : "text-[#1f1f1f]"
            }`}
          >
            <li>Fluent in English and Ukrainian</li>
            <li>Passionate about ethical hacking and network security</li>
          </ul>
        </section>

        <Reviews />
      </main>

      <Footer theme={theme} />
      <ContactForm theme={theme} />
    </div>
  );
}

export default App;