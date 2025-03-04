import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import OptionList from '../OptionList';
import AddOptionForm from '../AddOptionForm';
import AddUpdateModal from '../../../../../utils/AddUpdateModal';
import { createOption } from '../../../reducers/optionReducer';
import { setSuccess, setError } from '../../../../../utils/MessageBanner';

const OptionGroup = ({
  optionGroupSubProcedureId, name, admin,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const modalRef = useRef();

  /* istanbul ignore next */
  const handleOptionAdd = (newOption) => {
    modalRef.current.toggleVisibility();
    try {
      dispatch(createOption(optionGroupSubProcedureId, newOption));
      setSuccess(t('optionGroupAddSuccess'));
    } catch (error) {
      setError(t('optionGroupAddError'));
    }
  };

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <OptionList optionGroupSubProcedureId={optionGroupSubProcedureId} />
        {admin && (
        <AddUpdateModal buttonLabel={t('buttonAddNewOption')} titleLabel={t('addOption')} ref={modalRef}>
          <AddOptionForm addOption={handleOptionAdd} />
        </AddUpdateModal>
        )}
      </Card.Body>
    </Card>
  );
};

export default OptionGroup;
