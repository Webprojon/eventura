import { Link } from "react-router-dom";
import AuthLayout from "../../components/input-components/AuthLayout";
import Input from "../../components/input-components/Input";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
	const { userEmailVal, userPasswordVal, setUserEmailVal, setUserPasswordVal, errorMessage, isPending, handleSubmit } = useLogin();

	return (
		<AuthLayout subtitle="Log in to your account.">
			<form onSubmit={handleSubmit} className="w-[350px] flex gap-y-7 flex-col flex-2">
				<div className="flex flex-col gap-y-1">
					<Input type="email" name="email" id="email" text="Email" value={userEmailVal} onChange={(e) => setUserEmailVal(e.target.value)} />
					{errorMessage && <span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>}
				</div>
				<div className="flex flex-col gap-y-2">
					<Input type="password" name="password" id="password" text="Password" value={userPasswordVal} onChange={(e) => setUserPasswordVal(e.target.value)} />
					{errorMessage && <span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>}
					<span className="text-slate-400 text-[14px]">
						Don't have an account?{" "}
						<Link to="/register" className="font-medium text-sky-300">
							Create account
						</Link>
					</span>
				</div>
				<button type="submit" className="py-2 px-4 btn">
					{isPending ? "Logging" : "Log in"}
				</button>
			</form>
		</AuthLayout>
	);
}
