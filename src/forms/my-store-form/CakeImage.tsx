import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface CakeImageProps {
    index: number; // New prop for identifying the cake index
  }
  const CakeImage = ({ index }: CakeImageProps) => {
    const { control } = useFormContext();
    return (
        <div className=" space-y-2">
            <h2 className=" font-bold text-2xl"> Cake image</h2>
           

            <div className=" flex flex-col gap-8 w-[50%]">
                <FormField
                    control={control}
                    name={`cakeItems.${index}.imageUrl`} 
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="bg-white " 
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                onChange={(event)=>field.onChange( event.target.files ? event.target.files[0] : null  )}
                                
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default  CakeImage;
