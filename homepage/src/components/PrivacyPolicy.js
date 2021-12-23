import React from "react";
import {
	Column,
	FooterLink,
} from "./PrivacyPolicyStyles";


export function PrivacyPolicy() {
	return (
		<React.Fragment>
			<h5 style={{
				color: "blue",
				textAlign: "left",
				padding: "30px",
				fontSize: "30px",
				marginLeft: "14px"

			}}>
				Privacy Policy
			</h5>
			<Column>

				<p style={{ fontSize: "23px" }}>
					We may collect the following types of information: <br/><br/>

					1. Information you provide – When you sign up for a MediAppoint Account, we ask you for personal and professional information. We may use this data to provide you with a better experience and to improve the quality of our services. In some cases, the information you give may be shown to your customers.<br/>

					2. Cookies – When you login to MediAppoint, we send one or more cookies to your computer or other device. We use cookies to improve the quality of our service, including for storing user preferences, improving user experience.
				</p>

			</Column>




		</React.Fragment>


	)
}
//export default PrivacyPolicy;
