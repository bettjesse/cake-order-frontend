import ManageStoreForm from "@/forms/my-store-form/ManageStoreForm"
import { useCreateMyStore, useGetMyStore } from "@/api/MystoreApi"
import { useUpdateMyStore } from "@/api/MystoreApi"

const ManageStorePage = () => {
  const{createRestaurant, isLoading: isCreateLoading} = useCreateMyStore()
  const {isLoading: isUpdateLoading, updateStore}= useUpdateMyStore()
  const {store}= useGetMyStore()
  const isEditing = !!store
  return (

   <ManageStoreForm 
   store= {store} onSave={ isEditing ? updateStore : createRestaurant}
    isLoading= {isCreateLoading || isUpdateLoading }
     />
  )
}

export default ManageStorePage 