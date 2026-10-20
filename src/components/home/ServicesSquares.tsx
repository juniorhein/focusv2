import Link from "next/link";
import { RiArrowRightUpLine, RiSparklingFill } from "react-icons/ri";
import { servicos } from "@/data/servicos";
import { Section, Container } from "../layout/Section";
import styles from "./ServicesSquares.module.css";

export default function ServicesSquares() {
  return (
    <Section className={styles.section} id="servicos">
      <Container>
        <header className={styles.header}>
          <span className={styles.badge}>
            <RiSparklingFill /> Soluções Focus
          </span>
          <h2 className={styles.title}>Conheça cada solução em detalhe</h2>
          <p className={styles.sub}>
            Da rede ao ambiente em nuvem, escolha o serviço e veja como a Focus cuida de cada parte.
          </p>
        </header>

        <div className={styles.grid}>
          {servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} href={`/solucoes/${s.slug}`} className={styles.square}>
                <div className={styles.top}>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.bottom}>
                  <h3>{s.nome}</h3>
                  <p>{s.resumo}</p>
                  <span className={styles.more}>
                    Saiba mais <RiArrowRightUpLine />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
