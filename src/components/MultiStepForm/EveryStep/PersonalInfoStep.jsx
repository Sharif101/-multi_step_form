"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, User } from "lucide-react";

export default function PersonalInfoStep({ formMethods }) {
  const {
    register,
    formState: { errors },
    setValue,
  } = formMethods;

  const [fileName, setFileName] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 border border-blue-200 shadow">
          <User className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h3>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Fill in your details to set up your profile. This information will be
          used for your account and profile management.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            placeholder="+1-123-456-7890"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth *</Label>
          <Input id="dob" type="date" {...register("dob")} />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>

        {/* Profile Picture */}
        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <label className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-blue-400 transition">
            <span>{fileName || "Upload JPG/PNG (Max 2MB)"}</span>
            <Upload className="w-5 h-5 text-gray-500" />
            <input
              id="profilePicture"
              type="file"
              accept=".jpg,.png"
              className="hidden"
              {...register("profilePicture")}
              onChange={(e) => {
                const files = e.target.files;
                setFileName(files[0]?.name || "");
                setValue("profilePicture", files);
              }}
            />
          </label>
          {errors.profilePicture && (
            <p className="text-red-500 text-sm">
              {errors.profilePicture.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
