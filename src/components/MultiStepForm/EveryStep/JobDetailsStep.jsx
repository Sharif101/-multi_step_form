"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown, Briefcase } from "lucide-react";

export default function JobDetailsStep({ formMethods }) {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = formMethods;

  const [managerName, setManagerName] = useState("");
  const jobType = watch("jobType");
  const managerOptions = ["Sarah Johnson", "Mike Chen"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 border border-blue-200 shadow-sm">
          <Briefcase className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl text-gray-900 tracking-tight">Job Details</h3>
        <p className="mt-2 text-base text-gray-600 max-w-md mx-auto">
          Tell us more about your current role and position.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Department */}
        <div className="space-y-2">
          <Label htmlFor="department">Department *</Label>
          <Select
            onValueChange={(value) => setValue("department", value)}
            value={watch("department") || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Sales">Sales</SelectItem>
              <SelectItem value="HR">HR</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
            </SelectContent>
          </Select>
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department.message}</p>
          )}
        </div>

        {/* Position Title */}
        <div className="space-y-2">
          <Label htmlFor="positionTitle">Position Title *</Label>
          <Input
            id="positionTitle"
            type="text"
            placeholder="e.g. Software Engineer"
            {...register("positionTitle")}
          />
          {errors.positionTitle && (
            <p className="text-red-500 text-sm">
              {errors.positionTitle.message}
            </p>
          )}
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date *</Label>
          <Input id="startDate" type="date" {...register("startDate")} />
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        {/* Job Type */}
        <div className="space-y-2">
          <Label htmlFor="jobType">Job Type *</Label>
          <Select
            onValueChange={(value) => setValue("jobType", value)}
            value={watch("jobType") || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          {errors.jobType && (
            <p className="text-red-500 text-sm">{errors.jobType.message}</p>
          )}
        </div>

        {/* Salary Expectation */}
        <div className="space-y-2">
          <Label htmlFor="salary">Salary Expectation *</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              $
            </span>
            <Input
              id="salary"
              type="number"
              placeholder="Enter salary expectation"
              className="pl-8 pr-16"
              {...register("salary", {
                valueAsNumber: true,
              })}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              /year
            </span>
          </div>
          {errors.salary && (
            <p className="text-red-500 text-sm">{errors.salary.message}</p>
          )}
        </div>

        {/* Manager */}
        <div className="space-y-2">
          <Label>Manager</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full justify-between"
              >
                {managerName || "Select manager..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search manager..." />
                <CommandEmpty>No manager found.</CommandEmpty>
                <CommandGroup>
                  {managerOptions.map((name) => (
                    <CommandItem
                      key={name}
                      onSelect={() => {
                        setManagerName(name);
                        setValue("manager", name);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          managerName === name ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <div>{name}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          {errors.manager && (
            <p className="text-red-500 text-sm">{errors.manager.message}</p>
          )}
          <p className="text-sm text-gray-500">
            Please select a department first to see available managers
          </p>
        </div>
      </div>
    </div>
  );
}
