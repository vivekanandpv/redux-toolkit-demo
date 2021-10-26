import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { data } from '../data';
import { userSlice } from '../store/user-slice';

const User = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const avatarStyle = {
    borderRadius: '50%',
    height: '70px',
    padding: '2px',
    border: '1px solid  #e6e6ff',
  };

  const moveNext = () => {
    const index =
      user.index === -1
        ? 0
        : user.index < data.data.length - 1
        ? user.index + 1
        : 0;

    const currentUser = data.data[index];

    currentUser.index = index;

    currentUser.index = dispatch(userSlice.actions.replaceUser(currentUser));
  };

  const movePrevious = () => {
    const index =
      user.index === -1
        ? data.data.length - 1
        : user.index > 0
        ? user.index - 1
        : data.data.length - 1;

    const currentUser = data.data[index];

    currentUser.index = index;

    currentUser.index = dispatch(userSlice.actions.replaceUser(currentUser));
  };

  return (
    <>
      <div className='container p-5'>
        <div className='card my-4' key={user.email}>
          <div className='card-body d-flex'>
            <img src={user.avatar} alt='Avatar' style={avatarStyle} />
            <div className='ms-4'>
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <button className='btn btn-primary' onClick={movePrevious}>
            Previous
          </button>
          <button className='btn btn-primary' onClick={moveNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
