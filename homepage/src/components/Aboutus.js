import React from "react";
import {
	Column,
	FooterLink,
} from "./AboutusStyles";

export function Aboutus() {
	return (
		<React.Fragment>
			<h5 style={{
				color: "blue",
				textAlign: "left",
				padding: "30px",
				fontSize: "30px",
				marginLeft: "14px"

			}}>
				We care about your health
			</h5>
			<Column>

				<p style={{ fontSize: "23px" }}>Medi Appoint is the worlds leading healthcare platform that connects millions
					of patients with hundreds of thousands of healthcare providers around the
					world and helps people make better.
				</p>

			</Column>




		</React.Fragment>


	)
}

// export default Aboutus;
