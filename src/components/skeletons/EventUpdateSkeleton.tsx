import Skeleton from "react-loading-skeleton";

export const EventUpdateSkeleton = () => {
	const baseColor = "#1C2029";
	const highlightColor = "#2A2F3A";

	return (
		<section className="max-w-[1350px] mx-auto rounded-md px-4 py-5 mt-9 border select-none bg-[#10141E]">
			<Skeleton height={450} width={"100%"} baseColor={baseColor} highlightColor={highlightColor} />

			{/* Buttons */}
			<div className="flex justify-end gap-x-6 mt-4">
				<Skeleton height={40} width={100} baseColor={baseColor} highlightColor={highlightColor} />
				<Skeleton height={40} width={130} baseColor={baseColor} highlightColor={highlightColor} />
			</div>
		</section>
	);
};
