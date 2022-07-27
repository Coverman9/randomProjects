import { faker } from "@faker-js/faker";

const INCREMENT = "increment";
const DECREMENT = "decrement";

export const increment = {
  type: INCREMENT,
};

export const decrement = {
  type: DECREMENT,
};

const initialState = {
  students: [
    {
      name: "Bakyt",
      age: 34,
      gay: true,
    },
    {
      name: "Bob",
      age: 44,
      gay: false,
    },
    {
      name: "Mal",
      age: 26,
      gay: true,
    },
  ],
};

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INCREMENT:
      const randomName = faker.name.firstName("male");
      const randomAge = Math.floor(Math.random() * 30) + 18;
      const gayRoulette = Math.floor(Math.random() * 2);

      let newStudent = {
        name: randomName,
        age: randomAge,
        gay: gayRoulette,
      };
      return { ...state, students: [...state.students, newStudent] };
    case DECREMENT:
      return {
        ...state,
        students: [...state.students.slice(0, state.students.length - 1)],
      };
    default:
      return state;
  }
};
