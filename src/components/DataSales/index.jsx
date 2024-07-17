import Card from '../Card'
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import * as S from './styles'

/**
 * Note: The best way to handle components properties is use Type Scipt instead of use Prop Types
 */
const DataSales = ({data: { salesOverview }}) => {
  const uploadPercent = Math.round((100 * salesOverview.successfulUploads) / salesOverview.uploads);
  const savedPercentage = Math.round((100 * salesOverview.linesSaved) / salesOverview.linesAttempted);

  return <S.Wrapper> 
    <Card >
      <S.Grid>
        <S.Header>
          <div>
            <FontAwesomeIcon icon={faUpload} aria-label="upload icon" />
            <strong aria-label="Sales">Sales</strong>
            <FontAwesomeIcon icon={faInfoCircle} aria-label="information tooltip"/>
          </div>

          <div>
            <span
              aria-label={`You had ${salesOverview.uploads} uploads and ${salesOverview.linesAttempted} lines added.`}
            >You had <strong data-testid="total-uploads">{salesOverview.uploads} uploads</strong> and 
            <strong data-testid="total-lines"> {salesOverview.linesAttempted}</strong> lines added.</span>
          </div>
        </S.Header>

        <S.SucessCell>
          <S.NumberPercentage
              data-testid="upload-percent"
              aria-label={uploadPercent + '%'}
            >{uploadPercent}%</S.NumberPercentage>
          <S.Percentagelabel aria-label="upload success">upload success</S.Percentagelabel>
        </S.SucessCell>

        <S.SavedCell>
          <S.NumberPercentage data-testid="lines-saved-percent" aria-label={savedPercentage + '%'}>
            {savedPercentage}%
          </S.NumberPercentage>
          <S.Percentagelabel aria-label="lines saved">lines saved</S.Percentagelabel>
        </S.SavedCell>
      </S.Grid>
    </Card>
  </S.Wrapper>
}

DataSales.propTypes = {
  data: {
    salesOverview: {
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number
    }
  }
}

export default DataSales