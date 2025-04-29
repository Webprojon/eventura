import { Link } from "react-router-dom";
import AuthLayout from "../../components/input-components/AuthLayout";
import Input from "../../components/input-components/Input";
import { useState } from "react";

export default function Login() {
	const [userEmailVal, setUserEmailVal] = useState("");
	const [userPasswordVal, setUserPasswordVal] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!userEmailVal || !userPasswordVal) {
			setErrorMessage("Email and password are required.");
			return;
		}

		//const emailRegex = /^\S+@\S+\.\S+$/;
		//if (!emailRegex.test(userEmailVal)) {
		//	setErrorMessage("Please enter a valid email.");
		//	return;
		//}

		if (userPasswordVal.length < 6) {
			setErrorMessage("Password must be at least 6 characters long.");
			return;
		}

		setErrorMessage("");

		console.log("Logging in with", userEmailVal, userPasswordVal);
	};

	return (
		<AuthLayout subtitle="Log in to your account.">
			<form onSubmit={handleSubmit} className="w-[350px] flex gap-y-7 flex-col flex-2">
				<div className="flex flex-col gap-y-1">
					<Input type="email" name="email" id="email" text="Email" state={userEmailVal} setState={setUserEmailVal} />
					{/*<span className="text-[12px] tracking-wider text-red-400">Incorrect email or password. Please try again.</span>*/}
					{/*<span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>*/}
				</div>
				<div className="flex flex-col gap-y-2">
					<Input
						type="password"
						name="password"
						id="password"
						text="Password"
						state={userPasswordVal}
						setState={setUserPasswordVal}
					/>
					{/*<span className="text-[12px] tracking-wider text-red-400">Incorrect email or password. Please try again.</span>*/}
					{/*<span className="text-[12px] tracking-wider text-red-400">{errorMessage}</span>*/}

					<span className="text-slate-400 text-[14px]">
						Don't have an account?{" "}
						<Link to="/register" className="font-medium text-sky-300">
							Create account
						</Link>
					</span>
				</div>
				<button type="submit" className="py-2 px-4 btn">
					Log in
				</button>
			</form>
		</AuthLayout>
	);
}
