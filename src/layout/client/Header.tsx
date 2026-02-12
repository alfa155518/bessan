import { useState } from "react";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";


import Logo from "@/assets/logo.webp";
import styles from "@/sass/layout/client/header.module.scss";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation("header");
  const { lang, toggleLang } = useLanguageStore();
  const location = useLocation();

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.aboutUs", href: "/about" },
    { key: "nav.projectsPrograms", href: "/projects" },
    { key: "nav.newsEvents", href: "/news" },
    { key: "nav.reportsTransparency", href: "/reports" },
    { key: "nav.contactUs", href: "/contact" },
  ];

  const handleLanguageToggle = () => {
    toggleLang();
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`${styles.header}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <img src={Logo} alt="Logo" className={styles.logoIcon} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.key} className={styles.navItem}>
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${isActiveLink(item.href) ? styles.active : ""}`}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Toggle & Mobile Menu Button */}
        <div className={styles.headerActions}>
          {/* Language Toggle */}
          <button
            className={styles.languageToggle}
            onClick={handleLanguageToggle}
            aria-label={t(
              `languageToggle.${lang === "en" ? "ar" : "en"}`,
            )}
          >
            <FiGlobe className={styles.globeIcon} size={20} />
            <span className={styles.languageText}>
              {t(`languageToggle.${lang === "en" ? "ar" : "en"}`)}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ?
              <FiX className={styles.menuIcon} />
              : <FiMenu className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <nav className={styles.mobileNavContainer}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.key} className={styles.mobileNavItem}>
                <Link
                  to={item.href}
                  className={`${styles.mobileNavLink} ${isActiveLink(item.href) ? styles.mobileActive : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className={styles.mobileNavItem}>
              <button
                className={styles.mobileLanguageButton}
                onClick={handleLanguageToggle}
              >
                <FiGlobe className={styles.globeIcon} />
                <span className={styles.languageText}>
                  {t(
                    `languageToggle.${lang === "en" ? "ar" : "en"}`,
                  )}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
