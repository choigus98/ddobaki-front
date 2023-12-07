import React from 'react';
import { styled } from 'styled-components';
import Album from '../../assets/icons/album.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Home from '../../assets/icons/home.svg';
import Wish from '../../assets/icons/wishlist.svg';

interface DdobakiIconProps {
	src: string;
	w: number;
	h: number;
	onClick?: () => void;
	href?: string;
}

// const BaseIcon: React.FC<IconProps> = (props) => {
// 	const { svg, lg, md, sm, ...customIconComponentProps } = props;

// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 	// @ts-ignore
// 	return <Icon component={svg} {...customIconComponentProps} />;
// };

const BaseIcon = styled.img<{ css?: React.CSSProperties }>((props) => ({
	cursor: 'pointer',
	...props.css,
}));

const DdobakiIcon = (props: DdobakiIconProps) => {
	const { src, w, h, onClick, href, ...customIconComponentProps } = props;
	const style = { width: w, height: h, cursor: onClick ? 'pointer' : 'default' };

	return href ? (
		<a href={href} target="_blank" rel="noreferrer">
			<BaseIcon src={src} style={style} {...customIconComponentProps} />
		</a>
	) : (
		<BaseIcon src={src} style={style} {...customIconComponentProps} />
	);
};

export const HomeIcon: React.FC<Omit<DdobakiIconProps, 'src'>> = (props) => <DdobakiIcon src={Home} {...props} />;

export const AlbumIcon: React.FC<Omit<DdobakiIconProps, 'src'>> = (props) => <DdobakiIcon src={Album} {...props} />;

export const CalendarIcon: React.FC<Omit<DdobakiIconProps, 'src'>> = (props) => (
	<DdobakiIcon src={Calendar} {...props} />
);

export const WishIcon: React.FC<Omit<DdobakiIconProps, 'src'>> = (props) => <DdobakiIcon src={Wish} {...props} />;

// export const BackIcon: React.FC<Omit<SyntIconProps, 'svg'>> = (props) => (
//   <SyntIcon svg={() => <BackSvg />} {...props} lg={44} md={32} sm={24} />
