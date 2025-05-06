import { Link } from "react-router-dom";
import AuthLayout from "../../components/input-components/AuthLayout";
import Input from "../../components/input-components/Input";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
	const { userNameVal, userEmailVal, userPasswordVal, setUserNameVal, setUserEmailVal, setUserPasswordVal, errorMessage, handleSubmit, isPending } =
		useRegister();

	return (
		<AuthLayout subtitle="Create your new account.">
			<form onSubmit={handleSubmit} className="w-[350px] flex gap-y-7 flex-col flex-2">
				<Input type="text" name="username" id="username" text="Name" value={userNameVal} onChange={(e) => setUserNameVal(e.target.value)} />
				<div className="flex flex-col gap-y-2">
					<Input type="email" name="email" id="email" text="Email" value={userEmailVal} onChange={(e) => setUserEmailVal(e.target.value)} />
					{errorMessage && <span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>}
				</div>
				<div className="flex flex-col gap-y-2">
					<Input type="password" name="password" id="password" text="Password" value={userPasswordVal} onChange={(e) => setUserPasswordVal(e.target.value)} />
					{errorMessage && <span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>}
					<span className="text-slate-400 text-[14px]">
						Have an account?{" "}
						<Link to="/log-in" className="font-medium text-sky-300">
							Log in now
						</Link>
					</span>
				</div>
				<button type="submit" className="py-2 px-4 btn" disabled={isPending}>
					{isPending ? "Registering..." : "Register"}
				</button>
			</form>
		</AuthLayout>
	);
}
