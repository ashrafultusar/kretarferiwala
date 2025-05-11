// "use client";

// import { useActionState } from "react";
// import { useFormStatus } from "react-dom";
// import { login } from "./actions";


// export function LoginForm() {
//   const [state, loginAction] = useActionState(login, undefined);

//   return (
//     <form action={loginAction} className="flex max-w-[300px] flex-col gap-2 mt-56">
//       <div className="flex flex-col gap-2">
//         <input id="email" name="email" placeholder="Email" />
//       </div>
//       {state?.errors?.email && (
//         <p className="text-red-500">{state.errors.email}</p>
//       )}

//       <div className="flex flex-col gap-2">
//         <input
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Password"
//         />
//       </div>
//       {state?.errors?.password && (
//         <p className="text-red-500">{state.errors.password}</p>
//       )}
//       <SubmitButton />
//     </form>
//   );
// }

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button disabled={pending} type="submit">
//       Login
//     </button>
//   );
// }


"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={loginAction} className="flex w-full max-w-[300px] flex-col gap-2">
        <div className="flex flex-col gap-2">
          <input id="email" name="email" placeholder="Email" className="border px-2 py-1" />
        </div>
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}

        <div className="flex flex-col gap-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="border px-2 py-1"
          />
        </div>
        {state?.errors?.password && (
          <p className="text-red-500 text-sm">{state.errors.password}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white py-1 rounded disabled:opacity-50"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
