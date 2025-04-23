import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<section className="max-w-[1350px] mx-auto min-h-[100vh] flex justify-center items-center">
			<div className="flex items-center gap-x-10">
				{/* //////////////////// */}
				<div className="flex flex-col items-center justify-center gap-y-4 flex-1">
					<div className="flex items-center gap-3">
						<FaPeopleGroup className="size-14 text-sky-300" />
						<h1 className="leading-none font-semibold text-[32px] md:text-[50px] text-center">Eventura</h1>
					</div>
					<p className="text-xl tracking-wider text-slate-300">Log in to your account.</p>
				</div>

				<div className="h-[70vh] border-r border-gray-800"></div>

				<form className="w-[350px] flex gap-y-6 flex-col flex-2">
					{/*<div className="flex flex-col text-">*/}
					<input
						type="email"
						placeholder="Email"
						autoComplete="off"
						className="bg-transparent py-2 px-3 rounded-md outline-none border border-gray-800 text-slate-300 placeholder:text-slate-300"
					/>
					{/*<span>wrong email is used</span>*/}
					{/*</div>*/}
					<input
						type="password"
						placeholder="Password"
						autoComplete="off"
						className="bg-transparent py-2 px-3 rounded-md outline-none border border-gray-800 text-slate-300 placeholder:text-slate-300"
					/>
					<span className="text-slate-400 text-[14px]">
						Don't have an account?{" "}
						<Link to="/register" className="font-medium text-sky-300">
							Create account
						</Link>
					</span>
					<button className="py-2 px-4 font-semibold rounded-md cursor-pointer border border-sky-300 text-sky-300 bg-[#032236] hover:bg-[#032236c1]">
						Log in
					</button>
				</form>
			</div>
		</section>
	);
}
