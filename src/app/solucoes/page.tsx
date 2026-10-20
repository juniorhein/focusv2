import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { servicos } from "@/data/servicos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nossas Soluções | Focus Network",
  description:
    "Cybervision, Multi-cloud, Observabilidade, NOC 24/7, Bitdefender e Fortinet: as soluções da Focus Network para a infraestrutura da sua empresa, do local à nuvem.",
};

export default function SolucoesPage() {
  return (
    <div className={styles.main}>
      <Navbar />
      
      <main>
        {/* Solutions Hero */}
        <header className={styles.solutionsHero}>
          <div className="container">
            <span className={`${styles.label} ${styles.heroLabel}`}>
              Conheça nossas Soluções
            </span>
            <h1 className={styles.solutionsHeroTitle}>
              Tudo o que sua empresa precisa <span style={{ color: "var(--primary-light)" }}>na nuvem</span>.
            </h1>
            <p className={styles.solutionsHeroSub}>
              Trabalhamos com Azure, AWS e Oracle Cloud. Migração, arquitetura multi-cloud, segurança, monitoramento e otimização de custos — do zero até a operação.
            </p>
            <div className={styles.solutionsBadges}>
              {servicos.map((s) => (
                <Link key={s.slug} href={`/solucoes/${s.slug}`} className={styles.solutionsBadge}>
                  {s.nome}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* Solutions Grid */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.solutionsGrid}>
              {servicos.map((sol, index) => {
                const Icon = sol.icon;
                return (
                  <div
                    key={sol.slug}
                    id={sol.slug}
                    className={`${styles.solutionRow} ${index % 2 === 1 ? styles.reversed : ""}`}
                  >
                    <Link href={`/solucoes/${sol.slug}`} className={styles.solutionVisual} aria-label={sol.nome}>
                      <div className={styles.solutionVisualGrad} />
                      <span className={styles.solutionVisualIcon}>
                        <Icon />
                      </span>
                    </Link>
                    <div className={styles.solutionBody}>
                      <span className={styles.label}>{`0${index + 1}`}</span>
                      <h2>{sol.nome}</h2>
                      <p>{sol.resumo}</p>
                      <div className={styles.solutionFeatures}>
                        {sol.entregas.map((item) => (
                          <div key={item.titulo} className={styles.solutionFeature}>
                            <div className={styles.solutionFeatureCheck}>✓</div>
                            {item.titulo}
                          </div>
                        ))}
                      </div>
                      <Link href={`/solucoes/${sol.slug}`} className={styles.solutionLink}>
                        Conhecer {sol.nome} <RiArrowRightLine style={{ marginLeft: 8 }} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
