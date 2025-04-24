import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<section className="max-w-[1350px] mx-auto min-h-[100vh] flex justify-center items-center">
			<div className="flex items-center gap-x-10">
				<div className="flex flex-col items-center justify-center gap-y-4 flex-1">
					<Link to="/" className="flex items-center gap-3">
						<FaPeopleGroup className="size-14 text-sky-300" />
						<h1 className="leading-none font-semibold text-[32px] md:text-[50px] text-center">Eventura</h1>
					</Link>
					<p className="text-xl tracking-wider text-slate-300">Log in to your account.</p>
				</div>

				<div className="h-[70vh] border-r"></div>

				<form className="w-[350px] flex gap-y-7 flex-col flex-2">
					<div className="flex flex-col gap-y-1">
						<input
							required
							type="email"
							placeholder="Email"
							autoComplete="off"
							className="bg-transparent py-2 px-3 rounded-md outline-none border border-gray-800 text-slate-300 placeholder:text-slate-300"
						/>
						{/*<span className="text-[12px] tracking-wider text-red-400">
							Incorrect email or password. Please try again.
						</span>*/}
					</div>
					<div className="flex flex-col gap-y-2">
						<input
							required
							type="password"
							placeholder="Password"
							autoComplete="off"
							className="bg-transparent py-2 px-3 rounded-md outline-none border border-gray-800 text-slate-300 placeholder:text-slate-300"
						/>
						{/*<span className="text-[12px] tracking-wider text-red-400">
							Incorrect email or password. Please try again.
						</span>*/}
						<span className="text-slate-400 text-[14px]">
							Don't have an account?{" "}
							<Link to="/register" className="font-medium text-sky-300">
								Create account
							</Link>
						</span>
					</div>
					<button className="py-2 px-4 btn">Log in</button>
				</form>
			</div>
		</section>
	);
}
