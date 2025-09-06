"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

import PersonalInfoStep from "./EveryStep/PersonalInfoStep";
import JobDetailsStep from "./EveryStep/JobDetailsStep";
import SkillsPreferencesStep from "./EveryStep/SkillsPreferencesStep";
import EmergencyContactStep from "./EveryStep/EmergencyContactStep";
import ReviewSubmitStep from "./EveryStep/ReviewSubmitStep";
import { formSchema } from "@/schemas/formSchema";

const steps = [
  { id: 1, title: "Personal Info", component: PersonalInfoStep },
  { id: 2, title: "Job Details", component: JobDetailsStep },
  { id: 3, title: "Skills & Preferences", component: SkillsPreferencesStep },
  { id: 4, title: "Emergency Contact", component: EmergencyContactStep },
  { id: 5, title: "Review & Submit", component: ReviewSubmitStep },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
    mode: "onTouched",
  });

  // Map each step to the fields it contains
  const stepFields = {
    1: ["fullName", "email", "phone", "dob", "profilePicture"],
    2: [
      "department",
      "positionTitle",
      "startDate",
      "jobType",
      "salary",
      "manager",
    ],
    3: [
      "primarySkills",
      "skillExperience",
      "preferredHours",
      "remotePreference",
      "extraNotes",
    ],
    4: [
      "emergencyName",
      "relationship",
      "emergencyPhone",
      "guardianName",
      "guardianPhone",
    ],
    5: ["confirmInfo"],
  };

  const handleNext = async () => {
    const fieldsToValidate = stepFields[currentStep];
    const isValid = await methods.trigger(fieldsToValidate);
    console.log({ isValid, formSchema });

    if (isValid) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = methods.handleSubmit((data) => {
    console.log("Final Form Data:", data);
    alert("Form submitted! Check console for data.");
  });

  const StepComponent = steps[currentStep - 1].component;
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-3xl shadow-xl bg-white">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between mb-6">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {steps[currentStep - 1].title}
              </CardTitle>
              <div className="text-sm text-gray-500">
                {currentStep} of {steps.length}
              </div>
            </div>

            <div className="relative w-full">
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-300">
                <div
                  className="h-0.5 bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between relative z-10">
                {steps.map((step) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = completedSteps.has(step.id);
                  return (
                    <div
                      key={step.id}
                      className="flex flex-col items-center w-full"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200
                        ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-medium">{step.id}</span>
                        )}
                      </div>
                      <span
                        className={`text-xs mt-2 text-center whitespace-nowrap ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <StepComponent formMethods={methods} />
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep === steps.length ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white hover:bg-green-700"
                >
                  Submit Form
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Next Step
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
}
