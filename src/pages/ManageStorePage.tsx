import ManageStoreForm from "@/forms/my-store-form/ManageStoreForm"
import { useCreateMyStore } from "@/api/MystoreApi"

const ManageStorePage = () => {
  const{createRestaurant, isLoading} = useCreateMyStore()
  return (
   <ManageStoreForm onSave={createRestaurant} isLoading= {isLoading} />
  )
}

export default ManageStorePage 