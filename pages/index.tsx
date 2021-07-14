import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import { MdKeyboard, MdVideoCall } from 'react-icons/md';

const Header = styled.header`
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
	@media (min-width: 48em) {
		font-size: 2.6rem;
	}
`;

const Container = styled.main`
	max-width: 62rem;
	margin: 4rem auto 0;
	padding: 0 1rem;
`;

const Headline = styled.h2`
	font-size: 1.8rem;
	font-weight: 500;
	margin: 0 0 4rem;
	text-align: center;
	@media (min-width: 48em) {
		font-size: 2.5rem;
	}
`;

const InlineGrid = styled.div`
	max-width: 50rem;
	margin: auto;
	display: grid;
	grid-template-columns: 2fr 3fr 1fr;
	gap: 2rem;
	${Button}:first-child {
		grid-column: 1 / -1;
	}
	@media (min-width: 48em) {
		${Button}:first-child {
			grid-column: 1 / 2;
		}
	}
`;

const InputWrapper = styled.div`
	grid-row: 2;
	grid-column: 1 / 3;
	border: 1px solid transparent;
	padding: 0.6rem 1rem;
	transition: 0.15s ease;
	display: flex;
	align-items: center;
	:focus-within {
		outline: none;
		border-color: var(--color-primary);
	}
	> * {
		flex-shrink: 0;
	}
	@media (min-width: 48em) {
		grid-row: 1;
		grid-column: 2;
	}
`;

const Input = styled.input`
	grid-row: 2;
	flex: 1;
	background: none;
	border: none;
	color: inherit;
	font-family: inherit;
	padding: 0 1rem;
	font-size: 1.4rem;
	&:focus {
		outline: none;
	}
	::placeholder {
		color: var(--color-text);
		font: inherit;
		opacity: 0.79;
	}
`;

function HomePage() {
	return (
		<Layout title="My Meet">
			<Header>
				<Logo>My Meet</Logo>
				<Button>Login</Button>
			</Header>
			<Container>
				<Headline>
					Create a new meeting or enter a code or link to join an
					existing one.
				</Headline>
				<InlineGrid>
					<Button>
						<MdVideoCall size="24" color="currentColor" />
						New Meeting
					</Button>
					<InputWrapper>
						<MdKeyboard
							size="24"
							color="currentColor"
							opacity="0.79"
						/>
						<Input
							type="text"
							aria-label="Enter a code or link"
							placeholder="Enter a code or link"
						/>
					</InputWrapper>
					<Button>Join</Button>
				</InlineGrid>
			</Container>
		</Layout>
	);
}

export default HomePage;
