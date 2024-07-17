import * as S from './styles'


const Card = ({ className, children }) => <S.Wrapper className={className}>
  {children}
</S.Wrapper>

export default Card