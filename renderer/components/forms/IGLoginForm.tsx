'use client';
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Account } from "../../types";
import { useForm } from 'react-hook-form';
import { useToast } from '../ui/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface IGLoginFormProps {
}

const formSchema = z.object({
    username: z.string().min(1, {message: 'Please enter your instagram username'}),
    password: z.string().min(1, {message: 'Please enter your instagram password'}),
    two_fac: z.string().optional(),
    security_code: z.string().optional(),
})

const IGLoginForm: React.FC<IGLoginFormProps> = ({}) => {
    
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues:{
                username: "",
                password: "",
                two_fac: "",
                security_code: "",
            }
        }
    )

    const isLoading = form.formState.isSubmitting
    const needsCode = false
    const onSubmit = (values : z.infer<typeof formSchema>) => {
    }

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                <FormField
                name='username'
                control={form.control}
                render= {({field}) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Username" disabled={needsCode}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                name='password'
                control={form.control}
                render= {({field}) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Password" disabled={needsCode}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                name='two_fac'
                control={form.control}
                render= {({field}) => (
                    <FormItem>
                        <FormLabel>{'2FAC Code (Optional)'}</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="6 Digit Two Factor" disabled={needsCode}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                {needsCode && (
                    <FormField
                name='security_code'
                control={form.control}
                render= {({field}) => (
                    <FormItem>
                        <FormLabel>Security Code</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="6 Digit Code" />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                )}
                <div className='pt-4'>
                    <Button className='w-full rounded bg-black/80 hover:bg-black/70' type='submit' disabled={isLoading}>
                        Login
                    </Button>
                </div>
            </form>

        </Form>

    </div>
  );
};

export default IGLoginForm;