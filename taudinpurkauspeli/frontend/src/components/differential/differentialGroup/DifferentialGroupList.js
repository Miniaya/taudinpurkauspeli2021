/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import serviceUnderCases from '../../../services/differentials/differentialGroupsUnderCases';
import DifferentialGroup from './DifferentialGroup';

const DifferentialGroupList = ({ caseId, admin }) => {
  const [caseDifferentialGroups, setCaseDifferentialGroups] = useState([]);

  React.useEffect(() => {
    serviceUnderCases.getAll(caseId)
      .then((initialDifferentialGroups) => {
        setCaseDifferentialGroups(initialDifferentialGroups);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  }, []);

  return (
    <div>
      {caseDifferentialGroups.map((d) => (
        <DifferentialGroup
          key={d.id}
          diffGroupCaseId={d.diffGroupCaseId}
          name={d.name}
          admin={admin}
        />
      ))}
    </div>
  );
};

export default DifferentialGroupList;
