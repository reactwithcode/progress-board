import React, { createContext } from 'react';

const cardData = [
  {
    title: "Todo",
    id: 0,
    cards: [
      {
        taskText: "Add a map on Detail Page",
        listNumber: 0,
        timeId: 0,
      },
      {
        taskText: "Add chatting feature",
        listNumber: 0,
        timeId: 1,
      },
    ],
  },
  {
    title: "On Progress",
    id: 1,
    cards: [
      {
        taskText: "Header on Home page",
        listNumber: 1,
        timeId: 2,
      },
      {
        taskText: "Price Filter on Home Page",
        listNumber: 1,
        timeId: 3,
      },
    ],
  },
  {
    title: "Done",
    id: 2,
    cards: [
      {
        taskText: "Add pagination on Home page",
        listNumber: 2,
        timeId: 4,
      },
      {
        taskText: "Add History Order Page",
        listNumber: 2,
        timeId: 5,
      },
    ],
  },
]


export const CardContext = React.createContext(cardData);

