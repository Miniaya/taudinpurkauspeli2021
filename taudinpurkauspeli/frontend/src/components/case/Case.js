/* eslint-disable linebreak-style */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Link, useParams,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Case = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const baseUrl = `/cases/${id}`;

  return (

    <div id="wrapper">
      <Button as={Link} to={baseUrl}>{t('caseAnamnesis')}</Button>
      <Button as={Link} to={`${baseUrl}/procedures`}>{t('caseProcedures')}</Button>
      <Button as={Link} to={`${baseUrl}/differentials`}>{t('caseDifferentials')}</Button>
    </div>

  );
};

export default Case;
