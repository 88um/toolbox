'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col space-y-5">
            <FormField
            name = "username"
            control={form.control}
            render = {({field}) =>(
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300 focus-within:border-2'>
                            <Mail/>
                            <Input {...field} placeholder="Email/Username" className='border-none'/>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <div className='flex items-center px-2 border rounded focus-within:border-blue-300'>
                        <Lock/>
                        <Input {...field} placeholder="Password" className='border-none focus-within:border-2' type='password'/>
                        </div>
                        
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <div className=''>
                <p className='pb-3 text-xs text-gray-500 underline cursor-pointer' onClick={onForget} >
                    Forgot Password?
                </p>
                <Button className='w-full rounded py-3' type='submit' disabled={isLoading}>
                    <div className='font-medium'>
                        Login
                    </div>
                </Button>
            </div>
        </form>
    </Form>
    <div>
        <div className=" flex justify-center  text-xs  mt-5  px-2  text-gray-500 ">
          <div>
            New to ToolBox?{" "}
            <span className="underline cursor-pointer">
              {" "}
              <Link href={'/register'}>
              Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>
</div>
  );
};

export default RegisterForm;