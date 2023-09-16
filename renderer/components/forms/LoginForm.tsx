'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';

interface LoginFormProps {

}

const formSchema = z.object(
    {
      username : z.string().min(1, {message: "Please enter your ToolBox email/username"})  ,
      password : z.string().min(1, {message: "Please enter a valid password"}) 
    }
)

const LoginForm: React.FC<LoginFormProps> =({}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      });

      const isLoading = form.formState.isSubmitting
    
      const onSubmit = async (data : z.infer<typeof formSchema>) => {
      }

      const onForget = () => {
        if (isLoading){
            return 
        }
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

export default LoginForm;