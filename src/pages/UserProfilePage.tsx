import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"
import { useGetMyUser, useUpdateMyUser } from "@/api/MyuserApi"

const UserProfilePage = () => {
    const {updateUser, isLoading: isUpdateLoading}= useUpdateMyUser()
    const{currentUser,isLoading:isGetLoading} = useGetMyUser()
    if(isGetLoading) {
      return <span>Loading...</span>
    }
    if(!currentUser) {
      return <span>Unable to load user profile</span>
    }
  return (
    <div>
        <UserProfileForm currentUser= {currentUser} onSave={ updateUser} isLoading= {isUpdateLoading}/>
    </div>
  )
}

export default UserProfilePage