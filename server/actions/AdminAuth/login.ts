import { User } from "utils/types";
import { sign } from "jsonwebtoken";
export const login = (userData: User) => {
  const secret = process.env.JWTSECRET as string;
  if (userData.username == null || userData.password == null)
    throw new Error("Cannot have empty parameters.");

  if (
    userData.username === (process.env.USERNAME as string) &&
    userData.password === (process.env.PASSWORD as string)
  ) {
    return sign(
      {
        role: "admin",
      },
      secret,
      {
        expiresIn: "7d",
      }
    );
  } else {
    throw new Error("Something went wrong with the login.");
  }

  
};
