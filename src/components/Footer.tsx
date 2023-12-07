import React, { useState } from 'react';
import styled from 'styled-components';
import * as Shared from '../components/Shared';
import { useNavigate } from 'react-router-dom';

interface IconTextProps {
	selected: boolean;
}

type IconArrType = {
	id: number;
	name: string;
	icon: React.ReactNode;
	link: string;
};

const IconArr: IconArrType[] = [
	{
		id: 1,
		name: 'Home',
		icon: <Shared.Icon.HomeIcon w={30} h={30} />,
		link: '/',
	},
	{
		id: 2,
		name: 'Album',
		icon: <Shared.Icon.AlbumIcon w={30} h={30} />,
		link: '/album',
	},
	{
		id: 3,
		name: 'Calendar',
		icon: <Shared.Icon.CalendarIcon w={30} h={30} />,
		link: '/calendar',
	},
	{
		id: 4,
		name: 'Wish',
		icon: <Shared.Icon.WishIcon w={30} h={30} />,
		link: '/wish',
	},
];

const Footer: React.FC = () => {
	const [selected, setSelected] = useState(1);
	const navigate = useNavigate();
	const clickIcon = (item: IconArrType) => {
		setSelected(item.id);
		navigate(item.link);
	};
	return (
		<StyledFooter.Container>
			{IconArr.map((item) => (
				<StyledFooter.IconWrap key={item.id} onClick={() => clickIcon(item)}>
					{item.icon}
					<StyledFooter.Text selected={item.id === selected}>{item.name}</StyledFooter.Text>
				</StyledFooter.IconWrap>
			))}
		</StyledFooter.Container>
	);
};

export default Footer;

const StyledFooter = {
	Container: styled.div`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		padding: 0 20px;
		border-top: 1px solid #ddd;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
	`,
	IconWrap: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	Text: styled.p<IconTextProps>`
		color: ${(props) => (props.selected ? '#ff7f00' : '#000')};
		font-size: 12px;
		margin: 0;
	`,
};
