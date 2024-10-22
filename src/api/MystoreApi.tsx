import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { Store } from "@/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
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
    } = useMutation( createMyStoreRequest);
  
    if (isSuccess) {
      toast.success("Restaurant created!");
    }
  
    if (error) {
      toast.error("Unable to update restaurant");
    }
  
    return { createRestaurant, isLoading };
  };
  