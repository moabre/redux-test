import { v4 as uuid } from 'uuid';

const initalBookStore = [
  {
    id: uuid(),
    title: 'Intelligent Investor',
    price: '$32.00',
    category: 'Finance',
    description: '',
  },
  {
    id: uuid(),
    title: 'The Vanishing Half: A Novel',
    price: '$36.00',
    category: 'Fiction',
    description: '',
  },
  {
    id: uuid(),
    title: 'A Promised Land',
    price: '$55.00',
    category: 'Nonfiction',
    description: '',
  },
  {
    id: uuid(),
    title: 'Light Jedi',
    price: '$33.29',
    category: 'Fiction',
    description: '',
  },
  {
    id: uuid(),
    title: 'Saving Justice: Truth, Transparency, and Trust',
    price: '$29.95',
    category: 'Nonfiction',
    description: '',
  },
];

const bookReducer = (state = initalBookStore, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: uuid(),
          title: payload.title || '',
          price: payload.price || '',
          category: payload.category || '',
          description: payload.description || '',
        },
      ];
    case 'DELETE_BOOK':
      const newState = state.filter((i) => i.id !== payload.id);
      return newState;

    case 'EDIT_BOOK':
      const copyState = [...state];
      const index = copyState.findIndex((i) => i.id === payload.id);
      copyState[index] = payload;
      return copyState;

    default:
      return state;
  }
};

export default bookReducer;
