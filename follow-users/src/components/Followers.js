import React, { useState } from 'react';

const Followers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [follower, setFollower] = useState('');
  const [following, setFollowing] = useState('');
  console.log(users);

  const addNewUser = (e) => {
    e.preventDefault();
    if (!users.find((user) => user.name === newUser)) {
      setUsers((prev) => [
        ...prev,
        { name: newUser, followers: [], following: [] },
      ]);
      setNewUser('');
    } else {
      alert('User already exists.');
    }
  };

  const followerUser = (e) => {
    e.preventDefault();
    const checkUserExists = (checkUser) => {
      return users.find((user) => user.name === checkUser);
    };

    const checkUserFollows = () => {
      const usersFollowing = users.find((user) => user.name === follower);
      return usersFollowing.following.find((user) => user.name === following);
    };

    if (follower === following) {
      alert('Cannot follow yourself');
    } else if (!checkUserExists(follower) || !checkUserExists(following)) {
      alert('One of the users does not exist.');
    } else if (!checkUserFollows) {
      alert(`${follower} already follows ${following}`);
    } else {
      setUsers(
        users.map((user) => {
          if (user.name === follower) {
            user.following.push(following);
          } else if (user.name === following) {
            user.followers.push(follower);
          }
          return user;
        })
      );

      alert(
        `${follower} has ${
          checkUserExists(follower).followers.length
        } followers and is following ${
          checkUserExists(follower).following.length > 1
            ? `${checkUserExists(follower).following.length} people`
            : `${checkUserExists(follower).following.length} person`
        } `
      );

      setFollower('');
      setFollowing('');
    }
  };

  return (
    <div className="App">
      <form onSubmit={addNewUser}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user"
        />
      </form>
      <h3>User List</h3>
      <ul>
        {users?.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
      <form onSubmit={followerUser}>
        <input
          type="text"
          value={follower}
          onChange={(e) => setFollower(e.target.value)}
        />{' '}
        will now follow{' '}
        <input
          type="text"
          value={following}
          onChange={(e) => setFollowing(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Followers;
