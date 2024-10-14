import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CakeType from "./CakeType";
import CakeItemsForm from "./CakeItemsForm";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import StoreImageSection from "./StoreImageSection";


const formSchema = z.object({
    storeName: z.string({
      required_error: "Store name is required",
    }),
    city: z.string({
      required_error: "City name is required",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "Delivery price is required",
      invalid_type_error: "Must be a valid number",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "Estimated delivery time is required",
      invalid_type_error: "Must be a valid number",
    }),
    cakeTypes: z.array(z.string()).nonempty({
      message: "Please select at least 1 item",
    }),
    cakeItems: z.array(
      z.object({
        name: z.string().min(1, "Name is required"),
        sizeOptions: z.array(
          z.object({
            size: z.string().min(1, "Size is required"),
            price: z.coerce.number().min(1, "Price is required"),
          })
        ),
        toppings: z.array(
          z.object({
            toppingName: z.string().min(1, "Topping name is required"),
            price: z.coerce.number().min(1, "Topping price is required"),
          })
        ),
        imageUrl: z.instanceof(File, { message: " Cake image is required" }),
      })
    ),
    imageFile: z.instanceof(File, { message: "Image is required" }),
  });
  
 
  
type storeFormData = z.infer<typeof formSchema>
interface ManageStoreFormProps  {
    onSave : (storeFormData: FormData)=> void
    isLoading: boolean

}
const ManageStoreForm = ({onSave, isLoading}:ManageStoreFormProps)=> {
    const form = useForm<storeFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        
          cakeTypes: [],
          cakeItems: [
            {
              name: "",
              sizeOptions: [{ size: "", price: 0 }], // Default size option
              toppings: [{ toppingName: "", price: 0 }], // Default topping option
             
            },
          ],
        
        },
      });
    const onSubmit = (formDataJson : storeFormData)=>{

    }
return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-lg bg-gray-50 p-10">
           <DetailsSection/>
           <Separator/>
           <CakeType/>
           <Separator/>
           <CakeItemsForm/>
           <Separator/>
           <StoreImageSection/>
           {isLoading ? <LoadingButton/> : <Button type = "submit" > Submit</Button>}
        </form>

    </Form>
)
}
export default ManageStoreForm