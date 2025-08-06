// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.wrapper}>
    <div className={styles.inner}>
      <a
        href="https://apostaganha.bet/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoLink}
      >
        <img
          src="https://storage.googleapis.com/ag-crm/novos-emails/brand-ag_white.png"
          alt="Aposta Ganha - logo"
          className={styles.logo}
        />
      </a>

      <a
        href="https://apostaganha.bet/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.badgeLink}
      >
        <img
          src="https://storage.googleapis.com/ag-crm/novos-emails/ag_jogoresponsavel.png"
          alt="Jogue com responsabilidade | +18"
          className={styles.badge}
        />
      </a>

      <div className={styles.socialContainer}>
        <p className={styles.socialText}>
          <strong style={{ fontFamily: "Exo" }}>
            Siga nossas redes e fique por dentro de tudo
          </strong>
        </p>
        <div className={styles.icons}>
          <a
            href="https://t.me/apostaganhavip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/ag-crm/novos-emails/Telegram.png"
              alt="Telegram"
            />
          </a>
          <a
            href="https://x.com/apostaganhabet_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/ag-crm/novos-emails/Twitter-x-fill.png"
              alt="Twitter X"
            />
          </a>
          <a
            href="https://www.instagram.com/apostaganha.oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/ag-crm/novos-emails/Instagram.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <div className={styles.legal}>
        <p>
          A plataforma
          <a
            href="https://apostaganha.bet.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Exo", color: "#fe5500" }}
          >
            {" "}
            www.apostaganha.bet.br{" "}
          </a>
          é operada pela{" "}
          <b style={{ fontFamily: "Exo" }}> APOSTA GANHA LOTERIAS LTDA</b>,
          CNPJ: 56.001.749/0001-08, Rua Maria de Lourdes Casé Porto, Nº 51, Sala
          407, CEP: 55.012-075, Caruaru-PE. Empresa licenciada pelo SPA/MF n°
          251/2025.
        </p>
      </div>

      {/* Links */}
      <nav className={styles.links}>
        <a
          href="https://ajuda.apostaganha.bet.br/hc/pt-br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Central de ajuda 💬
        </a>
      </nav>

      {/* Copyright */}
      <div className={styles.copy}>
        <p>
          ©️ ApostaGanha - Todos os direitos reservados -{" "}
          <a
            href="https://apostaganha.bet.br/politica-de-seguranca-e-privacidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
