import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import AuthLayout from "../components/Input/AuthLayout";

export default function Register() {
	return (
		<AuthLayout subtitle="Create your new account.">
			<Input type="text" text="Username" />
			<div className="flex flex-col gap-y-2">
				<Input type="email" text="Email" />
				{/*<span className="text-[12px] tracking-wider text-red-400">Please enter a valid email address.</span>*/}
			</div>
			<div className="flex flex-col gap-y-2">
				<Input type="password" text="Password" />
				{/*<span className="text-[12px] tracking-wider text-red-400">Password must be at least 8 characters.</span>*/}
				<span className="text-slate-400 text-[14px]">
					Have an account?{" "}
					<Link to="/log-in" className="font-medium text-sky-300">
						Log in now
					</Link>
				</span>
			</div>
			<button className="py-2 px-4 btn">Register</button>
		</AuthLayout>
	);
}
