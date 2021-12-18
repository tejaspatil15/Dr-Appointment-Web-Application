import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
} from "./FooterStyles";


export function Footer() {
	return (
		<div style={{ position: 'bottom', bottom: '0px', width: '100%', bottom: '0' }}>
			<Box>
				<Container>

					<Row>
						<Column>
							<p style={{ marginTop: "2px", }}></p>

							<FooterLink href="/Aboutus">About Us</FooterLink>
							<FooterLink href="/contactus">Contact Us</FooterLink>
							<FooterLink href="/Privacypolicy">Privacy Policy</FooterLink>
							<FooterLink href="/Termsandconditions">Terms and Conditions</FooterLink>

						</Column>
						{/* <Column>
							<p style={{ marginTop: "2px", }}></p>

							<FooterLink href="/Aboutus">About Us</FooterLink>
							<FooterLink href="/contactus">Contact Us</FooterLink>
							<FooterLink href="/Privacypolicy">Privacy Policy</FooterLink>
							<FooterLink href="/Termsandconditions">Terms and Conditions</FooterLink>

						</Column> */}

						<Column>
							<h4 style={{
								color: "blue",
								textAlign: "center",
								// marginBottom: "-10px", 
								fontSize: "30px", marginTop: "40px", paddingLeft: "80px"
							}}>
								Medi Appoint
							</h4>
							<p style={{ textAlign: "center", marginBottom: "33px", fontSize: "18px", paddingLeft: "80px" }}>
								© Copyright Persistent Systems 2021</p>

						</Column>

					</Row>

				</Container>
			</Box>
		</div>



	);
}

//export default Footer;
