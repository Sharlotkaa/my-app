import Link from "next/link";
<<<<<<< HEAD
import prisma from "@/lib/prisma";
import { Card } from "@/components/card/Card";
import styles from "@/src/app/page.module.css";
import "./globals.css";

export default async function HomePage() {
  // Загрузка данных из базы данных через Prisma
  let cardList = [];
  try {
    cardList = await prisma.Card.findMany();
  } catch (error) {
    console.error("Ошибка загрузки данных из базы данных:", error);
  }

  return (
    <>
      <main>
        <section className={styles.mainFirst}>
          <div className={styles.mainHeader}>
            <div className={styles.logo}>
              <img src="/Logo.svg" alt="Anteelo logo" />
            </div>
            <button className={styles.button}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </button>
          </div>
          <div className={styles.mainFirstText}>
            <h5 className={styles.mainFirstTextSmall}>A place where</h5>
            <h1 className={styles.mainFirstTextH1}>
              A creative agency for redemptive brands
            </h1>
            <h5 className={styles.mainFirstTextSmall2}>
              Anteelo is a leading strategic design firm that builds powerful
              digital solutions for startups and enterprises.
            </h5>
            <div className={styles.link}>
              <Link href="/about">Get in touch</Link>
            </div>
          </div>
        </section>

        <section className={styles.mainSecond}>
          <h2 className={styles.mainSecondH2}>
            Deation & Evaluation - Best Way to Kick off Your Product Idea
          </h2>
          <div className={styles.mainSecondBlock}>
            {cardList.length > 0 ? (
              cardList.map((item) => (
                <Link
                  key={item.id}
                  href={`/catalog/${item.id}`}
                  className={styles.blockItem}
                >
                  <Card
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                </Link>
              ))
            ) : (
              <p>Данные не найдены. Проверьте подключение к базе данных.</p>
            )}
          </div>
        </section>

        <section className={styles.mainThird}>
          <h1 className={styles.mainThirdText}>
            Let’s make something amazing together.
          </h1>
          <div className={styles.link1}>
            <Link href="/about">LET'S GET STARTED</Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer1}>
        <div className={styles.blockk}></div>
        <div className={styles.footerContanted}>
          <div className={styles.footerContact}>
            <div className={styles.footerContact1}>
              <h5 className={styles.footerLabel}>Phone</h5>
              <h5 className={styles.footerLabel2}>+32 50 31 28 32</h5>
            </div>
            <div className={styles.footerContact1}>
              <h5 className={styles.footerLabel}>Address</h5>
              <h5 className={styles.footerLabel2}>
                491 Merlin Crest Suite 963
              </h5>
            </div>
          </div>

          <hr className={styles.hr1} />
          <div className={styles.footerSections}>
            <div className={styles.footerSection1}>
              <h4>SERVICES</h4>
              <div className={styles.footerTEXT}>
                <a className={styles.footerLabel3} href="#">
                  Strategy Design
                </a>
                <a className={styles.footerLabel3} href="#">
                  Product Design
                </a>
                <a className={styles.footerLabel3} href="#">
                  Content Strategy
                </a>
                <a className={styles.footerLabel3} href="#">
                  Brand Strategy
                </a>
                <a className={styles.footerLabel3} href="#">
                  Development
                </a>
              </div>
            </div>
            <div className={styles.footerSection2}>
              <h4>HELP AND ADVICE</h4>
              <div className={styles.footerTEXT}>
                <a className={styles.footerLabel3} href="#">
                  How it works
                </a>
                <a className={styles.footerLabel3} href="#">
                  Contact Support
                </a>
                <a className={styles.footerLabel3} href="#">
                  Privacy Policy
                </a>
                <a className={styles.footerLabel3} href="#">
                  FAQ
                </a>
              </div>
            </div>
            <div className={styles.footerSection3}>
              <h4>COMPANY</h4>
              <div className={styles.footerTEXT}>
                <a className={styles.footerLabel3} href="#">
                  About
                </a>
                <a className={styles.footerLabel3} href="#">
                  Blog
                </a>
                <a className={styles.footerLabel3} href="#">
                  Contact
                </a>
                <a className={styles.footerLabel3} href="#">
                  Jobs
                </a>
              </div>
            </div>
            <hr className={styles.hr4} />
            <div className={styles.footerSection4}>
              <h4>GET IN TOUCH</h4>
              <a className={styles.footerLabel4} href="#">
                Feel free to get in touch with us via email
              </a>
              <a className={styles.email} href="mailto:info.webovio@gmail.com">
                info.webovio@gmail.com
              </a>
              <div className={styles.socialIcons}>
                <img src="/icons/SocialMediaicon.svg" alt="Google" />
              </div>
            </div>
          </div>
          <hr className={styles.hr2} />
          <div className={styles.footerBottom}>
            <img src="/icons/Group7.svg" alt="Logo" />
            <a className={styles.footerLabel} href="#">
              2022 Webovio. All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
