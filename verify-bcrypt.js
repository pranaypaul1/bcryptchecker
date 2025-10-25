const bcrypt = require('bcryptjs');

// Your stored bcrypt hash
const hash = '$2b$10$jcrkg3ojDS/QtqbSG2qaKO9.ClV3G8B0RtM1YVW8xtShRN1ULghDa';

// The password you want to test
const candidatePassword = 'Owner&123'; // ← change this

async function verifyPassword() {
  try {
    const match = await bcrypt.compare(candidatePassword, hash);
    if (match) {
      console.log('✅ Password match!');
    } else {
      console.log('❌ Password does NOT match.');
    }
  } catch (err) {
    console.error('Error verifying password:', err);
  }
}

verifyPassword();
