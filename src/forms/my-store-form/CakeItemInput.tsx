import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useFieldArray, useFormContext } from 'react-hook-form';
import CakeImage from './CakeImage';

interface CakeItemInputProps {
  index: number;
  removeMenuItem: () => void;
}

const CakeItemInput = ({ index, removeMenuItem }: CakeItemInputProps) => {
  const { control } = useFormContext();
  const { fields: sizeFields, append: appendSize, remove: removeSize } = useFieldArray({
    control,
    name: `cakeItems.${index}.sizeOptions`
  });
  const { fields: toppingFields, append: appendTopping, remove: removeTopping } = useFieldArray({
    control,
    name: `cakeItems.${index}.toppings`
  });

  return (
    <div className='space-y-4 border p-4 rounded-md'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Cake Item {index + 1}</h3>
        <Button variant="destructive" type="button" onClick={removeMenuItem}>
          Remove Cake
        </Button>
      </div>

      {/* Cake name input */}
      <FormField
        control={control}
        name={`cakeItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Chocolate Cake" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Size options - dynamically generated fields */}
      <div className='space-y-2'>
        <h4 className="text-md font-semibold">Size Options</h4>

        {sizeFields.map((_, sizeIndex) => (
          <div key={sizeIndex} className="flex gap-4 items-end">
            {/* Size input */}
            <FormField
              control={control}
              name={`cakeItems.${index}.sizeOptions.${sizeIndex}.size`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1Kg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price input for each size */}
            <FormField
              control={control}
              name={`cakeItems.${index}.sizeOptions.${sizeIndex}.price`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to remove size option */}
            <Button variant="destructive" type="button" onClick={() => removeSize(sizeIndex)}>
              Remove Size
            </Button>
          </div>
        ))}

        {/* Button to add new size */}
        <Button className='space-y-2' type="button" onClick={() => appendSize({ size: '', price: '' })}>
          Add Size
        </Button>
      </div>

      {/* Toppings options */}
      <div className='space-y-2'>
        <h4 className="text-md font-semibold">Toppings</h4>

        {toppingFields.map((_, toppingIndex) => (
          <div key={toppingIndex} className="flex gap-4 items-end">
            {/* Topping name input */}
            <FormField
              control={control}
              name={`cakeItems.${index}.toppings.${toppingIndex}.toppingName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topping</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Chocolate Chips" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price input for each topping */}
            <FormField
              control={control}
              name={`cakeItems.${index}.toppings.${toppingIndex}.price`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to remove topping option */}
            <Button variant="destructive" type="button" onClick={() => removeTopping(toppingIndex)}>
              Remove Topping
            </Button>
          </div>
        ))}

        {/* Button to add new topping */}
        <Button type="button" onClick={() => appendTopping({ toppingName: '', price: '' })}>
          Add Topping
        </Button>
      </div>
      <CakeImage index = {index}/>
    </div>
  );
};

export default CakeItemInput;
