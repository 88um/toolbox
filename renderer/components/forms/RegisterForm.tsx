'use client';
const shell = require('electron').shell;
import { zodResolver } from '@hookform/resolvers/zod';
import { KeyRound, Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface RegisterFormProps {

}
const formSchema = z
  .object({
    name: z.string().min(4, { message: "Please enter your full name." }),
    username: z.string().min(3, { message: "Username must be minimum 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email." }).min(1),
    terms: z.boolean().refine(value => value === true, {
        message: "Please agree to all terms.",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(50, { message: "Password must be less than 50 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(50, { message: "Password must be less than 50 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username : "",
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        },
      });

      const isLoading = form.formState.isSubmitting
    
      const onSubmit = async (data : z.infer<typeof formSchema>) => {
      }
  return (
    <div>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
            <FormField
            name = "email"
            control={form.control}
            render = {({field}) =>(
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300 focus-within:border-2'>
                            <Mail/>
                            <Input {...field} placeholder="Email" className='border-none' type='email'/>
                        </div>
                        
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name = "username"
            control={form.control}
            render = {({field}) =>(
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300 focus-within:border-2'>
                            <User/>
                            <Input {...field} placeholder="Username" className='border-none'/>
                        </div>
                        
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name = "password"
            control={form.control}
            render = {({field}) =>(
                <FormItem>
                    <FormLabel> Password</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300 focus-within:border-2'>
                        <Lock/>
                        <Input {...field} placeholder="Password" className='border-none ' type='password'/>
                        </div>
                        
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            name = "confirmPassword"
            control={form.control}
            render = {({field}) =>(
                <FormItem>
                    <FormLabel> Confirm Password</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300 focus-within:border-2'>
                        <KeyRound/>
                        <Input {...field} placeholder="Confirm Password" className='border-none ' type='password'/>
                        </div>
                        
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <div className="flex items-start space-x-3 pl-2 pt-2">
                      <Checkbox
                      
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <p className="text-xs text-gray-500 cursor-pointer">
                        I agree to all <span className='underline' onClick ={() => shell.openExternal('https://google.com')}>Terms &amp; Conditions</span>
                      </p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='col-span-2 mt-3'>
                <Button className='w-full rounded py-3' type='submit' disabled={isLoading}>
                    <div className='font-medium'>
                        Register
                    </div>
                </Button>
            </div>
        </form>
    </Form>
    <div>
       
        <div className=" flex justify-center  text-xs  mt-5  px-2  text-gray-500 ">
          <div>
            Already have an account?{" "}
            <span className="underline cursor-pointer">
              {" "}
              <Link href={'/login'}>
              Login
              </Link>
            </span>
          </div>
        </div>
      </div>
</div>
  );
};

export default RegisterForm;