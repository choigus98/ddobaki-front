import React from 'react';
import { styled } from 'styled-components';

interface TypoProps {
	children: React.ReactNode;
	weight: 'regular' | 'medium' | 'bold';
	size: 'sm' | 'md' | 'lg';
	color: 'black' | 'white' | 'gray' | 'orange';
}

const BaseTypo = styled.p`
	color: ${(props) => props.theme.color.black};
	font-size: ${(props) => props.theme.fontSize.md};
	font-weight: ${(props) => props.theme.fontWeight.regular};
	margin: 0;
`;
const Typo = (props: TypoProps) => {
	const { children } = props;
	return <BaseTypo>{children}</BaseTypo>;
};
