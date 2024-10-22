import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cakeTypes } from "@/config/cake-types";
import { useFormContext } from "react-hook-form";
import CakeTypeCheckBox from "./CakeTypeCheckBox";

const CakeType = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cake Flavours/Types</h2>
        <FormDescription>
          Select the Flavours that your store sells
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cakeTypes"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cakeTypes.map((cakeType) => (
                <CakeTypeCheckBox key={cakeType} cakeType={cakeType} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CakeType;
