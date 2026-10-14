import React from "react";

const styles = {
	page: {
		minHeight: "100vh",
		boxSizing: "border-box",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "24px",
		backgroundColor: "#1677d2",
		fontFamily: "Arial, sans-serif",
	},
	form: {
		width: "100%",
		maxWidth: "460px",
		padding: "28px",
		boxSizing: "border-box",
		borderRadius: "12px",
		backgroundColor: "#fff",
		boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
	},
	title: { margin: "0 0 22px", color: "#17324d", textAlign: "center" },
	label: { display: "block", marginBottom: "14px", color: "#263746", fontSize: "14px" },
	input: {
		display: "block",
		width: "100%",
		boxSizing: "border-box",
		marginTop: "6px",
		padding: "10px 12px",
		border: "1px solid #cbd5df",
		borderRadius: "6px",
		fontSize: "15px",
	},
	button: {
		width: "100%",
		padding: "12px",
		border: 0,
		borderRadius: "6px",
		backgroundColor: "#1264b2",
		color: "#fff",
		fontSize: "16px",
		cursor: "pointer",
	},
};

export default function Forms() {
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<main style={styles.page}>
			<form style={styles.form} onSubmit={handleSubmit}>
				<h1 style={styles.title}>Account Information</h1>
				<label style={styles.label}>
					Name
					<input style={styles.input} type="text" name="name" autoComplete="name" required />
				</label>
				<label style={styles.label}>
					Email
					<input style={styles.input} type="email" name="email" autoComplete="email" required />
				</label>
				<label style={styles.label}>
					Account
					<input style={styles.input} type="text" name="account" required />
				</label>
				<label style={styles.label}>
					Age
					<input style={styles.input} type="number" name="age" min="0" required />
				</label>
				<label style={styles.label}>
					Address
					<input style={styles.input} type="text" name="address" autoComplete="street-address" required />
				</label>
				<label style={styles.label}>
					Phone Number
					<input style={styles.input} type="tel" name="phone" autoComplete="tel" required />
				</label>
				<button style={styles.button} type="submit">Submit</button>
			</form>
		</main>
	);
}
