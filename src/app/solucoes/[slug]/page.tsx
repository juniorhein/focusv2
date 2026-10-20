import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowRightLine, RiArrowRightUpLine, RiCheckLine } from "react-icons/ri";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import { servicos, getServico } from "@/data/servicos";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) return {};
  return {
    title: `${servico.nome} | Focus Network`,
    description: servico.resumo,
  };
}

export default async function ServicoPage({ params }: Props) {
  const { slug } = await params;
  const servico = getServico(slug);
  if (!servico) notFound();

  const Icon = servico.icon;
  const outros = servicos.filter((s) => s.slug !== servico.slug);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero claro */}
        <header className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <nav className={styles.breadcrumb} aria-label="Navegação">
                <Link href="/solucoes">Soluções</Link>
                <span>/</span>
                <span>{servico.nome}</span>
              </nav>
              <span className={styles.label}>
                <Icon /> {servico.nome}
              </span>
              <h1 className={styles.title}>
                {servico.titulo} <span>{servico.destaque}</span>
              </h1>
              <p className={styles.intro}>{servico.intro}</p>
              <div className={styles.ctas}>
                <a href="#contato" className={styles.btnPrimary}>
                  Falar com um especialista <RiArrowRightLine />
                </a>
                <Link href="/solucoes" className={styles.btnGhost}>
                  Ver todas as soluções
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualOrb} />
              <div className={styles.visualCard}>
                <div className={styles.visualIcon}>
                  <Icon />
                </div>
                <strong>{servico.nome}</strong>
                <div className={styles.visualTags}>
                  {servico.tags.map((tag) => (
                    <span key={tag} className={styles.visualTag}>
                      <i /> {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.visualStatus}>
                  <span className={styles.statusDot} /> Equipe Focus acompanhando
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* O que entregamos */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label}>O que entregamos</span>
              <h2>Tudo o que envolve {servico.nome}, em um só parceiro</h2>
            </div>
            <div className={styles.cards}>
              {servico.entregas.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.titulo} className={styles.card}>
                    <div className={styles.cardIcon}>
                      <ItemIcon />
                    </div>
                    <h3>{item.titulo}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Como funciona + ganhos */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={`container ${styles.splitGrid}`}>
            <div>
              <span className={styles.label}>Como funciona</span>
              <h2 className={styles.splitTitle}>Do diagnóstico à operação</h2>
              <ol className={styles.steps}>
                {servico.etapas.map((etapa, i) => (
                  <li key={etapa.titulo} className={styles.step}>
                    <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{etapa.titulo}</h3>
                      <p>{etapa.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.gainsCard}>
              <h3>O que sua empresa ganha</h3>
              <ul>
                {servico.ganhos.map((g) => (
                  <li key={g}>
                    <span className={styles.check}>
                      <RiCheckLine />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
              <a href="#contato" className={styles.btnPrimary}>
                Quero conversar <RiArrowRightLine />
              </a>
            </div>
          </div>
        </section>

        {/* Outras soluções */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label}>Outras soluções</span>
              <h2>Conheça também</h2>
            </div>
            <div className={styles.others}>
              {outros.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link key={s.slug} href={`/solucoes/${s.slug}`} className={styles.other}>
                    <span className={styles.otherIcon}>
                      <OtherIcon />
                    </span>
                    {s.nome}
                    <RiArrowRightUpLine className={styles.otherArrow} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
