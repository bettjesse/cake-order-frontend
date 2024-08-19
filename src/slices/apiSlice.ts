import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "@/hooks/basequeryWithAuth";// Adjust the import path as necessary

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

export const createApiSlice = (token: string | null) => {
  return createApi({
    baseQuery: baseQueryWithAuth(token),
    endpoints: (builder) => ({
      createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
        query: (data) => ({
          url: '/api/my/user',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });
};
