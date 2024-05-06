import React, { useState } from 'react';
import './DatingApp.css'; // Import CSS file


const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f4af7475dmsh366b14cf8bd69f1p11508ajsn078f955ac835',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const horoscopeSigns = [
  'All', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const sampleProfiles = [
  { id: 1, name: 'John', age: 25, horoscope: 'Aries', gender: 'Male', bio: 'I love hiking and reading.', image: 'https://via.placeholder.com/150' },
  // Add image URLs for other profiles
];

const DatingApp = () => {
  const [profiles, setProfiles] = useState([...sampleProfiles]);
  const [newProfile, setNewProfile] = useState({ name: '', age: '', horoscope: 'All', gender: 'All', bio: '', image: '' });
  const [editProfile, setEditProfile] = useState(null);
  const [filterHoroscope, setFilterHoroscope] = useState('All');
  const [fortune, setFortune] = useState('');

  const addProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: Date.now() }]);
    setNewProfile({ name: '', age: '', horoscope: 'All', gender: 'All', bio: '', image: '' });
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const setEditProfileToEdit = (id) => {
    const profileToEdit = profiles.find(profile => profile.id === id);
    setEditProfile(profileToEdit);
  };

  const updateProfile = () => {
    const updatedProfiles = profiles.map(profile =>
      profile.id === editProfile.id ? editProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditProfile(null);
  };

  const filterProfiles = () => {
    if (filterHoroscope === 'All') {
      return profiles;
    } else {
      return profiles.filter(profile => profile.horoscope === filterHoroscope);
    }
  };

  return (
    <div className="dating-app">
      <h1>Dating App</h1>
      <div className="add-profile">
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newProfile.age}
          onChange={(e) => setNewProfile({ ...newProfile, age: e.target.value })}
        />
        <select value={newProfile.horoscope} onChange={(e) => setNewProfile({ ...newProfile, horoscope: e.target.value })}>
          {horoscopeSigns.map(sign => (
            <option key={sign} value={sign}>{sign}</option>
          ))}
        </select>
        <select value={newProfile.gender} onChange={(e) => setNewProfile({ ...newProfile, gender: e.target.value })}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Bio"
          value={newProfile.bio}
          onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProfile.image}
          onChange={(e) => setNewProfile({ ...newProfile, image: e.target.value })}
        />
        <button onClick={addProfile}>Add Profile</button>
      </div>
      <div className="filter">
        <select value={filterHoroscope} onChange={(e) => setFilterHoroscope(e.target.value)}>
          {horoscopeSigns.map(sign => (
            <option key={sign} value={sign}>{sign}</option>
          ))}
        </select>
        <p>{fortune}</p>
      </div>
      <div className="profile-container">
        {filterProfiles().map(profile => (
          <div key={profile.id} className="profile-card">
            <img src={profile.image} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>Age: {profile.age}</p>
            <p>Horoscope: {profile.horoscope}</p>
            <p>Gender: {profile.gender}</p>
            <p>Bio: {profile.bio}</p>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            <button onClick={() => setEditProfileToEdit(profile.id)}>Edit</button>
          </div>
        ))}
      </div>
      {editProfile && (
        <div className="edit-profile">
          <input
            type="text"
            placeholder="Name"
            value={editProfile.name}
            onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Age"
            value={editProfile.age}
            onChange={(e) => setEditProfile({ ...editProfile, age: e.target.value })}
          />
          <select value={editProfile.horoscope} onChange={(e) => setEditProfile({ ...editProfile, horoscope: e.target.value })}>
            {horoscopeSigns.map(sign => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
          <select value={editProfile.gender} onChange={(e) => setEditProfile({ ...editProfile, gender: e.target.value })}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            placeholder="Bio"
            value={editProfile.bio}
            onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editProfile.image}
            onChange={(e) => setEditProfile({ ...editProfile, image: e.target.value })}
          />
          <button onClick={updateProfile}>Update Profile</button>
        </div>
      )}
    </div>
  );
};

export default DatingApp;
