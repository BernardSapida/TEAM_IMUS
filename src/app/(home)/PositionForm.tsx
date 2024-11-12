"use client";

import { positions } from "@/config/positions";
import { trpc } from "@/lib/trpc/client";
import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

function PositionForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const candidates = trpc.candidates.savePerson.useMutation({
    onSuccess: () => {
      toast.success("Successful", {
        description: "Form successfully submitted. Thank you!",
      });
      setLoading(false);
      reset();
    },
    onError: () => {
      toast.error("There was an error", {
        description: "Please try again submitting the form.",
      });
      setLoading(false);
    },
  });
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TPerson>({
    defaultValues: {
      name: "",
      address: "",
      age: 0,
      contact_number: "",
      position: undefined,
      sex: undefined,
    },
  });

  const onSubmit: SubmitHandler<TPerson> = (data) => {
    setLoading(true);
    candidates.mutate(data);
  };

  return (
    <div className="w-3/5 mx-auto border-1 shadow-md rounded-md">
      <Image
        alt="Team Imus logo"
        src={"/images/banner.png"}
        width={1000}
        height={1000}
        className="w-2/3 mx-auto my-4"
      />
      <Divider />
      <div className="p-5">
        <h1 className="mb-3 text-center text-2xl font-semibold">
          Position Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-3">
            <Controller
              control={control}
              name="name"
              rules={{
                required: "Name is required",
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  label="Name"
                  labelPlacement="outside"
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name}
                  value={`${field.value}`}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="contact_number"
              rules={{
                required: "Contact number is required",
                pattern: {
                  value: /^09\d{9}$/,
                  message:
                    "Contact number must start with 09 and be 11 digits long",
                },
              }}
              render={({ field }) => (
                <Input
                  type="number"
                  id="contact_number"
                  placeholder="Enter contact number"
                  label="Contact Number"
                  labelPlacement="outside"
                  errorMessage={errors.contact_number?.message}
                  isInvalid={!!errors.contact_number}
                  value={`${field.value}`}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="address"
              rules={{
                required: "Address is required",
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  label="Address"
                  labelPlacement="outside"
                  errorMessage={errors.address?.message}
                  isInvalid={!!errors.address}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="sex"
              rules={{
                required: "Sex is required",
              }}
              render={({ field }) => (
                <Select
                  id="sex"
                  label="Sex"
                  placeholder="Choose sex"
                  labelPlacement="outside"
                  isInvalid={!!errors.sex}
                  errorMessage={errors.sex?.message}
                  selectedKeys={new Set([field.value])}
                  {...field}
                >
                  <SelectItem key="male" value="male">
                    Male
                  </SelectItem>
                  <SelectItem key="female" value="female">
                    Female
                  </SelectItem>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="age"
              rules={{
                required: "Age is required",
                min: {
                  value: 18,
                  message: "Age must be 18 and above",
                },
              }}
              render={({ field }) => (
                <Input
                  type="number"
                  id="age"
                  placeholder="Enter Age"
                  label="Age"
                  labelPlacement="outside"
                  errorMessage={errors.age?.message}
                  isInvalid={!!errors.age}
                  {...field}
                  value={`${field.value}`}
                />
              )}
            />
            <Controller
              control={control}
              name="position"
              rules={{
                required: "Position is required",
                validate: (value) =>
                  positions.includes(value) || "Please select a valid position",
              }}
              render={({ field }) => (
                <Select
                  id="position"
                  label="Position"
                  placeholder="Choose position"
                  labelPlacement="outside"
                  isInvalid={!!errors.position}
                  errorMessage={errors.position?.message}
                  selectedKeys={new Set([field.value])}
                  {...field}
                >
                  {positions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Button
              type="submit"
              className="rounded-lg px-10 text-xs w-full bg-ti-primary"
              isLoading={loading}
              spinner={<Spinner size="sm" color="white" />}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PositionForm;
