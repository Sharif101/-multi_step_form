"use client";

import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  User,
  Briefcase,
  Settings,
  Phone,
  Calendar,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Home,
} from "lucide-react";

export default function ReviewSubmitStep() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();
  const formData = getValues();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Review & Submit
        </h3>
        <p className="text-gray-600">
          Please review all information before submitting
        </p>
      </div>

      <div className="grid gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <User className="w-5 h-5 text-blue-500" />
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Full Name</Label>
                  <p className="font-medium">{formData.fullName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Email</Label>
                  <p className="font-medium">{formData.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Phone</Label>
                  <p className="font-medium">{formData.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Date of Birth</Label>
                  <p className="font-medium">{formData.dob}</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Label className="text-sm text-gray-500">Profile Picture</Label>
              <p className="font-medium text-green-600">
                {formData.profilePicture?.length
                  ? `✓ ${formData.profilePicture[0]?.name}`
                  : "No file uploaded"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Job Details */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span>Job Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Department</Label>
                  <p className="font-medium">{formData.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Position</Label>
                  <p className="font-medium">{formData.positionTitle}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Start Date</Label>
                  <p className="font-medium">{formData.startDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="default">{formData.jobType}</Badge>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">
                    Salary Expectation
                  </Label>
                  <p className="font-medium">
                    {formData.salary ? `$${formData.salary}` : "N/A"}
                  </p>
                </div>
              </div>
              {formData.manager && (
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <div>
                    <Label className="text-sm text-gray-500">Manager</Label>
                    <p className="font-medium">{formData.manager}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Skills & Preferences */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Settings className="w-5 h-5 text-blue-500" />
              <span>Skills & Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">
                Primary Skills
              </Label>
              <div className="flex flex-wrap gap-2">
                {formData.primarySkills?.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill} - {formData.skillExperience?.[skill]}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">Working Hours</Label>
                  <p className="font-medium">{formData.preferredHours}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Home className="w-4 h-4 text-gray-400" />
                <div>
                  <Label className="text-sm text-gray-500">
                    Remote Preference
                  </Label>
                  <p className="font-medium">{formData.remotePreference}</p>
                </div>
              </div>
            </div>
            {formData.extraNotes && (
              <div>
                <Label className="text-sm text-gray-500">
                  Additional Notes
                </Label>
                <p className="mt-1 text-gray-800 bg-gray-50 p-3 rounded-md">
                  {formData.extraNotes}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>Emergency Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-gray-500">Contact Name</Label>
                <p className="font-medium">{formData.emergencyName}</p>
              </div>
              <div>
                <Label className="text-sm text-gray-500">Relationship</Label>
                <p className="font-medium">{formData.relationship}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm text-gray-500">Phone Number</Label>
                <p className="font-medium">{formData.emergencyPhone}</p>
              </div>
            </div>

            {(formData.guardianName || formData.guardianPhone) && (
              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-medium text-gray-800 mb-3">
                  Guardian Contact
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-gray-500">
                      Guardian Name
                    </Label>
                    <p className="font-medium">{formData.guardianName}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-500">
                      Guardian Phone
                    </Label>
                    <p className="font-medium">{formData.guardianPhone}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Confirmation */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="confirmCorrect"
                className="mt-1"
                {...register("confirmInfo")}
                defaultChecked={formData.confirmInfo || false}
              />
              <div className="space-y-1">
                <Label
                  htmlFor="confirmCorrect"
                  className="text-sm font-medium cursor-pointer"
                >
                  I confirm all information is correct *
                </Label>
                {errors.confirmInfo && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmInfo.message}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  By checking this box, you confirm that all the information
                  provided above is accurate and complete.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
