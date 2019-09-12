import React from "react"
import NameOfService from '../activity-display/NameOfService'
import Address from '../activity-display/Address'
import OtherInfo from '../activity-display/OtherInfo'
import ActivityTimes from '../activity-display/ActivityTimes'
import Cost from '../activity-display/Cost'
import Accessibility from '../activity-display/Accessibility'
import ContactDetails from '../activity-display/ContactDetails'
import PrintButton from '../components/PrintButton'

const ActivityDetail = ({ results }) => {

  const renderedList = results.map((obj, index) => {

    return (
      <li key={index}>
        <div className="service-container">
          <NameOfService NameOfService={obj.NameOfService} />
          <Address obj={obj} />
          <OtherInfo otherInfo={obj.OtherDetailedInformation}/>
          <ActivityTimes times={obj} />
          <Cost cost={obj.Cost} />
          <div className="transport">
            <p className="section-heading">Transport:</p>
            <p>Buses: {obj.Buses}</p>
            <p>Tube and Trains: {obj.TubeAndTrains}</p>
            <p>Car Park Availability: {obj.CarParkingDetails}</p>
          </div>
          <Accessibility info={obj.AccessibilityDetails} />
          <ContactDetails contact={obj} />
          <PrintButton />
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {renderedList}
      </ul>
    </div>
  );
};

export default ActivityDetail;
