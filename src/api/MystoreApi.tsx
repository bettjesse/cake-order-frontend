import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Store } from "@/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


export const useGetMyStore = () => {
  const { getAccessTokenSilently } = useAuth0()

  const getMystoreRequest = async ():Promise <Store> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${accessToken}`
      }



    }

    )
if(!response.ok) {
  throw new Error("Failed to get store");
}
 return response.json()
 
  }
const {data:store, isLoading}= useQuery( "fetchMyStore", getMystoreRequest)

return  {store, isLoading}
}
export const useCreateMyStore = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyStoreRequest = async (
    restaurantFormData: FormData
  ): Promise<Store> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyStoreRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { createRestaurant, isLoading };
};


export const useUpdateMyStore = ()=> {

  const{getAccessTokenSilently}= useAuth0()
  const updateMyStoreRequest = async(StoreFormData: FormData): Promise<Store>=> {
    const accessToken=  await getAccessTokenSilently()
    const response = await fetch (`${API_BASE_URL}/api/my/store`,
      {
        method: "PUT",
        headers :{
          Authorization : `Bearer ${accessToken}`
        },
        body: StoreFormData
      }

    )
    if(!response.ok) {
      throw new Error("Failed to update Restaurant ")
    }
    return response.json()
  }
  const {mutate: updateStore, isLoading,isSuccess, error} = useMutation( updateMyStoreRequest)

  if(isSuccess) {
    toast.success("Restaurant updated succesfully ")
  }
   
  if (error){
    toast.error("Failed to update restaurant")
  }
  return { updateStore , isLoading}
}