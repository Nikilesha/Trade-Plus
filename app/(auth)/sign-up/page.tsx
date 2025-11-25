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

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: 'US',

        },
        mode: 'onBlur',
    });


    const password = watch('password');

    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your name"
                    register={register}
                    error={errors.fullName}
                    validation={{
                        required: 'Please give your full name',
                        minLength: { value: 20, message: 'Full name must be at least 20 characters' }
                    }}
                />

                <InputField
                    name="email"
                    label="Email"
                    placeholder="Enter email"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email is required',
                        pattern: { value: /^\w+@\w+\.\w+$/, message: "Invalid email" }
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

                {/* Confirm Password*/}
                <InputField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Re-enter password"
                    type="password"
                    register={register}
                    error={errors.confirmPassword}
                    validation={{
                        required: 'Confirm password is required',
                        validate: (value: string) =>
                            value === password || "Passwords do not match"
                    }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating account' : 'Start Investing Now'}
                </Button>

                <FooterLink text="Already have an account" linkText="Sign in" href="/sign-in"/>
            </form>
        </>
    )
}

export default SignUpPage;
