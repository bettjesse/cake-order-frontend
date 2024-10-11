import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import DetailsSection from "./DetailsSection";


const formSchema = z.object({
    storeName: z.string({
        required_error: "strore name is required"
        
    }),
    city: z.string({
        required_error: "city name is required"

    }),
    deliveryPrice: z.coerce.number({
        required_error: "delivery price is required",
        invalid_type_error: "must be a valid number"

    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number"

    }),
    cuisines: z.array(z.string()).nonempty({
        message: "Please select atleast 1 item"
    }),
    menuItems: z.array(z.object({

        name:z.string().min(1, "nameis required"),
        price : z.coerce.number().min(1, "price is required")
    })), 
    imageFile : z.instanceof(File, {message : "image is required"})



})
type storeFormData = z.infer<typeof formSchema>
interface ManageStoreFormProps  {
    onSave : (storeFormData: FormData)=> void
    isLoading: boolean

}
const ManageStoreForm = ({onSave, isLoading}:ManageStoreFormProps)=> {
    const form = useForm<storeFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines :[],
            menuItems: [{name: "", price: 0}]
        }
    })
    const onSubmit = (formDataJson : storeFormData)=>{

    }
return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-lg bg-gray-50 p-10">
           <DetailsSection/>
        </form>

    </Form>
)
}
export default ManageStoreForm