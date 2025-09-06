"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Shield } from "lucide-react";
import { relationshipOptions } from "@/utils/formData.";

export default function EmergencyContactStep() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const relationship = watch("relationship") || "";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 border border-blue-200 shadow-sm">
          <Phone className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
          Emergency Contact
        </h3>
        <p className="mt-2 text-base text-gray-600 max-w-md mx-auto">
          Provide contact information for emergency situations.
        </p>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm w-full text-left">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-yellow-600" />
            <p className="text-yellow-800 font-medium">
              Guardian contact required (Age: 19)
            </p>
          </div>
          <p className="text-sm text-yellow-700 mt-2">
            Since you are under 21, we also need your guardian’s contact
            information.
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-4">
            Emergency Contact Information
          </h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="emergencyName">Contact Name *</Label>
            <Input
              id="emergencyName"
              placeholder="Full name of emergency contact"
              {...register("emergencyName")}
            />
            {errors.emergencyName && (
              <p className="text-red-500 text-sm">
                {errors.emergencyName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="relationship">Relationship *</Label>
            <Select
              value={relationship}
              onValueChange={(val) => setValue("relationship", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                {relationshipOptions.map((relation) => (
                  <SelectItem key={relation} value={relation}>
                    {relation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.relationship && (
              <p className="text-red-500 text-sm">
                {errors.relationship.message}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="emergencyPhone">Phone Number *</Label>
            <Input
              id="emergencyPhone"
              placeholder="Emergency contact phone number"
              {...register("emergencyPhone")}
            />
            {errors.emergencyPhone && (
              <p className="text-red-500 text-sm">
                {errors.emergencyPhone.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Guardian Contact */}
      <div className="space-y-6 pt-6 border-t border-gray-200">
        <div className="pb-4 border-b border-gray-200">
          <h4 className="text-lg font-medium text-gray-800 mb-2">
            Guardian Contact Information
          </h4>
          <p className="text-sm text-gray-600">
            Required for employees under 21 years of age
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="guardianName">Guardian Name *</Label>
            <Input
              id="guardianName"
              placeholder="Full name of guardian"
              {...register("guardianName")}
            />
            {errors.guardianName && (
              <p className="text-red-500 text-sm">
                {errors.guardianName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="guardianPhone">Guardian Phone Number *</Label>
            <Input
              id="guardianPhone"
              placeholder="Guardian phone number"
              {...register("guardianPhone")}
            />
            {errors.guardianPhone && (
              <p className="text-red-500 text-sm">
                {errors.guardianPhone.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <strong>Privacy Notice:</strong> This information will only be used in
          case of emergencies and will be stored securely according to our
          privacy policy.
        </p>
      </div>
    </div>
  );
}
