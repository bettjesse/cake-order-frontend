

import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFormContext, useFieldArray } from "react-hook-form";
import CakeItemInput from './CakeItemInput';

const CakeItemsForm = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "menuItems" });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Cake Items</h2>
        <FormDescription>
          Add the cakes you offer with size options and customizable toppings.
        </FormDescription>
        <FormField control = {control} name= "menuItems" render = {()=>(
                 <FormItem className=" flex flex-col gap-2">
                    {fields.map((_, index)=>(
                        <CakeItemInput key={index} index = {index} removeMenuItem = {()=> remove(index)}/>
                    ))}

            </FormItem>
            
            )}/>

     

        {/* Button to add a new cake item */}
        <Button className="my-3" type="button" onClick={() => append({ name: "", size:" ", price :""})}>
          Add Cake Item
        </Button>
      </div>
      
    </div>
  );
};

export default CakeItemsForm;
