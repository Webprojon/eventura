import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import AuthLayout from "../components/Input/AuthLayout";

export default function Login() {
	return (
		<AuthLayout subtitle="Log in to your account.">
			<div className="flex flex-col gap-y-1">
				<Input type="email" text="Email" />
				{/*<span className="text-[12px] tracking-wider text-red-400">
							Incorrect email or password. Please try again.
						</span>*/}
			</div>
			<div className="flex flex-col gap-y-2">
				<Input type="password" text="Password" />
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
		</AuthLayout>
	);
}
