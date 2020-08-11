import * as React from "react";
import axios from "axios";

type SuccessLoginPayload = {
  token: string;
};

type Action = { type: "login"; payload: SuccessLoginPayload };

type Dispatch = (action: Action) => void;
type State = { token: string };
type UserProviderProps = { children: React.ReactNode };

type CredentialsPayload = {
  email: string;
  password: string;
};
const UserStateContext = React.createContext<State | undefined>(undefined);
const UserDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function userReducer(state: State, action: Action) {
  switch (action.type) {
    case "login": {
      return { token: action.payload.token };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, { token: "" });
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

async function loginUser(dispatch: Dispatch, credentials: CredentialsPayload) {
  try {
    const user = await axios.post("https://server.global/login", credentials);
    dispatch({ type: "login", payload: user.data });
  } catch (error) {}
}

export { UserProvider, useUserState, useUserDispatch, loginUser };
