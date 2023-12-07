import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
	const { children } = props;
	return (
		<>
			<Main.Conatiner>
				<Main.Content>{children}</Main.Content>
				<Footer />
			</Main.Conatiner>
		</>
	);
};

const Main = {
	Conatiner: styled.div`
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
	`,
	Content: styled.div`
		width: 100%;
		height: 100%;
		padding: 0 20px;
	`,
};

export default MainLayout;
