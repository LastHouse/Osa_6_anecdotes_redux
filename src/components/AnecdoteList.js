import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const anecdoteFilter = useSelector((state) => state.filter);

  const shownAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(anecdoteFilter.toLowerCase())
  );

  const dispatch = useDispatch();

  const addVote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
  };

  const updatedList = shownAnecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });

  return (
    <div>
      <h2>Anecdotes</h2>
      {updatedList.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{' '}
            <button
              onClick={() => {
                addVote(anecdote);
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
