import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const StoreImageSection = () => {
    const { control } = useFormContext();
    return (
        <div className=" space-y-2">
            <h2 className=" font-bold text-2xl">Image</h2>
            <FormDescription>
                Add an Image that will be displayed on your store listing in the search
                results
            </FormDescription>

            <div className=" flex flex-col gap-8 w-[50%]">
                <FormField
                    control={control}
                    name="imageFile"
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

export default StoreImageSection;
