import Link from "next/link";
import styles from "./Footer.module.css";
import { servicos } from "@/data/servicos";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <span className={styles.logoBar} />
                <span className={styles.logoBar} />
                <span className={styles.logoBar} />
              </div>
              <span className={styles.logoText}>FOCUS NETWORK</span>
            </div>
            <p className={styles.footerDesc}>
              Tudo o que sua empresa precisa na nuvem: Azure, AWS e Oracle Cloud, da migração à operação. Desde 2017 · Curitiba – PR.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">ig</a>
              <a href="#" className={styles.socialLink} aria-label="WhatsApp">w</a>
            </div>
          </div>

          {/* Nav */}
          <div className={styles.footerCol}>
            <h4>Navegação</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <h4>Serviços</h4>
            <ul>
              {servicos.map((s) => (
                <li key={s.slug}><Link href={`/solucoes/${s.slug}`}>{s.nome}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <span className={styles.copyright}>
            © Focus Network 2025. Todos os direitos reservados.
          </span>
          <a href="https://wa.me/554141414290" className={styles.ctaBtn}>
            Fale pelo WhatsApp ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
