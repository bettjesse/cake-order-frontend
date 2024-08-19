import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormDescription,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(2,{ message: "Name is required", }),
  city: z.string().min(2, "City is required"),
  phoneNumber: z.string().min(2, "Phone number is required"),
  address: z.string().min(2, "Address is required")
});

type UserFormData = z.infer<typeof formSchema>;

type UserProfileFormProps = {
  currentUser:User
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ isLoading, onSave,currentUser }: UserProfileFormProps) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser
  });
  // if the component rerenders and the current user changes this will cause the reset function to be called which causes the form to re render based on the new data passed to the reset function
  useEffect(()=>{
    form.reset(currentUser)

  },[currentUser,form])
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4  rounded-lg md:p-10 bg-gray-50"
      >
        <div>
          <h2 className="text-2xl  font-bold">User profile form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className=" bg-white" />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field}  className=" bg-white" />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <div className=" flex flex-col md:flex-row gap-4">
          <FormField

            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className=" flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field}  className=" bg-white" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
              <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field}  className=" bg-white" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field}  className=" bg-white" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
      
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className=" bg-orange-500">
            {" "}
            submit{"  "}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
