// import { apiSlice } from "./apiSlice";
// import { useAuth0 } from '@auth0/auth0-react';

// type CreateUserRequest ={
//     auth0Id: string
//     email: string
// }
// type CreateUserResponse = {
//     auth0Id: string;
//     email: string;
    
//     name?: string; 
//     phoneNumber?: string;
//     address?: string;
//     city?: string;
//     country?: string;
// }


// const myUserApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder)=>({
//   createUser: builder.mutation< CreateUserResponse,CreateUserRequest>({

//     query:(data,  headers)=>({
//         url: '/api/my/user', 
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//         },
//           body: data,
        
//     })
//   })
//     })
// })

// export const { useCreateUserMutation}= myUserApiSlice

// Import necessary dependencies
import { apiSlice } from "./apiSlice";
import { useAuth0 } from '@auth0/auth0-react';

// Define types for the request and response
type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

type CreateUserResponse = {
  auth0Id: string;
  email: string;
  name?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
};



// Create API slice
const myUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
      query: (data) => ({
        url: '/api/my/user',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

// Export the generated hooks
export const { useCreateUserMutation } = myUserApiSlice;

