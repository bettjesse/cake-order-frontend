import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { useCallback } from "react";
interface CakeTypeCheckBokType {
  cakeType: string;
  field: ControllerRenderProps<FieldValues, "cakeTypes">;
}

const CakeTypeCheckBox = ({ cakeType, field }: CakeTypeCheckBokType) => {
    // Memoize the onCheckedChange function to avoid unnecessary re-creation
    const handleCheckedChange = useCallback(
      (checked: boolean) => {
        if (checked) {
          // Add the cake type if it's checked and not already in the list
          field.onChange([...(field.value || []), cakeType]);
        } else {
          // Remove the cake type if it's unchecked
          field.onChange((field.value || []).filter((value: string) => value !== cakeType));
        }
      },
      [field, cakeType] // Dependencies: only change when field or cakeType changes
    );
  

  return (
    <FormItem className="fex fex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white "
          checked={(field.value || []).includes(cakeType)} 
          onCheckedChange={handleCheckedChange}
        />
      </FormControl>
      <FormLabel className= "text-sm font-normal"> {cakeType}</FormLabel>
    </FormItem>
  );
};

export default CakeTypeCheckBox;
