// "use server";

// import { z } from "zod";

// import { redirect } from "next/navigation";
// import { createSession, deleteSession } from "@/lib/session";

// // const testUser = {
// //   id: "1",
// //   email: "contact@cosdensolutions.io",
// //   password: "12345678",
// // };


// const testUser = {
//     id: process.env.TEST_USER_ID!,
//     email: process.env.TEST_USER_EMAIL!,
//     password: process.env.TEST_USER_PASSWORD!,
//   };
  

// const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }).trim(),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters" })
//     .trim(),
// });

// export async function login(prevState: any, formData: FormData) {
//   const result = loginSchema.safeParse(Object.fromEntries(formData));

//   if (!result.success) {
//     return {
//       errors: result.error.flatten().fieldErrors,
//     };
//   }

//   const { email, password } = result.data;

//   if (email !== testUser.email || password !== testUser.password) {
//     return {
//       errors: {
//         email: ["Invalid email or password"],
//       },
//     };
//   }

//   await createSession(testUser.id);

//   redirect("/admin");
// }

// export async function logout() {
//   await deleteSession();
//   redirect("/login");
// }



"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

// Use environment variables for test credentials
const testUser = {
  id: process.env.TEST_USER_ID!,
  email: process.env.TEST_USER_EMAIL!,
  password: process.env.TEST_USER_PASSWORD!,
};

// Define the schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

// Define form state type
type LoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
};

// Login action
export async function login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState | void> {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id);
  redirect("/admin");
}

// Logout action
export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/login");
}
