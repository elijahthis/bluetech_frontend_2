interface StepperProps {
	steps: string[];
	currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
	return (
		<div
			className={`lg:grid items-center gap-4 justify-between`}
			style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
		>
			{steps.map((item, ind) => (
				<div
					className={`relative  ${
						ind + 1 === currentStep ? "block" : "hidden"
					} lg:block`}
					key={ind}
				>
					<div className={`flex flex-col items-center gap-[10px] font-bold  `}>
						<div className="z-10 px-2 bg-white ">
							<p
								className={`${
									currentStep >= ind + 1
										? "bg-[#051C2C] text-white"
										: "bg-[#D9D9D9] text-[#808080]"
								} w-6 h-6 grid place-items-center rounded-full font-semibold`}
							>
								{ind + 1}
							</p>
						</div>

						<p
							className={`${
								currentStep >= ind + 1 ? "text-[#051C2C]" : "text-[#808080]"
							} text-center `}
						>
							{item}
						</p>
					</div>
					{ind < steps.length - 1 && (
						<div
							className={`line absolute top-3 left-2/4 w-full h-[1px]  ${
								currentStep > ind + 1 ? "bg-[#051C2C]" : "bg-[#D9D9D9]"
							} hidden lg:block`}
						></div>
					)}
				</div>
			))}
		</div>
	);
};

export default Stepper;
