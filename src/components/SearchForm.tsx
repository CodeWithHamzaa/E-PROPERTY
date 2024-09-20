"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Button } from "./ui/button";

function generatePrice(){
    let price = [];
    for (let i = 1; i < 6; i++) {
        price.push(i * 100);
    }
    return price;
}

type formValues = {
    address: string;
    categories: string;
    minPrice: string;
    maxPrice: string;
}

export function SearchForm() {

    const form = useForm<formValues>({
        defaultValues: {
            address: "",
        },
    });

    const prices = generatePrice();

    function formSubmitHandler(data: formValues) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form className="p-6 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded" onSubmit={form.handleSubmit(formSubmitHandler)}>
                <FormField
                    control={form.control} 
                    name="address" 
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Search by Address" {...field} />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control} 
                    name="categories"  
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>
                                    Categories
                                </FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="house">House</SelectItem>
                                        <SelectItem value="bungalow">Bungalow</SelectItem>
                                        <SelectItem value="office">Office</SelectItem>
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                        <SelectItem value="plots">Plots</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control} 
                    name="minPrice" 
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>
                                    Min. Price
                                </FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Min. Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {prices.map((price) => (
                                            <SelectItem key={price} value={price.toString()}>
                                                {price}
                                            </SelectItem>
                                        ))}
                                        
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control} 
                    name="maxPrice" 
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>
                                    Max. Price
                                </FormLabel>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Max. Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {prices.map((price) => (
                                            <SelectItem key={price} value={price.toString()}>
                                                {price}
                                            </SelectItem>
                                        ))}
                                        
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <Button className="col-start-[1] col-end-[-1]">Search</Button>

            </form>
        </Form>
    );
}