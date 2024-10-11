import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className=" space-y-2">
      <div>
        <h2 className=" text-2xl font-bold">Details</h2>
        <FormDescription>Enter the details about your store</FormDescription>
      </div>
      <FormField
        control={control}
        name="storeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} className=" bg-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-2">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className=" bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Delivery Price (Ksh)</FormLabel>
              <FormControl>
                <Input {...field} className=" bg-white" placeholder="100" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
export default DetailsSection;
