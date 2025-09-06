"use client";

import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Star } from "lucide-react";

const availableSkills = [
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Node.js",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "Project Management",
  "Data Analysis",
  "Machine Learning",
  "UI/UX Design",
  "Marketing",
  "Sales",
  "Customer Service",
  "Leadership",
  "Communication",
];

const experienceLevels = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (2-4 years)" },
  { value: "advanced", label: "Advanced (5-7 years)" },
  { value: "expert", label: "Expert (8+ years)" },
];

const workingHoursOptions = [
  { value: "standard", label: "Standard (9 AM - 5 PM)" },
  { value: "early", label: "Early (7 AM - 3 PM)" },
  { value: "late", label: "Late (11 AM - 7 PM)" },
  { value: "flexible", label: "Flexible Hours" },
];

const remoteOptions = [
  { value: "onsite", label: "On-site only" },
  { value: "hybrid", label: "Hybrid (2-3 days remote)" },
  { value: "remote", label: "Fully remote" },
  { value: "no-preference", label: "No preference" },
];

export default function SkillsPreferencesStep() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const selectedSkills = watch("primarySkills") || [];

  // Auto initialize skill experience
  useEffect(() => {
    selectedSkills.forEach((skill) => {
      if (!watch("skillExperience")?.[skill]) {
        setValue(`skillExperience.${skill}`, "beginner");
      }
    });
  }, [selectedSkills, setValue, watch]);

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 border border-blue-200 shadow-sm">
          <Settings className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl text-gray-900 tracking-tight">
          Skills & Preferences
        </h3>
        <p className="mt-2 text-base text-gray-600 max-w-md mx-auto">
          Tell us about your skills and work preferences.
        </p>
      </div>

      {/* Skills Selection */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Primary Skills *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {availableSkills.map((skill) => (
            <Controller
              key={skill}
              name="primarySkills"
              control={control}
              render={({ field }) => {
                const isChecked = field.value?.includes(skill);
                return (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={skill}
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        if (checked)
                          field.onChange([...(field.value || []), skill]);
                        else
                          field.onChange(
                            field.value.filter((s) => s !== skill)
                          );
                      }}
                    />
                    <Label
                      htmlFor={skill}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {skill}
                    </Label>
                  </div>
                );
              }}
            />
          ))}
        </div>
        {errors.primarySkills && (
          <p className="text-red-500 text-sm">{errors.primarySkills.message}</p>
        )}
      </div>

      {/* Individual Skill Experience */}
      <div className="space-y-4">
        <Label className="text-base font-medium">
          Experience Level for Each Skill *
        </Label>
        {selectedSkills.map((skill) => (
          <Controller
            key={skill}
            name={`skillExperience.${skill}`}
            control={control}
            render={({ field }) => (
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Label className="font-medium">{skill}</Label>
                </div>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          />
        ))}
      </div>

      {/* Working Hours */}
      <div className="space-y-4">
        <Label className="text-base font-medium">
          Preferred Working Hours *
        </Label>
        <Controller
          name="preferredHours"
          control={control}
          render={({ field }) => (
            <RadioGroup
              className="space-y-2"
              value={field.value || ""}
              onValueChange={field.onChange}
            >
              {workingHoursOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      {/* Remote Preference */}
      <div className="space-y-4">
        <Label className="text-base font-medium">
          Remote Work Preference *
        </Label>
        <Controller
          name="remotePreference"
          control={control}
          render={({ field }) => (
            <RadioGroup
              className="space-y-2"
              value={field.value || ""}
              onValueChange={field.onChange}
            >
              {remoteOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      {/* Extra Notes */}
      <Controller
        name="extraNotes"
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <Label htmlFor="extraNotes" className="text-base font-medium">
              Extra Notes (Optional)
            </Label>
            <Textarea
              {...field}
              id="extraNotes"
              className="min-h-24"
              placeholder="Additional info..."
            />
            <p className="text-sm text-gray-500 text-right">
              {field.value?.length || 0}/500 characters
            </p>
          </div>
        )}
      />
    </div>
  );
}
