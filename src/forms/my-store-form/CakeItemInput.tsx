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
          <div key={sizeIndex} className="flex flex-col sm:flex-row gap-4 sm:items-end w-full">
            {/* Size input */}
            <FormField
              control={control}
              name={`cakeItems.${index}.sizeOptions.${sizeIndex}.size`}
              render={({ field }) => (
                <FormItem className="w-full sm:w-1/3">
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
                <FormItem className="w-full sm:w-1/3">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="200" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button to remove size option */}
            <Button
              variant="destructive"
              type="button"
              onClick={() => removeSize(sizeIndex)}
              className="w-full sm:w-auto"
            >
              Remove Size
            </Button>
          </div>
        ))}

        {/* Button to add new size */}
        <Button className='w-full sm:w-auto mt-2' type="button" onClick={() => appendSize({ size: '', price: '' })}>
          Add Size
        </Button>
      </div>

      {/* Cake Image component */}
      <CakeImage index={index} />
    </div>
  );
};

export default CakeItemInput;
