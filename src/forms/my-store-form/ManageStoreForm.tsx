// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Form } from "@/components/ui/form";
// import DetailsSection from "./DetailsSection";
// import { Separator } from "@/components/ui/separator";
// import CakeType from "./CakeType";
// import CakeItemsForm from "./CakeItemsForm";
// import LoadingButton from "@/components/LoadingButton";
// import { Button } from "@/components/ui/button";
// import StoreImageSection from "./StoreImageSection";
// import { Store } from "@/types";
// import { useEffect } from "react";

// const formSchema = z.object({
//   storeName: z.string({
//     required_error: "Store name is required",
//   }),
//   city: z.string({
//     required_error: "City name is required",
//   }),
//   deliveryPrice: z.coerce.number({
//     required_error: "Delivery price is required",
//     invalid_type_error: "Must be a valid number",
//   }),
//   estimatedDeliveryTime: z.coerce.number({
//     required_error: "Estimated delivery time is required",
//     invalid_type_error: "Must be a valid number",
//   }),
//   cakeTypes: z.array(z.string()).nonempty({
//     message: "Please select at least 1 item",
//   }),
//   menuItems: z.array(
//     z.object({
//       name: z.string().min(1, "Name is required"),
//       size: z.string().min(1, "Size is required"),
//       price: z.coerce.number().min(1, "Price is required"),
//     })
//   ),
//   imageFile: z.instanceof(File, { message: "Image is required" }),
// });

// type StoreFormData = z.infer<typeof formSchema>;

// interface ManageStoreFormProps {
//   onSave: (formData: FormData) => void;
//   isLoading: boolean;
//   store? : Store
// }

// const ManageStoreForm = ({ onSave, isLoading, store }: ManageStoreFormProps) => {
//   const form = useForm<StoreFormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
      
//       cakeTypes: [],  // Default value for cakeTypes
//       menuItems: [
//         {
//           name: "", // Default value for menu item name
//           size: "", // Default value for menu item size
//           price: 0, // Default value for menu item price
//         },
//       ],
      
//     },
//   });

//   useEffect(()=>{
// if(!store)
//   return
//   },[])
//   // Convert form data into FormData and append necessary fields
//   const onSubmit = (formDataJson: StoreFormData) => {
//     console.log("Form submitted with data:", formDataJson);
//     const formData = new FormData();
//     // Append each field to FormData
//     formData.append("storeName", formDataJson.storeName);
//     formData.append("city", formDataJson.city);
//     formData.append("deliveryPrice", (formDataJson.deliveryPrice).toString());

//     formData.append(
//       "estimatedDeliveryTime",
//       (formDataJson.estimatedDeliveryTime).toString()
//     );
    
//     // Append each cake type
//     formDataJson.cakeTypes.forEach((cakeType, index) => {
//       formData.append(`cakeTypes[${index}]`, cakeType);
//   });
  
//     // Append menu items
//     formDataJson.menuItems.forEach((item, index) => {
//       formData.append(`menuItems[${index}][name]`, item.name);
//       formData.append(`menuItems[${index}][size]`, item.size);
//       formData.append(`menuItems[${index}][price]`, item.price.toString())
//     });

//     // Append image file
//     formData.append("imageFile", formDataJson.imageFile);


//     console.log("Submitting FormData:", formData);
//     // Call the onSave function with the FormData
//     onSave(formData);
//   };

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-8 rounded-lg bg-gray-50 p-10"
//       >
//         <DetailsSection />
//         <Separator />
//         <CakeType />
//         <Separator />
//         <CakeItemsForm />
//         <Separator />
//         <StoreImageSection />
//         {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
//       </form>
//     </Form>
//   );
// };

// export default ManageStoreForm;

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
import { Store } from "@/types";
import { useEffect } from "react";

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
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      size: z.string().min(1, "Size is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  storeImageUrl :z.string().optional(),
  imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
}).refine((data)=> data.imageFile || data.storeImageUrl, {message: "either ImageUrl or ImageFile must be provided" , path:["imagFile"]  } );

type StoreFormData = z.infer<typeof formSchema>;

interface ManageStoreFormProps {
  onSave: (formData: FormData) => void;
  isLoading: boolean;
  store?: Store;
}

const ManageStoreForm = ({ onSave, isLoading, store }: ManageStoreFormProps) => {
  const form = useForm<StoreFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cakeTypes: [],
      menuItems: [
        {
          name: "",
          size: "",
          price: 0,
        },
      ],
    },
  });

  useEffect(() => {
  if(!store)
    {return} 
 // price lowest domination of 100 = 100pence == 1GBP
 const deliveryPriceFormatted = parseInt(
  (store.deliveryPrice / 100).toFixed(2)
);

const menuItemsFormatted = store.menuItems.map((item) => ({
  ...item,
  price: parseInt((item.price / 100).toFixed(2)),
}));

const updatedStore = {
  ...store,
  deliveryPrice: deliveryPriceFormatted,
  menuItems: menuItemsFormatted,
};
    form.reset(updatedStore)
     
    
  }, [store, form]);
  const onSubmit = (formDataJson: StoreFormData) => {
    console.log("Form submitted with data:", formDataJson);
    const formData = new FormData();

    formData.append("storeName", formDataJson.storeName);
    formData.append("city", formDataJson.city);
    formData.append("deliveryPrice", (formDataJson.deliveryPrice* 100).toString());
    formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());

    formDataJson.cakeTypes.forEach((cakeType, index) => {
      formData.append(`cakeTypes[${index}]`, cakeType);
    });

    formDataJson.menuItems.forEach((item, index) => {
      formData.append(`menuItems[${index}][name]`, item.name);
      formData.append(`menuItems[${index}][size]`, item.size);
      formData.append(`menuItems[${index}][price]`, (item.price * 100).toString());
    });
if(formDataJson.imageFile){
  formData.append("imageFile", formDataJson.imageFile);
}
  
    console.log("Submitting FormData:", formData);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-lg bg-gray-50 p-10"
      >
        <DetailsSection />
        <Separator />
        <CakeType />
        <Separator />
        <CakeItemsForm />
        <Separator />
        <StoreImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageStoreForm;
