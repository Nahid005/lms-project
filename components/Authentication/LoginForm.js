import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { handleLogin } from "@/utils/auth";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider  } from "firebase/auth";

const INITIAL_USER = {
	email: "",
	password: "",
};

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider ();

const LoginForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const url = `${baseUrl}/api/users/signin`;
			const payload = { ...user };
			const response = await axios.post(url, payload);
			handleLogin(response.data.nptl_users_token, router);
			toast.success(response.data.message, {
				style: {
					border: "1px solid #4BB543",
					padding: "16px",
					color: "#4BB543",
				},
				iconTheme: {
					primary: "#4BB543",
					secondary: "#FFFAEE",
				},
			});
		} catch (err) {
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message, {
				style: {
					border: "1px solid #ff0033",
					padding: "16px",
					color: "#ff0033",
				},
				iconTheme: {
					primary: "#ff0033",
					secondary: "#FFFAEE",
				},
			});
		} finally {
			setLoading(false);
		}
	};

	// Google signin auth

	const handleGoogleSignIn = async () => {
		
		signInWithPopup(auth, googleProvider)
		
		.then(async (result) => {
			const loggedInUser = result.user;
			const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, uid: loggedInUser.uid}
			const url = `${baseUrl}/api/users/social-login`;
			const payload = { ...saveUser };
			const response = await axios.post(url, payload);
			handleLogin(response.data.nptl_users_token, router);
			toast.success(response.data.message, {
				style: {
					border: "1px solid #4BB543",
					padding: "16px",
					color: "#4BB543",
				},
				iconTheme: {
					primary: "#4BB543",
					secondary: "#FFFAEE",
				},
			});
		})
		.catch(err => {
			if (err.code === 'auth/popup-closed-by-user') {
				console.log('User closed the popup');
			  }else{
				
				  let {
					  response: {
						  data: { message },
					  },
				  } = err;
				  toast.error(response.data.message, {
					  style: {
						  border: "1px solid #ff0033",
						  padding: "16px",
						  color: "#ff0033",
					  },
					  iconTheme: {
						  primary: "#ff0033",
						  secondary: "#FFFAEE",
					  },
				  });
			  }
		})

	}

	// facebook signin auth

	const handlefbSignIn = async () => {
		
		signInWithPopup(auth, FacebookProvider)

			.then(async (result) => {
				const fbloggedInUser = result.user;
				const saveUser = { name: fbloggedInUser.displayName, email: fbloggedInUser.email, photo: fbloggedInUser.photoURL, uid: fbloggedInUser.uid }
				const url = `${baseUrl}/api/users/social-login`;
				const payload = { ...saveUser };
				const response = await axios.post(url, payload);
				handleLogin(response.data.nptl_users_token, router);
				toast.success(response.data.message, {
					style: {
						border: "1px solid #4BB543",
						padding: "16px",
						color: "#4BB543",
					},
					iconTheme: {
						primary: "#4BB543",
						secondary: "#FFFAEE",
					},
				});
			})
			.catch(err => {
				if (err.code === 'auth/popup-closed-by-user') {
					console.log('User closed the popup');
				  }else{
	
					  let {
						  response: {
							  data: { message },
						  },
					  } = err;
					  toast.error(response.data.message, {
						  style: {
							  border: "1px solid #ff0033",
							  padding: "16px",
							  color: "#ff0033",
						  },
						  iconTheme: {
							  primary: "#ff0033",
							  secondary: "#FFFAEE",
						  },
					  });
				  }
			})

	}

	return (
		<>
			<div className="login-form">
				<h2 className="text-center"> প্রবেশ করুন </h2>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label> ইমেইল </label>
						<input
							type="text"
							className="form-control"
							placeholder="ইমেইল"
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
					</div>

					<div className="form-group">
						<label>পাসওয়ার্ড</label>
						<input
							type="password"
							className="form-control"
							placeholder="পাসওয়ার্ড"
							name="password"
							value={user.password}
							onChange={handleChange}
						/>
					</div>

					<div className="row align-items-center">
						<div className="col-lg-12 col-md-12 col-sm-12 remember-me-wrap">
							<Link href="/send-confirmation-email">
								<a className="lost-your-password">
								একটি নিশ্চিত করণ ইমেল পাননি?
								</a>
							</Link>
						</div>
					</div>

					<motion.button
						type="submit"
						disabled={disabled}
						whileTap={{ scale: 0.9 }}
					>
						প্রবেশ করুন
						{loading ? <LoadingSpinner /> : ""}
					</motion.button>

					<div className="row align-items-center">
						<div className="col-lg-12 col-md-12 col-sm-12 remember-me-wrap text-center pt-3">
							<Link href="/registration">
								<a className="lost-your-password">
								একটি অ্যাকাউন্ট তৈরি করুন
								</a>
							</Link>
						</div>
					</div>

					{/* google login */}

					<div className="social-login">
						<div className="row align-items-center text-center">
							<div className="col-md-6">
								<button onClick={ handleGoogleSignIn } className="btn google-login"> < FcGoogle /> Google </button>
							</div>
							<div className="col-md-6">
								<button onClick={ handlefbSignIn } className="btn facebook-login"> < FaFacebook/> Facebook </button>
							</div>
						</div>
					</div>

				</form>
			</div>
		</>
	);
};

export default LoginForm;
