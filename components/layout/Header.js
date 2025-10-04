"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";
import footerlogo from "../../public/images/footerlogo.png";
import { useAppStore } from "../../store";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // ⬅️ single source of truth
  const cartCount = useAppStore((state) => state.cartItems.length);
  const router = useRouter();
  const handleToggle = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
  return (
    <header className={styles["header-section-div"]}>
      {/* ── left – logo ───────────────────────────────────── */}
      <div className={styles["hearder-logo"]}>
        <Link href="/">
          <Image
            src={footerlogo}
            alt="Global Marketing Services logo"
            priority
          />
        </Link>
      </div>
      {/* ── centre – primary nav ─────────────────────────── */}
      <nav className={styles["header-list-title"]}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span
              className={styles.menuTrigger}
              role="button"
              tabIndex={0}
              // onClick={() => handleToggle("company")}
              onMouseEnter={() => setActiveDropdown("company")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleToggle("company");
                }
              }}
            >
              Company{" "}
              <svg
                className={`${styles.arrowIcon} ${
                  activeDropdown === "company" ? styles.rotate : ""
                }`}
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3778 3.15625C10.2867 3.05859 10.1744 3.00814 10.0409 3.00488C9.90747 3.00163 9.79517 3.04557 9.70402 3.13672L5.5048 7.11133L1.30558 3.13672C1.21444 3.04557 1.10213 3.00163 0.968669 3.00488C0.835205 3.00814 0.7229 3.05859 0.631755 3.15625C0.540609 3.25391 0.498291 3.36784 0.504801 3.49805C0.511312 3.62826 0.56014 3.73893 0.651286 3.83008L5.17277 8.11719C5.21834 8.15625 5.27043 8.18717 5.32902 8.20996C5.38761 8.23275 5.44621 8.24414 5.5048 8.24414C5.5634 8.24414 5.62036 8.23275 5.6757 8.20996C5.73104 8.18717 5.78475 8.15625 5.83683 8.11719L10.3583 3.83008C10.4495 3.73893 10.4983 3.62826 10.5048 3.49805C10.5113 3.36784 10.469 3.25391 10.3778 3.15625Z"
                  fill="#3B5BA6"
                />
              </svg>
            </span>
            {activeDropdown === "company" && (
              <div
                className={styles.dropdownMenu}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <li onClick={() => router.push("/company")}>About Us</li>
                <li onClick={() => router.push("/accelerate")}>
                  GMS Accelerate
                </li>
              </div>
            )}
          </li>

          {/* Solutions dropdown */}
          <li>
            <span
              className={styles.menuTrigger}
              role="button"
              tabIndex={0}
              // onClick={() => handleToggle("solutions")}
              onMouseEnter={() => setActiveDropdown("solutions")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleToggle("solutions");
                }
              }}
            >
              Solutions{" "}
              <svg
                className={`${styles.arrowIcon} ${
                  activeDropdown === "solutions" ? styles.rotate : ""
                }`}
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3778 3.15625C10.2867 3.05859 10.1744 3.00814 10.0409 3.00488C9.90747 3.00163 9.79517 3.04557 9.70402 3.13672L5.5048 7.11133L1.30558 3.13672C1.21444 3.04557 1.10213 3.00163 0.968669 3.00488C0.835205 3.00814 0.7229 3.05859 0.631755 3.15625C0.540609 3.25391 0.498291 3.36784 0.504801 3.49805C0.511312 3.62826 0.56014 3.73893 0.651286 3.83008L5.17277 8.11719C5.21834 8.15625 5.27043 8.18717 5.32902 8.20996C5.38761 8.23275 5.44621 8.24414 5.5048 8.24414C5.5634 8.24414 5.62036 8.23275 5.6757 8.20996C5.73104 8.18717 5.78475 8.15625 5.83683 8.11719L10.3583 3.83008C10.4495 3.73893 10.4983 3.62826 10.5048 3.49805C10.5113 3.36784 10.469 3.25391 10.3778 3.15625Z"
                  fill="#3B5BA6"
                />
              </svg>
            </span>
            {activeDropdown === "solutions" && (
              <div
                className={styles.dropdownMenu}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <li onClick={() => router.push("/semiconductors")}>
                  Semiconductors
                </li>
                <li onClick={() => router.push("/microelectronics")}>
                  Microelectronics
                </li>
                <li onClick={() => router.push("/ev")}>Ev</li>
                <li onClick={() => router.push("/space-solar")}>Space Solar</li>
              </div>
            )}
          </li>

          {/* Products dropdown */}
          <li>
            <span
              className={styles.menuTrigger}
              role="button"
              tabIndex={0}
              // onClick={() => handleToggle("products")}
               onMouseEnter={() => setActiveDropdown("products")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleToggle("products");
                }
              }}
            >
              Products{" "}
              <svg
                className={`${styles.arrowIcon} ${
                  activeDropdown === "products" ? styles.rotate : ""
                }`}
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3778 3.15625C10.2867 3.05859 10.1744 3.00814 10.0409 3.00488C9.90747 3.00163 9.79517 3.04557 9.70402 3.13672L5.5048 7.11133L1.30558 3.13672C1.21444 3.04557 1.10213 3.00163 0.968669 3.00488C0.835205 3.00814 0.7229 3.05859 0.631755 3.15625C0.540609 3.25391 0.498291 3.36784 0.504801 3.49805C0.511312 3.62826 0.56014 3.73893 0.651286 3.83008L5.17277 8.11719C5.21834 8.15625 5.27043 8.18717 5.32902 8.20996C5.38761 8.23275 5.44621 8.24414 5.5048 8.24414C5.5634 8.24414 5.62036 8.23275 5.6757 8.20996C5.73104 8.18717 5.78475 8.15625 5.83683 8.11719L10.3583 3.83008C10.4495 3.73893 10.4983 3.62826 10.5048 3.49805C10.5113 3.36784 10.469 3.25391 10.3778 3.15625Z"
                  fill="#3B5BA6"
                />
              </svg>
            </span>
            {activeDropdown === "products" && (
              <div className={styles.dropdownMenu} onMouseLeave={() => setActiveDropdown(null)}>
                <li onClick={() => router.push("/category/components")}>
                  Components
                </li>
                <li onClick={() => router.push("/category/equipment")}>
                  Equipments
                </li>
                <li onClick={() => router.push("/category/materials")}>
                 Materials
                </li>
              </div>
            )}
          </li>

          <li>
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
      {/* ── right – search & cart ────────────────────────── */}
      <div className={styles["header-searchbar-icon"]}>
        <Link href="/search" className={styles.searchIcon}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 12.75L15.75 15.75"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25Z"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link href="/cart" className={styles.cart}>
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 18.6667H17.8071C23.0426 18.6667 23.8388 15.3776 24.8045 10.5806C25.0831 9.19696 25.2224 8.50515 24.8874 8.04425C24.5525 7.58333 23.9105 7.58333 22.6264 7.58333H7"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9.33317 18.6667L6.27502 4.10075C6.01535 3.06202 5.08205 2.33333 4.01136 2.33333H2.9165"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10.36 18.6667H9.88C8.28942 18.6667 7 20.0099 7 21.6666C7 21.9428 7.2149 22.1667 7.48 22.1667H20.4167"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.25 25.6667C13.2165 25.6667 14 24.8832 14 23.9167C14 22.9502 13.2165 22.1667 12.25 22.1667C11.2835 22.1667 10.5 22.9502 10.5 23.9167C10.5 24.8832 11.2835 25.6667 12.25 25.6667Z"
              stroke="#3B5BA6"
              strokeWidth="1.5"
            />
            <path
              d="M20.4165 25.6667C21.383 25.6667 22.1665 24.8832 22.1665 23.9167C22.1665 22.9502 21.383 22.1667 20.4165 22.1667C19.45 22.1667 18.6665 22.9502 18.6665 23.9167C18.6665 24.8832 19.45 25.6667 20.4165 25.6667Z"
              stroke="#3B5BA6"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
        <button
          className={styles.burger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#3B5BA6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* ─── MOBILE NAV MENU ─── */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.mobileSection}>
              <button
                type="button"
                onClick={() => handleToggle("mobile-company")}
              >
                Company
                <span
                  className={
                    activeDropdown === "mobile-company" ? styles.rotate : ""
                  }
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {activeDropdown === "mobile-company" && (
                <ul>
                  <li>
                    <Link href="/company" onClick={closeMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/accelerate" onClick={closeMobileMenu}>
                      GMS Accelerate
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.mobileSection}>
              <button
                type="button"
                onClick={() => handleToggle("mobile-solutions")}
              >
                Solutions
                <span
                  className={
                    activeDropdown === "mobile-solutions" ? styles.rotate : ""
                  }
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {activeDropdown === "mobile-solutions" && (
                <ul>
                  <li>
                    <Link href="/semiconductors" onClick={closeMobileMenu}>
                      Semiconductors
                    </Link>
                  </li>
                  <li>
                    <Link href="/microelectronics" onClick={closeMobileMenu}>
                      Microelectronics
                    </Link>
                  </li>
                  <li>
                    <Link href="/ev" onClick={closeMobileMenu}>
                      EV
                    </Link>
                  </li>
                  <li>
                    <Link href="/space-solar" onClick={closeMobileMenu}>
                      Space Solar
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.mobileSection}>
              <button
                type="button"
                onClick={() => handleToggle("mobile-products")}
              >
                Products
                <span
                  className={
                    activeDropdown === "mobile-products" ? styles.rotate : ""
                  }
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {activeDropdown === "mobile-products" && (
                <ul>
                  <li>
                    <Link href="/category/components" onClick={closeMobileMenu}>
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/equipment" onClick={closeMobileMenu}>
                      Equipments
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/materials" onClick={closeMobileMenu}>
                      Materials
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/resources" onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
