import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

type AuthLayoutProps = {
	subtitle: string;
	children: React.ReactNode;
};

export default function AuthLayout({ subtitle, children }: AuthLayoutProps) {
	return (
		<section className="max-w-[1350px] mx-auto min-h-[100vh] flex justify-center items-center">
			<div className="flex items-center gap-x-10">
				<div className="flex flex-col items-center justify-center gap-y-4 flex-1">
					<Link to="/" className="flex items-center gap-3">
						<FaPeopleGroup className="size-14 text-sky-300" />
						<h1 className="leading-none font-semibold text-[32px] md:text-[50px] text-center">Eventura</h1>
					</Link>
					<p className="text-xl tracking-wider text-slate-300">{subtitle}</p>
				</div>
				<div className="h-[70vh] border-r"></div>
				<form className="w-[350px] flex gap-y-7 flex-col flex-2">{children}</form>
			</div>
		</section>
	);
}
