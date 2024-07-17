import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';
import Basegrid from './components/BaseGrid';

export const AccountOverview = ({data}) => {

  return (
    <div className="AccountOverview">
      {/* <FontAwesomeIcon icon={faHardHat} /> */}
      <Basegrid data={data}/>
    </div>
  )
}

export default AccountOverview;