import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const SupportContact = ({ className }) => <S.Wrapper className={className}>
  <S.Label aria-label="Your Feefo Support Contact">Your Feefo Support Contact</S.Label>
  <S.Line>
    <S.Miniature><strong>S</strong></S.Miniature>
    <S.Line wrap="true">
      <strong aria-label="Support title card">Support</strong>
      <S.Line>
        <FontAwesomeIcon icon={faEnvelope} aria-label="envelope icon"/>
        <span aria-label="support email: upport@feefo.com">support@feefo.com</span>
        <span aria-label="020 3362 4208"> 020 3362 4208</span>
      </S.Line>
    </S.Line>
  </S.Line>
</S.Wrapper>

export default SupportContact