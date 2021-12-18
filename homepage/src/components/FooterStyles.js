import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 10px;
background: white;
// position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 500px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 ;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin: 10px;
padding-left: 50px;
width : 50vw;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
                        minmax(200px, 1fr));
                        
}
@media (max-width: 1000px) {
};


`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 8px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

