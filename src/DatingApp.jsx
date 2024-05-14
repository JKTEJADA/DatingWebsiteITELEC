import {Link} from "react-router-dom";
import React, {useState} from "react";

const horoscopeSigns = [
    'All', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const sampleProfiles = [
    { id: 1, name: 'John', age: 25, horoscope: 'Aries', gender: 'Male', bio: 'I love hiking and reading.', image: 'https://turkeyanaclinic.com/wp-content/uploads/2023/05/Baby-Face-02.jpg'},
    { id: 2, name: 'Emma', age: 30, horoscope: 'Libra', gender: 'Female', bio: 'I enjoy cooking and traveling.', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/03/black_man_massaging_face-732x549-thumbnail-732x549.jpg' },
    { id: 3, name: 'Michael', age: 28, horoscope: 'Leo', gender: 'Male', bio: 'I\'m a musician and a coffee enthusiast.', image: 'https://c8.alamy.com/comp/ER3EPG/full-body-shot-of-young-blonde-happy-woman-isolated-on-white-background-ER3EPG.jpg' },
    { id: 4, name: 'Sophia', age: 27, horoscope: 'Pisces', gender: 'Female', bio: 'I\'m passionate about photography and yoga.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfJvSVgYeJY_KhTQC1Tac9U_bt7YrDWzE5COgn1r26g&s' },
    { id: 5, name: 'James', age: 26, horoscope: 'Scorpio', gender: 'Male', bio: 'I like playing basketball and watching movies.', image: 'https://ggia.berkeley.edu/images/jcogs_img/cache/GGIA-HumanFace_-_abcdef_-_d5e982cf0c8784ce57e31967e85af0c792362c71.jpg' },
    { id: 6, name: 'Olivia', age: 29, horoscope: 'Aquarius', gender: 'Female', bio: 'I\'m a bookworm and love going to art galleries.', image: 'https://media.licdn.com/dms/image/D4D03AQGxc0jHgZwNAQ/profile-displayphoto-shrink_800_800/0/1687595663222?e=2147483647&v=beta&t=NYLgFjzt1pnvSSS5Q0f4beCPLDlTpQAUoDqNjCmkwRg' },
    { id: 7, name: 'William', age: 31, horoscope: 'Taurus', gender: 'Male', bio: 'I\'m a foodie and enjoy trying new cuisines.', image: 'https://www.stcbarbershop.com/wp-content/uploads/2017/12/The-6-Different-Types-Of-Face-Shapes.jpg' },
    { id: 8, name: 'Isabella', age: 24, horoscope: 'Gemini', gender: 'Female', bio: 'I love dancing and going to music festivals.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOg5m0QKx5kTbNvK0stdH1jetjY0achf8IkTKcXmB_Mg&s' },
    { id: 9, name: 'Alexander', age: 27, horoscope: 'Cancer', gender: 'Male', bio: 'I\'m passionate about fitness and health.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4j6P_40m6z-_ZbAVkUsKt05BmGX8WUX-2cuY1PMLFng&s' },
    { id: 10, name: 'Sophie', age: 28, horoscope: 'Virgo', gender: 'Female', bio: 'I\'m a dog lover and enjoy outdoor activities.', image: 'https://pbs.twimg.com/media/F-jSa_VawAARz-p?format=jpg&name=4096x4096' },
    { id: 11, name: 'Daniel', age: 29, horoscope: 'Capricorn', gender: 'Male', bio: 'I\'m a tech enthusiast and love coding.', image: 'https://n.nordstrommedia.com/id/39bf7935-9f14-4322-8623-4f19adb30ca3.jpeg?h=600&w=750' },
    { id: 12, name: 'Mia', age: 26, horoscope: 'Sagittarius', gender: 'Female', bio: 'I\'m adventurous and love traveling to exotic places.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qo2rST952vk78VEWcAdDCD8itaeBZjlxbIdclMKnpw&s' },
    { id: 13, name: 'Benjamin', age: 30, horoscope: 'Pisces', gender: 'Male', bio: 'I\'m a nature lover and enjoy hiking in the mountains.', image: 'https://www.shutterstock.com/image-photo/portrait-young-beautiful-woman-perfect-600nw-2228044151.jpg' },
    { id: 14, name: 'Charlotte', age: 28, horoscope: 'Aries', gender: 'Female', bio: 'I\'m a fashionista and love designing clothes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfhfs5xzugIn_n-ecOPF9YNf7XbQim6a09asYwa2lIA&s' },
    { id: 15, name: 'Samuel', age: 32, horoscope: 'Leo', gender: 'Male', bio: 'I\'m a movie buff and enjoy watching classic films.', image: 'https://preview.redd.it/photo-series-maloi-as-tnt-hurado-its-showtime-guesting-v0-nydau3afl4ic1.jpg?width=1080&crop=smart&auto=webp&s=10701d4e2b4beb5f4305b07c6d079220b2d8ad81' },
    { id: 16, name: 'Emily', age: 25, horoscope: 'Libra', gender: 'Female', bio: 'I\'m an animal lover and enjoy volunteering at shelters.', image: 'https://kpopping.com/documents/80/3/1200/231115-New-Jeans-Minji-at-2023-League-of-Legends-World-Championship-Final-Media-Day-documents-1.jpeg?v=8d7d7' },
    { id: 17, name: 'Matthew', age: 27, horoscope: 'Taurus', gender: 'Male', bio: 'I\'m a gamer and love playing video games.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Irene_Bae_at_GMP-KIX_Airport_on_January_22%2C_2020.png/640px-Irene_Bae_at_GMP-KIX_Airport_on_January_22%2C_2020.png' },
    { id: 18, name: 'Amelia', age: 29, horoscope: 'Gemini', gender: 'Female', bio: 'I\'m a music junkie and love going to concerts.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0cUi6__-ymRw0gbxKt3MxG_zPkLV4cbUnQoNwADeAA&s' },
    { id: 19, name: 'David', age: 28, horoscope: 'Cancer', gender: 'Male', bio: 'I\'m a coffee connoisseur and enjoy trying different blends.', image: 'https://i.pinimg.com/736x/5f/fe/65/5ffe6504564c7bcf82340f268048290a.jpg' },
    { id: 20, name: 'Ella', age: 26, horoscope: 'Virgo', gender: 'Female', bio: 'I\'m a beach lover and enjoy surfing and snorkeling.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/20230918_Momo_Hirai_%E5%B9%B3%E4%BA%95_%E3%82%82%E3%82%82_2023_09.jpg/800px-20230918_Momo_Hirai_%E5%B9%B3%E4%BA%95_%E3%82%82%E3%82%82_2023_09.jpg' },
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
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {modalContent}
                    </div>
                </div>
            )}
            <h1>
                Dating App
            </h1>
            <div className="add-profile">
                <input
                    type="text"
                    placeholder="Name"
                    value={newProfile.name}
                    onChange={(e) => setNewProfile({...newProfile, name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={newProfile.age}
                    onChange={(e) => setNewProfile({...newProfile, age: e.target.value})}
                />
                <select value={newProfile.horoscope}
                        onChange={(e) => setNewProfile({...newProfile, horoscope: e.target.value})}>
                    {horoscopeSigns.map(sign => (
                        <option key={sign} value={sign}>{sign}</option>
                    ))}
                </select>
                <select value={newProfile.gender}
                        onChange={(e) => setNewProfile({...newProfile, gender: e.target.value})}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    type="text"
                    placeholder="Bio"
                    value={newProfile.bio}
                    onChange={(e) => setNewProfile({...newProfile, bio: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProfile.image}
                    onChange={(e) => setNewProfile({...newProfile, image: e.target.value})}
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
                    <div key={profile.id}
                         className={`profile-card ${clickedProfiles.some(p => p.id === profile.id) ? 'glow' : ''}`}
                         onClick={() => handleProfileClick(profile.id)}>
                        <img className='img' src={profile.image} alt={profile.name}/>
                        <h2>{profile.name}</h2>
                        <p>Age: {profile.age}</p>
                        <p>Horoscope: {profile.horoscope}</p>
                        <p>Gender: {profile.gender}</p>
                        <p>Bio: {profile.bio}</p>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            deleteProfile(profile.id);
                        }}>Delete
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setEditProfileToEdit(profile.id);
                        }}>Edit
                        </button>
                    </div>
                ))}
            </div>

            {editProfile && (
                <div
                    className="edit-profile-backdrop"
                    onClick={() => setEditProfile(null)}
                >
                    <div
                        className="edit-profile-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            value={editProfile.name}
                            onChange={(e) =>
                                setEditProfile({...editProfile, name: e.target.value})
                            }
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            value={editProfile.age}
                            onChange={(e) =>
                                setEditProfile({...editProfile, age: e.target.value})
                            }
                        />
                        <select
                            value={editProfile.horoscope}
                            onChange={(e) =>
                                setEditProfile({...editProfile, horoscope: e.target.value})
                            }
                        >
                            {horoscopeSigns.map((sign) => (
                                <option key={sign} value={sign}>
                                    {sign}
                                </option>
                            ))}
                        </select>
                        <select
                            value={editProfile.gender}
                            onChange={(e) =>
                                setEditProfile({...editProfile, gender: e.target.value})
                            }
                        >
                            <option value="All">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Bio"
                            value={editProfile.bio}
                            onChange={(e) =>
                                setEditProfile({...editProfile, bio: e.target.value})
                            }
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={editProfile.image}
                            onChange={(e) =>
                                setEditProfile({...editProfile, image: e.target.value})
                            }
                        />
                        <button onClick={updateProfile}>Update Profile</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DatingApp;