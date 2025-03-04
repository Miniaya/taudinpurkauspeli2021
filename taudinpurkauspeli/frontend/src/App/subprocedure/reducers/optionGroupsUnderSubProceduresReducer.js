import service from '../services/optionGroupsUnderSubProceduresService';

const optionGroupsUnderSubProceduresReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OPTIONGROUPS_UNDER_SUBPROCEDURES':
      return action.data;
    case 'NEW_OPTIONGROUP_UNDER_SUBPROCEDURE':
      return [...state, action.data];
    default:
      return state;
  }
};

export const getOptionGroupsUnderSubProcedures = (id) => async (dispatch) => {
  const returnedOptionGroups = await service.getAll(id);
  dispatch({
    type: 'GET_OPTIONGROUPS_UNDER_SUBPROCEDURES',
    data: returnedOptionGroups || null,
  });
};

export const createOptionGroupUnderSubProcedure = (content) => async (dispatch) => {
  const newOptionGroupUnderSubProcedure = await service.create(content);
  dispatch({
    type: 'NEW_OPTIONGROUP_UNDER_SUBPROCEDURE',
    data: newOptionGroupUnderSubProcedure,
  });
};

export default optionGroupsUnderSubProceduresReducer;
