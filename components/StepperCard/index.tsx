import Stepper from "../Stepper";

interface StepperCardProps {
	steps: string[];
	currentStep: number;
	components: JSX.Element[];
}

const StepperCard = ({ steps, currentStep, components }: StepperCardProps) => {
	return (
		<div className="bg-white px-4 py-6 lg:px-10 lg:py-[56px] lg:pb-[71px] ">
			<Stepper steps={steps} currentStep={currentStep} />
			<div className="mt-8 px-4 lg:px-20">{components[currentStep - 1]}</div>
		</div>
	);
};

export default StepperCard;
