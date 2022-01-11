import axios from 'axios';

const GET_GREETING = 'redux/greeting/GET_GREETING';

const getGreeting = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3000/v1/greetings');
  console.log(data.greeting.message);

  dispatch({ type: GET_GREETING, payload: data.greeting.message });
};

const initialState = {};

const greetingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GREETING:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

export { getGreeting };

export default greetingReducer;
