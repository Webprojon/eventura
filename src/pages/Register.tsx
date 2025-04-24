import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<section className="max-w-[1350px] mx-auto min-h-[100vh] flex justify-center items-center">
			<div className="flex items-center gap-x-10">
				<div className="flex flex-col items-center justify-center gap-y-4 flex-1">
					<Link to="/" className="flex items-center gap-3">
						<FaPeopleGroup className="size-14 text-sky-300" />
						<h1 className="leading-none font-semibold text-[32px] md:text-[50px] text-center">Eventura</h1>
					</Link>
					<p className="text-xl tracking-wider text-slate-300">Create your new account.</p>
				</div>

				<div className="h-[70vh] border-r"></div>

				<form className="w-[350px] flex gap-y-7 flex-col flex-2">
					<input
						required
						type="text"
						placeholder="Username"
						autoComplete="off"
						className="bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300"
					/>
					<div className="flex flex-col gap-y-2">
						<input
							required
							type="email"
							placeholder="Email"
							autoComplete="off"
							className="bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300"
						/>
						{/*<span className="text-[12px] tracking-wider text-red-400">Please enter a valid email address.</span>*/}
					</div>
					<div className="flex flex-col gap-y-2">
						<input
							required
							type="password"
							placeholder="Password"
							autoComplete="off"
							className="bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300"
						/>
						{/*<span className="text-[12px] tracking-wider text-red-400">Password must be at least 8 characters.</span>*/}
						<span className="text-slate-400 text-[14px]">
							Have an account?{" "}
							<Link to="/log-in" className="font-medium text-sky-300">
								Log in now
							</Link>
						</span>
					</div>
					<button className="py-2 px-4 btn">Register</button>
				</form>
			</div>
		</section>
	);
}
