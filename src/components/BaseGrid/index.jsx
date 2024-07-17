import DataSales from '../DataSales'
import SupportContact from '../Support/SupportContact'
import * as S from './styles'


const Basegrid = ({ className, data }) => <S.Wrapper className={className}>
  <h1 aria-label="Account Overview" >Account Overview</h1>
  <SupportContact />
  <DataSales data={data}/>
</S.Wrapper>

export default Basegrid