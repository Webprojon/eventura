import { Link } from "react-router-dom";
import AuthLayout from "../../components/input-components/AuthLayout";
import Input from "../../components/input-components/Input";
import { useState } from "react";

export default function Register() {
	const [userNameVal, setUserNameVal] = useState("");
	const [userEmailVal, setUserEmailVal] = useState("");
	const [userPasswordVal, setUserPasswordVal] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!userEmailVal || !userPasswordVal) {
			setErrorMessage("Email and password are required.");
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(userEmailVal)) {
			setErrorMessage("Please enter a valid email.");
			return;
		}

		if (userPasswordVal.length < 6) {
			setErrorMessage("Password must be at least 6 characters long.");
			return;
		}

		setErrorMessage("");

		console.log("Registered with", userEmailVal, userPasswordVal);
	};

	return (
		<AuthLayout subtitle="Create your new account.">
			<form onSubmit={handleSubmit} className="w-[350px] flex gap-y-7 flex-col flex-2">
				<Input
					type="text"
					name="username"
					id="username"
					text="Username"
					state={userNameVal}
					setState={setUserNameVal}
				/>
				<div className="flex flex-col gap-y-2">
					<Input type="email" name="email" id="email" text="Email" state={userEmailVal} setState={setUserEmailVal} />
					{/*<span className="text-[12px] tracking-wider text-red-400">Please enter a valid email address.</span>*/}
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
					{/*<span className="text-[12px] tracking-wider text-red-400">Password must be at least 8 characters.</span>*/}
					<span className="text-slate-400 text-[14px]">
						Have an account?{" "}
						<Link to="/log-in" className="font-medium text-sky-300">
							Log in now
						</Link>
					</span>
				</div>
				<button type="submit" className="py-2 px-4 btn">
					Register
				</button>
			</form>
		</AuthLayout>
	);
}
