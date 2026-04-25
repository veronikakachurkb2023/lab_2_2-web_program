import { useEffect, useState } from "react";

function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));
    setSystemInfo(info);
  }, []);

  return (
    <footer
      className={`mx-auto max-w-[1050px] rounded-b-[32px] px-[28px] py-[24px] text-center text-[14px] ${
        isDark
          ? "bg-[#21191b] text-[#f8f4ef] border-t border-[#5f2a3a]"
          : "bg-[#fff8f3] text-[#6f102b] border-t border-[#ead5cf]"
      }`}
    >
      <p>© 2026 Kachur Veronika. Personal CV page.</p>

      {systemInfo && (
        <div className="mt-[10px] space-y-[4px]">
          <p>
            <strong>Browser:</strong> {systemInfo.userAgent}
          </p>
          <p>
            <strong>Platform:</strong> {systemInfo.platform}
          </p>
          <p>
            <strong>Language:</strong> {systemInfo.language}
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;