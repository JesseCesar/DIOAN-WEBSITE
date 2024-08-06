import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.cookie('jwt', token, {
    httpOnly: true, // Prevents client JS from reading the cookie and protects against XSS attacks
    maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expires in 15 days
    sameSite: "strict", // Cookie is sent only to the same site as the one that originated the request
    secure: process.env.NODE_ENV !== 'development', // Cookie is sent only over HTTPS
  });
}


export default generateTokenAndSetCookie;

