import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = process.env.JWT_SECRET || 'your_default_secret'; // Use a strong secret in .env
const SALT_ROUNDS = 10;

// Define the expected JWT payload structure
interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

// 🔐 Sign JWT Token
export const signToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
};

// 🔍 Verify JWT Token
export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, SECRET) as TokenPayload;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};

// 🔑 Hash Password
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

// 🔄 Compare Password
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
