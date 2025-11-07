import React from "react";
import styles from "../../styles/FooterLink.module.scss";
import footerlogo from "../../public/images/footerlogo.png";
import Image from "next/image";
import Link from "next/link";

const FooterLink = () => {
  const contactList = [
    {
      id: "address",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2265 19.2217C12.2808 18.2651 13.2565 17.2253 14.1442 16.1124C16.0142 13.763 17.1518 11.4466 17.2288 9.38683C17.2593 8.54972 17.1207 7.71507 16.8214 6.93271C16.5221 6.15036 16.0681 5.43636 15.4867 4.83337C14.9053 4.23038 14.2082 3.75077 13.4373 3.42318C12.6663 3.0956 11.8373 2.92676 10.9996 2.92676C10.162 2.92676 9.3329 3.0956 8.56195 3.42318C7.791 3.75077 7.09399 4.23038 6.51254 4.83337C5.9311 5.43636 5.47716 6.15036 5.17784 6.93271C4.87851 7.71507 4.73995 8.54972 4.77041 9.38683C4.84833 11.4466 5.98683 13.763 7.85591 16.1124C8.74367 17.2253 9.71939 18.2651 10.7737 19.2217C10.8751 19.3134 10.9506 19.38 11.0001 19.4216L11.2265 19.2217ZM10.3236 20.2897C10.3236 20.2897 3.66675 14.6833 3.66675 9.16683C3.66675 7.22191 4.43937 5.35665 5.81463 3.98138C7.1899 2.60611 9.05516 1.8335 11.0001 1.8335C12.945 1.8335 14.8103 2.60611 16.1855 3.98138C17.5608 5.35665 18.3334 7.22191 18.3334 9.16683C18.3334 14.6833 11.6766 20.2897 11.6766 20.2897C11.3062 20.6307 10.6967 20.627 10.3236 20.2897ZM11.0001 11.7335C11.6808 11.7335 12.3336 11.4631 12.815 10.9817C13.2963 10.5004 13.5667 9.84755 13.5667 9.16683C13.5667 8.48611 13.2963 7.83327 12.815 7.35192C12.3336 6.87058 11.6808 6.60016 11.0001 6.60016C10.3194 6.60016 9.66652 6.87058 9.18517 7.35192C8.70383 7.83327 8.43341 8.48611 8.43341 9.16683C8.43341 9.84755 8.70383 10.5004 9.18517 10.9817C9.66652 11.4631 10.3194 11.7335 11.0001 11.7335ZM11.0001 12.8335C10.0276 12.8335 9.09499 12.4472 8.40736 11.7596C7.71972 11.0719 7.33341 10.1393 7.33341 9.16683C7.33341 8.19437 7.71972 7.26174 8.40736 6.5741C9.09499 5.88647 10.0276 5.50016 11.0001 5.50016C11.9725 5.50016 12.9052 5.88647 13.5928 6.5741C14.2804 7.26174 14.6667 8.19437 14.6667 9.16683C14.6667 10.1393 14.2804 11.0719 13.5928 11.7596C12.9052 12.4472 11.9725 12.8335 11.0001 12.8335Z"
            fill="#3B5BA6"
          />
        </svg>
      ),
      title:
        "3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura, Bengaluru, Karnataka 560061",
    },
    {
      id: "phone",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.4221 10.9539C3.66368 9.63143 3.29748 8.55158 3.07667 7.45696C2.7501 5.83806 3.49745 4.25665 4.7355 3.24758C5.25876 2.82111 5.85858 2.96682 6.168 3.52192L6.86654 4.77513C7.42023 5.76845 7.69707 6.26511 7.64216 6.79167C7.58726 7.31823 7.2139 7.74708 6.46718 8.6048L4.4221 10.9539ZM4.4221 10.9539C5.95721 13.6306 8.36627 16.041 11.0461 17.5779M11.0461 17.5779C12.3686 18.3363 13.4484 18.7025 14.543 18.9233C16.1619 19.2499 17.7434 18.5025 18.7524 17.2645C19.1789 16.7413 19.0332 16.1414 18.4781 15.832L17.2249 15.1334C16.2315 14.5797 15.7349 14.3029 15.2083 14.3578C14.6818 14.4127 14.2529 14.7861 13.3952 15.5328L11.0461 17.5779Z"
            stroke="#3B5BA6"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "080 2666 5684/5",
      href: "tel:+918026665684",
    },
    {
      id: "email",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.23133 17.4168C3.80906 17.4168 3.45675 17.2757 3.17442 16.9933C2.89208 16.711 2.75061 16.3584 2.75 15.9355V6.06483C2.75 5.64255 2.89147 5.29025 3.17442 5.00791C3.45736 4.72558 3.80936 4.58411 4.23042 4.5835H17.7696C18.1913 4.5835 18.5433 4.72497 18.8256 5.00791C19.1079 5.29086 19.2494 5.64316 19.25 6.06483V15.9364C19.25 16.3581 19.1085 16.7104 18.8256 16.9933C18.5426 17.2763 18.1906 17.4174 17.7696 17.4168H4.23133ZM11 11.1065L3.66667 6.31141V15.9364C3.66667 16.1008 3.71953 16.2359 3.82525 16.3416C3.93097 16.4473 4.06633 16.5002 4.23133 16.5002H17.7696C17.934 16.5002 18.069 16.4473 18.1748 16.3416C18.2805 16.2359 18.3333 16.1005 18.3333 15.9355V6.3105L11 11.1065ZM11 10.0835L18.051 5.50016H3.949L11 10.0835ZM3.66667 6.31141V5.50016V15.9364C3.66667 16.1008 3.71953 16.2359 3.82525 16.3416C3.93097 16.4473 4.06633 16.5002 4.23133 16.5002H3.66667V6.31141Z"
            fill="#3B5BA6"
          />
        </svg>
      ),
      title: "info@gms-india.com",
      href: "mailto:info@gms-india.com",
    },
  ];
  const productList = [
    {
      id: "components",
      link: "/category/components",
      title: "Components",
    },
    {
      id: "equipment",
      link: "/category/equipment",
      title: "Equipments",
    },
    {
      id: "materials",
      link: "/category/materials",
      title: "Materials",
    },
  ];
  const solutionList = [
    {
      id: "ev",
      link: "/ev",
      title: "EV",
    },
    {
      id: "semiconductors",
      link: "/semiconductors",
      title: "Semiconductors",
    },
    {
      id: "microelectronics",
      link: "/microelectronics",
      title: "Microelectronics",
    },
    {
      id: "space-solar",
      link: "/space-solar",
      title: "Space Solar",
    },
  ];
  const learnmoreList = [
    {
      id: "company",
      link: "/company",
      title: "About Us",
    },
    {
      id: "resources",
      link: "/resources",
      title: "Resources",
    },
  ];
  const socialIcons = [
    <svg
    key="linkedin"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00001 7H2.60001C1.84576 7 1.46863 7 1.23431 7.23431C1 7.46864 1 7.84576 1 8.6V15.4C1 16.1542 1 16.5314 1.23431 16.7657C1.46863 17 1.84576 17 2.60001 17H3.00001C3.75426 17 4.13138 17 4.3657 16.7657C4.60002 16.5314 4.60002 16.1542 4.60002 15.4V8.6C4.60002 7.84576 4.60002 7.46864 4.3657 7.23431C4.13138 7 3.75426 7 3.00001 7Z"
        stroke="white"
      />
      <path
        d="M4.60002 2.8C4.60002 3.79411 3.79413 4.6 2.80001 4.6C1.80589 4.6 1 3.79411 1 2.8C1 1.80589 1.80589 1 2.80001 1C3.79413 1 4.60002 1.80589 4.60002 2.8Z"
        stroke="white"
      />
      <path
        d="M9.26081 7H8.60001C7.84576 7 7.46864 7 7.23431 7.23431C7 7.46864 7 7.84576 7 8.6V15.4C7 16.1542 7 16.5314 7.23431 16.7657C7.46864 17 7.84576 17 8.60001 17H9.00001C9.75425 17 10.1314 17 10.3657 16.7657C10.6 16.5314 10.6 16.1542 10.6 15.4L10.6001 12.6001C10.6001 11.2746 11.0225 10.2001 12.2703 10.2001C12.8942 10.2001 13.4 10.7374 13.4 11.4001V15.0001C13.4 15.7543 13.4 16.1314 13.6344 16.3658C13.8686 16.6001 14.2458 16.6001 15 16.6001H15.399C16.1531 16.6001 16.5301 16.6001 16.7644 16.3658C16.9988 16.1316 16.9988 15.7546 16.999 15.0005L17.0001 10.6002C17.0001 8.612 15.1092 7.00019 13.2375 7.00019C12.1719 7.00019 11.2214 7.52248 10.6001 8.3392C10.6 7.83512 10.6 7.58312 10.4906 7.396C10.4212 7.27749 10.3225 7.17882 10.204 7.1095C10.0169 7 9.76489 7 9.26081 7Z"
        stroke="white"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
    key="facebook"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.17885 8.66664C5.39665 8.66664 5.2334 8.82016 5.2334 9.55552V10.8889C5.2334 11.6243 5.39665 11.7778 6.17885 11.7778H8.06976V17.1111C8.06976 17.8465 8.23301 18 9.01521 18H10.9061C11.6884 18 11.8516 17.8465 11.8516 17.1111V11.7778H13.9748C14.568 11.7778 14.7209 11.6694 14.8839 11.1331L15.2891 9.79976C15.5682 8.88112 15.3962 8.66664 14.38 8.66664H11.8516V6.44445C11.8516 5.95353 12.2748 5.55555 12.797 5.55555H15.488C16.2701 5.55555 16.4334 5.40207 16.4334 4.66666V2.88889C16.4334 2.15348 16.2701 2 15.488 2H12.797C10.1862 2 8.06976 3.98985 8.06976 6.44445V8.66664H6.17885Z"
        stroke="white"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
    key="youtube"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2679 9.91715L9.4679 11.5838V8.25049L12.2679 9.91715Z"
        fill="white"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.66724 10.5072V9.32715C2.66724 6.91465 2.66724 5.70799 3.39124 4.93215C4.11604 4.15549 5.25684 4.12215 7.53764 4.05465C8.61764 4.02299 9.72164 4.00049 10.6672 4.00049C11.6128 4.00049 12.716 4.02299 13.7968 4.05465C16.0776 4.12215 17.2184 4.15549 17.9424 4.93215C18.6664 5.70882 18.6672 6.91549 18.6672 9.32715V10.5063C18.6672 12.9197 18.6672 14.1255 17.9432 14.9022C17.2184 15.678 16.0784 15.7122 13.7968 15.7788C12.7168 15.8113 11.6128 15.8338 10.6672 15.8338C9.72164 15.8338 8.61844 15.8113 7.53764 15.7788C5.25684 15.7122 4.11604 15.6788 3.39124 14.9022C2.66644 14.1255 2.66724 12.9188 2.66724 10.5072Z"
        stroke="white"
      />
    </svg>,
    <svg
    key="chat"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18C14.4182 18 18 14.4182 18 10C18 5.58172 14.4182 2 10 2C5.58172 2 2 5.58172 2 10C2 11.1031 2.22326 12.1541 2.62706 13.1102C2.85022 13.6385 2.96181 13.9027 2.97562 14.1024C2.98944 14.3021 2.93067 14.5217 2.81314 14.961L2 18L5.03902 17.1869C5.4783 17.0694 5.69795 17.0106 5.89762 17.0244C6.09729 17.0382 6.36148 17.1498 6.88988 17.373C7.84596 17.7767 8.89688 18 10 18Z"
        stroke="white"
        stroke-linejoin="round"
      />
      <path
        d="M7.27052 10.3018L7.96727 9.43648C8.26093 9.07176 8.62392 8.73224 8.6524 8.24661C8.65952 8.12395 8.57328 7.57326 8.40064 6.47189C8.33281 6.03905 7.92869 6 7.57866 6C7.12251 6 6.89444 6 6.66796 6.10345C6.38171 6.2342 6.08783 6.60185 6.02334 6.90986C5.97231 7.15357 6.01023 7.3215 6.08607 7.65735C6.40818 9.08384 7.16385 10.4926 8.33558 11.6644C9.50736 12.8362 10.9162 13.5918 12.3426 13.9139C12.6785 13.9898 12.8464 14.0277 13.0902 13.9766C13.3982 13.9122 13.7658 13.6183 13.8966 13.332C14 13.1055 14 12.8775 14 12.4214C14 12.0713 13.961 11.6672 13.5281 11.5994C12.4267 11.4267 11.8761 11.3405 11.7534 11.3476C11.2678 11.3761 10.9282 11.739 10.5635 12.0327L9.69816 12.7294"
        stroke="white"
      />
    </svg>,
  ];
  return (
    <div className={styles["footer-links-content-box"]}>
      <div className={styles["footer-links-left-right-content"]}>
        <div className={styles["footer-left-content"]}>
          <div className={styles["footer-logo"]}>
            <Image src={footerlogo} alt="image" />
          </div>
          <p>
            GMS has been closely involved in semiconductor and microelectronics
            core component manufacturing for over 20 years. Wire bonding in
            particular is one such technology that has been adapted from our
            semiconductor industry to build automated scalable lithium battery
            packs.
          </p>
        </div>
        <div className={styles["footer-links-right-content"]}>
          <div className={styles["footer-details-with-list"]}>
            <h5>Contact</h5>
            {contactList.map((item) => {
              const content = (
                <>
                  {item.icon}
                  <p>{item.title}</p>
                </>
              );

              if (item.href) {
                const isExternal = item.href.startsWith("http");
                return (
                  <div className={styles["details-list"]} key={item.id}>
                    <a
                      href={item.href}
                      className={styles["icon-title"]}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  </div>
                );
              }

              return (
                <div className={styles["details-list"]} key={item.id}>
                  <div className={styles["icon-title"]}>{content}</div>
                </div>
              );
            })}
          </div>
          <div className={styles["footer-details-with-list"]}>
            <h5>Our Products</h5>
            {productList.map((item) => (
              <div className={styles["details-list"]} key={item.id}>
                <Link href={item.link}>
                  <div className={styles["icon-title"]}>
                    <p>{item.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles["footer-details-with-list"]}>
            <h5>Solutions</h5>
            {solutionList.map((item) => (
              <div className={styles["details-list"]} key={item.id}>
                <Link href={item.link}>
                  <div className={styles["icon-title"]}>
                    <p>{item.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles["footer-details-with-list"]}>
            <h5>Learn More</h5>
            {learnmoreList.map((item) => (
              <div className={styles["details-list"]} key={item.id}>
                <Link href={item.link}>
                  <div className={styles["icon-title"]}>
                    <p>{item.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["footer-copyright-left-right"]}>
        <div className={styles["footer-copyright-left"]}>
          <p>
            Copyright © 2025-PRESENT Global Marketing Services, India. All
            rights reserved.
          </p>
        </div>
        <div className={styles["footer-copyright-right"]}>
          {socialIcons.map((icon, index) => (
            <div key={icon.key ?? `social-${index}`}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
