// import jwt, { JwtPayload } from "jsonwebtoken";
// import { cookies } from "next/headers";

// interface User {
//   id: string;
//   email: string;
//   name: string;
//   role?: string;
// }

// export async function verifyUser(): Promise<User | null> {
//   try {
//     const token = (await cookies()).get("token")?.value; // Get token from cookies
//     if (!token) return null;

//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
//     return decoded as User;
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error) {
//     return null;
//   }
// }

// export async function loginUser(email: string, password: string): Promise<User> {
//   // Simulate a login API call (replace this with your actual logic)
//   if (email === "user@example.com" && password === "password") {
//     const user: User = {
//       id: "1",
//       email: "user@example.com",
//       name: "John Doe",
//       role: "user",
//     };

//     // Create a token and set it in cookies (you may need to adjust this logic)
//     const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1h" });
//     (await cookies()).set("token", token);

//     return user;
//   } else {
//     throw new Error("Invalid email or password");
//   }
// }

interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export async function verifyUser(): Promise<User | null> {
  // Implement your verification logic here if needed
  // You may need to handle token verification differently
  return null; // Placeholder, update this as needed
}
