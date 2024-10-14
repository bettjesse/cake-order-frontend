

import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFormContext, useFieldArray } from "react-hook-form";
import CakeItemInput from './CakeItemInput';
import CakeImage from "./CakeImage";

const CakeItemsForm = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "cakeItems" });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Cake Items</h2>
        <FormDescription>
          Add the cakes you offer with size options and customizable toppings.
        </FormDescription>
        <FormField control = {control} name= "cakeItems" render = {()=>(
                 <FormItem className=" flex flex-col gap-2">
                    {fields.map((_, index)=>(
                        <CakeItemInput index = {index} removeMenuItem = {()=> remove(index)}/>
                    ))}

            </FormItem>
            
            )}/>

     

        {/* Button to add a new cake item */}
        <Button type="button" onClick={() => append({ name: '', sizeOptions: [{ size: '', price: '' }], toppings: [] })}>
          Add Cake Item
        </Button>
      </div>
      
    </div>
  );
};

export default CakeItemsForm;
