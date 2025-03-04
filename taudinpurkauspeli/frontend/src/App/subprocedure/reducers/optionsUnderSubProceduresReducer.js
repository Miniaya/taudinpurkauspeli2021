import service from '../services/optionsUnderSubProceduresService';

const optionsUnderSubProceduresReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OPTIONS_UNDER_SUBPROCEDURES':
      return action.data;
    case 'NEW_OPTION_UNDER_SUBPROCEDURE':
      return [...state, action.data];
    default:
      return state;
  }
};

export const getOptionsUnderSubProcedures = (id) => async (dispatch) => {
  const returnedOptions = await service.getAll(id);
  dispatch({
    type: 'GET_OPTIONS_UNDER_SUBPROCEDURES',
    data: returnedOptions || null,
  });
};

export const createOptionUnderSubProcedure = (content) => async (dispatch) => {
  const newOption = await service.create(content);
  dispatch({
    type: 'NEW_OPTION_UNDER_SUBPROCEDURE',
    data: newOption,
  });
};

export default optionsUnderSubProceduresReducer;
