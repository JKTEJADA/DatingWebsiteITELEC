import React, { useState } from 'react';
import './DatingApp.css'; // Import CSS file

const horoscopeSigns = [
  'All', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const sampleProfiles = [
  { id: 1, name: 'John', age: 25, horoscope: 'Aries', gender: 'Male', bio: 'I love hiking and reading.' },
  { id: 2, name: 'Emma', age: 30, horoscope: 'Libra', gender: 'Female', bio: 'I enjoy cooking and traveling.' },
  { id: 3, name: 'Michael', age: 28, horoscope: 'Leo', gender: 'Male', bio: 'I\'m a musician and a coffee enthusiast.' },
  { id: 4, name: 'Sophia', age: 27, horoscope: 'Pisces', gender: 'Female', bio: 'I\'m passionate about photography and yoga.' },
  { id: 5, name: 'James', age: 26, horoscope: 'Scorpio', gender: 'Male', bio: 'I like playing basketball and watching movies.' },
  { id: 6, name: 'Olivia', age: 29, horoscope: 'Aquarius', gender: 'Female', bio: 'I\'m a bookworm and love going to art galleries.' },
  { id: 7, name: 'William', age: 31, horoscope: 'Taurus', gender: 'Male', bio: 'I\'m a foodie and enjoy trying new cuisines.' },
  { id: 8, name: 'Isabella', age: 24, horoscope: 'Gemini', gender: 'Female', bio: 'I love dancing and going to music festivals.' },
  { id: 9, name: 'Alexander', age: 27, horoscope: 'Cancer', gender: 'Male', bio: 'I\'m passionate about fitness and health.' },
  { id: 10, name: 'Sophie', age: 28, horoscope: 'Virgo', gender: 'Female', bio: 'I\'m a dog lover and enjoy outdoor activities.' },
  { id: 11, name: 'Daniel', age: 29, horoscope: 'Capricorn', gender: 'Male', bio: 'I\'m a tech enthusiast and love coding.' },
  { id: 12, name: 'Mia', age: 26, horoscope: 'Sagittarius', gender: 'Female', bio: 'I\'m adventurous and love traveling to exotic places.' },
  { id: 13, name: 'Benjamin', age: 30, horoscope: 'Pisces', gender: 'Male', bio: 'I\'m a nature lover and enjoy hiking in the mountains.' },
  { id: 14, name: 'Charlotte', age: 28, horoscope: 'Aries', gender: 'Female', bio: 'I\'m a fashionista and love designing clothes.' },
  { id: 15, name: 'Samuel', age: 32, horoscope: 'Leo', gender: 'Male', bio: 'I\'m a movie buff and enjoy watching classic films.' },
  { id: 16, name: 'Emily', age: 25, horoscope: 'Libra', gender: 'Female', bio: 'I\'m an animal lover and enjoy volunteering at shelters.' },
  { id: 17, name: 'Matthew', age: 27, horoscope: 'Taurus', gender: 'Male', bio: 'I\'m a gamer and love playing video games.' },
  { id: 18, name: 'Amelia', age: 29, horoscope: 'Gemini', gender: 'Female', bio: 'I\'m a music junkie and love going to concerts.' },
  { id: 19, name: 'David', age: 28, horoscope: 'Cancer', gender: 'Male', bio: 'I\'m a coffee connoisseur and enjoy trying different blends.' },
  { id: 20, name: 'Ella', age: 26, horoscope: 'Virgo', gender: 'Female', bio: 'I\'m a beach lover and enjoy surfing and snorkeling.' },
];

const DatingApp = () => {
  const [profiles, setProfiles] = useState([...sampleProfiles]);
  const [clickedProfiles, setClickedProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: '', age: '', horoscope: 'All', gender: 'All', bio: '', image: '' });
  const [editProfile, setEditProfile] = useState(null);
  const [filterHoroscope, setFilterHoroscope] = useState('All');
  const [fortune, setFortune] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleProfileClick = (profileId) => {
    const clickedProfile = profiles.find(profile => profile.id === profileId);
  
    // Check if the clicked profile is already in clickedProfiles array
    if (clickedProfiles.some(profile => profile.id === clickedProfile.id)) {
      return;
    }
  
    // If there are already two clicked profiles, reset the clicked profiles array
    if (clickedProfiles.length === 2) {
      return;
    }
    
    setClickedProfiles([...clickedProfiles, clickedProfile]);
  
    if (clickedProfiles.length === 1) {
      const fname = clickedProfiles[0].name;
      const sname = clickedProfile.name;
  
      const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e85ef444c0msh8b70ca519eadeebp1f4454jsnf8d69a51c6d8',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
      };
  
      fetch(url, options)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setModalContent(
            <div>
              Compatibility result between <br />
              {fname} & {sname} <br />
              <br />
              Percentage: {result.percentage}% <br />
              {result.result}
            </div>
          );
          setModalOpen(true);
        })
        .catch(error => console.error(error));
    }
  };
  
  const closeModal = () => {
    // Reset the modal content
    setModalContent('');
    // Close the modal
    setModalOpen(false);
    // Reset clickedProfiles
    setClickedProfiles([]);
  };

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="../App.js">Affinity</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="../App.js">Landing Page</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dating Page</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../Horoscope.js">Horoscope Page</a>
            </li>
          </ul>
        </div>
      </nav>
        {modalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          {modalContent}
        </div>
      </div>
    )}
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
          <div key={profile.id} className={`profile-card ${clickedProfiles.some(p => p.id === profile.id) ? 'glow' : ''}`} onClick={() => handleProfileClick(profile.id)}>
            <img src={profile.image} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>Age: {profile.age}</p>
            <p>Horoscope: {profile.horoscope}</p>
            <p>Gender: {profile.gender}</p>
            <p>Bio: {profile.bio}</p>
            <button onClick={(e) => {
              e.stopPropagation();
              deleteProfile(profile.id);
            }}>Delete</button>
            <button onClick={(e) => {
              e.stopPropagation();
              setEditProfileToEdit(profile.id);
            }}>Edit</button>
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
