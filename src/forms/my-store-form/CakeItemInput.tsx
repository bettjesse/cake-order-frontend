import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const CakeItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-2 w-full">
      {/* Name Field */}
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="w-full sm:w-auto">
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Vanilla"
                className="bg-white w-full"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Size Field */}
      <FormField
        control={control}
        name={`menuItems.${index}.size`}
        render={({ field }) => (
          <FormItem className="w-full sm:w-auto">
            <FormLabel className="flex items-center gap-1">
              Size <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="large" className="bg-white w-full" />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Price Field */}
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="w-full sm:w-auto">
            <FormLabel className="flex items-center gap-1">
              Price (Ksh) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="3000" className="bg-white w-full" />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Remove Button */}
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 mt-2 sm:mt-0 w-full sm:w-auto"
      >
        Remove
      </Button>
    </div>
  );
};

export default CakeItemInput;
