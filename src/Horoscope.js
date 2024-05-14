import React, { useState } from 'react';
import './Horoscope.css'; // Import CSS file

const zodiacSigns = [
  { sign: 'Aries', dates: 'March 21 - April 19', description: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate.', color: '#FF5733', },
  { sign: 'Taurus', dates: 'April 20 - May 20', description: 'Reliable, patient, practical, devoted, responsible, stable.', color: '#D4AC0D' },
  { sign: 'Gemini', dates: 'May 21 - June 20', description: 'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.', color: '#A569BD' },
  { sign: 'Cancer', dates: 'June 21 - July 22', description: 'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive.', color: '#5DADE2' },
  { sign: 'Leo', dates: 'July 23 - August 22', description: 'Creative, passionate, generous, warm-hearted, cheerful, humorous.', color: '#F39C12' },
  { sign: 'Virgo', dates: 'August 23 - September 22', description: 'Loyal, analytical, kind, hardworking, practical.', color: '#27AE60' },
  { sign: 'Libra', dates: 'September 23 - October 22', description: 'Cooperative, diplomatic, gracious, fair-minded, social.', color: '#85C1E9' },
  { sign: 'Scorpio', dates: 'October 23 - November 21', description: 'Resourceful, brave, passionate, stubborn, a true friend.', color: '#C0392B' },
  { sign: 'Sagittarius', dates: 'November 22 - December 21', description: 'Generous, idealistic, great sense of humor.', color: '#E59866' },
  { sign: 'Capricorn', dates: 'December 22 - January 19', description: 'Responsible, disciplined, self-control, good managers.', color: '#7DCEA0' },
  { sign: 'Aquarius', dates: 'January 20 - February 18', description: 'Progressive, original, independent, humanitarian.', color: '#3498DB' },
  { sign: 'Pisces', dates: 'February 19 - March 20', description: 'Compassionate, artistic, intuitive, gentle, wise, musical.', color: '#5D6D7E' }
];

const calculateZodiacSign = (date) => {
  const month = date.getMonth() + 1; // getMonth() is zero-based
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

  return 'Invalid date';
};

function Horoscope() {
  const [birthDate, setBirthDate] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date(birthDate);
    const sign = calculateZodiacSign(date);
    setZodiacSign(sign);
  };

  return (
    <div className="dating-app">

      <h1>Dating App</h1>
  
      <form onSubmit={handleSubmit} className="date-form">
        <label>
          Enter your birth date:
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Find My Zodiac Sign</button>
      </form>

      {zodiacSign && <p>Your Zodiac Sign is: {zodiacSign}</p>}

      <div className="profile-container">
        {zodiacSigns.map((sign, index) => (
          <div key={index} className={`profile-card ${sign.sign.toLowerCase()}`}>
            <h2>{sign.sign}</h2>
            <p>{sign.dates}</p>
            <p>{sign.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horoscope;