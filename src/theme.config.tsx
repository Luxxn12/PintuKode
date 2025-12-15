import { useRouter } from "next/router";
import { type DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/Luxxn12/PintuKode",
  },
  docsRepositoryBase: "https://github.com/Luxxn12/PintuKode",
  logo: <img src="/images/logo-icon.png" alt="LUXXNDEV Logo" className="h-16" />,
  // logo: <span className="font-mono text-3xl text-rataalada">{"LUXXNDEV"}</span>,
  head: () => {
    const ogConfig = {
      title: "PintuKode",
      description: "PintuKode",
      favicon: "/favicon.ico",
    };

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={ogConfig.title} />
        <meta property="og:description" content={ogConfig.description} />
      </>
    );
  },
  footer: {
    text: (
      <span>
        PintuKode {new Date().getFullYear()} · Dibuat oleh{" "}
        <a href="https://www.mohalif.my.id/" className="text-blue-300" target="_blank" rel="noreferrer">
          Moh Alif Al Lukman
        </a>
      </span>
    ),
  },
  sidebar: {
    toggleButton: true,
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: "Search...",
  },
  toc: {
    backToTop: true,
  },
  gitTimestamp: () => {
    const now = new Date(2025, 11, 12); 
    return (
      <span>
        Terakhir diperbarui{" "}
        {now.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    );
  },
  editLink: {
    text: null,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  darkMode: false,
  primaryHue: {
    light: 210,
    dark: 210,
  },
  primarySaturation: {
    light: 65,
    dark: 75,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (["/"].includes(asPath)) {
      return { titleTemplate: "PintuKode" };
    }

    return {
      titleTemplate: "%s – PintuKode",
    };
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
