import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TermsModal.module.css";

type TermsModalProps = {
  linkColor?: string;
};

const TermsModal: React.FC<TermsModalProps> = ({ linkColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <a onClick={open} className={styles.link} style={{ color: linkColor }}>
        CONFIRA O REGULAMENTO.
      </a>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className={styles.closeButton}
                aria-label="Fechar"
              >
                ×
              </button>
              <h2 className={styles.title}>TERMOS & CONDIÇÕES</h2>
              <div className={styles.content} style={{ fontFamily: "Exo" }}>
                <p>
                  <strong>
                    Faça sua primeira aposta de R$5,00 ou mais no Cassino AG e
                    receba 50 giros extras no Ratinho Sortudo.
                  </strong>
                </p>
                <br />
                <p>
                  <strong>Elegibilidade</strong>
                  <br />
                  1.1. A promoção intitulada &quot;Joga junto com a AG’’ é
                  destinada exclusivamente a clientes devidamente cadastrados na
                  plataforma ApostaGanha.bet.br, desde que cumpram todos os
                  requisitos estabelecidos neste regulamento.
                  <br />
                  1.2. A promoção será válida somente para primeira aposta
                  efetuada no Ratinho Sortudo durante o período promocional.
                  <br />
                  1.3. Promoção válida para clientes que estejam de acordo com
                  os termos e condições deste regulamento, e após ter realizado
                  o cadastro pelo link do anúncio.
                </p>
                <br />
                <p>
                  <strong>Período</strong>
                  <br />
                  2.1. A promoção estará em vigor no seguinte período das
                  12h00min do dia 05/08 até às 23h59min do dia 31/08 (horário de
                  Brasília).
                  <br />
                  <br />
                  Válido somente para clientes que se cadastrarem através do
                  link da promoção e validarem a conta durante o período da
                  oferta.
                  <br />
                  ● A primeira aposta após a validação deve ser exclusivamente
                  no Cassino e no Ratinho Sortudo.
                  <br />
                  Caso o cliente aposte em quaisquer outros jogos ou esportes
                  antes, não estará elegível.
                  <br />
                  ● Aposte R$5,00 ou mais e receba 50 giros extras no jogo Touro
                  Sortudo.
                  <br />
                  ● O pagamento será realizado em até 10 minutos após cumprir o
                  requisito mínimo de valor apostado no jogo selecionado.
                  <br />● Promoções de validação de conta não são cumulativas.
                  Apenas uma oferta de validação por CPF será válida.
                </p>
                <br />
                <p>
                  <strong>Jogos Participantes</strong>
                  <br />
                  Ratinho Sortudo
                  <br />
                  3.1. A promoção é válida para clientes que realizarem sua
                  primeira aposta na Ratinho Sortudo dentro do período
                  participante.
                </p>
                <br />
                <p>
                  <strong>Regras da premiação</strong>
                  <br />
                  4.1. O cliente receberá 50 giros extras no jogo selecionado
                  após realizar R$5,00 ou mais em apostas no jogo Touro Sortudo.
                  <br />
                  4.2. Para ser elegível aos giros extras, o jogador deve
                  realizar sua primeira aposta no Ratinho Sortudo durante o
                  período estabelecido.
                  <br />
                  4.3. O participante receberá 50 giros de R$0,10 centavos cada,
                  liberados em até 10 minutos após o cumprimento do valor de
                  aposta exigido.
                  <br />
                  4.4. A promoção não se trata de qualquer tipo de recuperação
                  do valor perdido ao ato similar, mas sim, trata-se de um
                  programa de fidelidade que atua incidindo na movimentação
                  dentro da plataforma.
                </p>
                <br />
                <p>
                  <strong>Participação</strong>
                  <br />
                  5.1. Para participar da promoção, o usuário deve:
                  <br />
                  &nbsp;&nbsp;a) Criar sua conta através do link do anúncio.
                  <br />
                  &nbsp;&nbsp;b) Realizar a primeira aposta no jogo Ratinho
                  Sortudo.
                  <br />
                  &nbsp;&nbsp;c) Seguir as regras para concorrer a rodadas
                  extras.
                  <br />
                  &nbsp;&nbsp;d) Efetuar apostas de acordo com as regras
                  estabelecidas para a promoção.
                  <br />
                  &nbsp;&nbsp;e) Somente as primeiras apostas no jogo
                  selecionado serão válidas.
                  <br />
                  5.2. O cliente está autorizado a realizar quantas apostas
                  desejar, desde que elas sigam os termos deste regulamento.
                </p>
                <br />
                <p>
                  <strong>Disposições Gerais</strong>
                  <br />
                  6.1. A ApostaGanha.bet.br reserva-se o direito de cancelar,
                  modificar ou encerrar a promoção a qualquer momento, a seu
                  exclusivo critério, sem necessidade de aviso prévio.
                  <br />
                  6.2. Todos os termos e condições do ApostaGanha.bet.br são
                  aplicáveis.
                  <br />
                  6.3. Qualquer mau funcionamento anula todos os pagamentos e
                  jogadas.
                  <br />
                  6.4. Em caso de dúvidas, os participantes devem contatar o
                  suporte da ApostaGanha.bet.br.
                  <br />
                  6.5. Ao participar da promoção, você concorda com os termos e
                  condições estabelecidos neste regulamento.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TermsModal;
