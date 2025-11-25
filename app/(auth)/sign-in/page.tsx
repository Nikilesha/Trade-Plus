'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/inputField";
import FooterLink from "@/components/forms/FooterLink";

type SignUpFormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
};

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            password: '',
        },
        mode: 'onBlur',
    });




    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your name"
                    register={register}
                    error={errors.fullName}
                    validation={{
                        required: 'Please give your full name',
                        minLength: { value: 5, message: 'Full name must be at least 5 characters' }
                    }}
                />



                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password must be at least 8 characters' }
                    }}
                />


                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating account' : 'Sign in'}
                </Button>

                <FooterLink text="Don't have an account" linkText="Sign Up" href="/sign-up"/>
            </form>
        </>
    )
}

export default SignInPage;
