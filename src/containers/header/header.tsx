import React, { useState } from 'react'
import Link from 'next/link'
import { Avatar, HStack, Text } from '@chakra-ui/react'
import AddIcon from '../../../public/assets/icons/add-white.svg'
import NotificationIcon from '../../../public/assets/icons/notification.svg'
import { CenteredIconButton } from '../../components/buttons/centered-icon-button'
import SearchBar from './header-searchbar'
import { changePage, selectNav } from '../../store/nav'
import { useDispatch, useSelector } from '../../store/store'
import Dashboard from '../../../public/assets/icons/navigation/dashboard.svg'
import Inbox from '../../../public/assets/icons/navigation/inbox.svg'
import Jobs from '../../../public/assets/icons/navigation/jobs.svg'
import Candidates from '../../../public/assets/icons/navigation/candidates.svg'

import DashboardActiveIcon from '../../../public/assets/icons/navigation/dashboard-active.svg'
import InboxActiveIcon from '../../../public/assets/icons/navigation/inbox-active.svg'
import JobsActiveIcon from '../../../public/assets/icons/navigation/jobs-active.svg'
import CandidatesActiveIcon from '../../../public/assets/icons/navigation/candidates-active.svg'
import logo from '../../../public/assets/lark-logo.png'
import DropdownMenu from '../../components/dropdown/menu'


const NavIcons = {
	dashboard: {
		normal: <Dashboard />,
		active: <DashboardActiveIcon />
	},
	inbox: {
		normal: <Inbox />,
		active: <InboxActiveIcon />
	},
	jobs: {
		normal: <Jobs />,
		active: <JobsActiveIcon />
	},
	candidates: {
		normal: <Candidates />,
		active: <CandidatesActiveIcon />
	}
}


const Header = () => {

	const currentTab = useSelector(selectNav);
	const dispatch = useDispatch();


	const handleNavChange = (tab: string) => {
		dispatch(changePage(tab))
	}

	const companyLogo = <Avatar
		size='sm'
		name='Uber'
		src={logo.src}
		cursor='pointer'
	/>

	const profileDropDownItems = [
		{
			element: 'Company profile',
			href: '/profiles/company/whateveridofthecompany'
		},
		{
			element: 'Settings',
			href: '/settings'
		},
		{
			element: 'Logout',
			action: () => console.log('logged out')
		}
	]

	const rightSideQuickActions = () => {
		return (
			<HStack>
				<CenteredIconButton
					Icon={<AddIcon />}
					onClick={() => console.log('clicked')}
					bg='brand.secondary'
					isRound
					href='/create-job-post'
				/>

				<CenteredIconButton
					Icon={<NotificationIcon />}
					onClick={() => console.log('clicked')}
					borderColor='lightgrey'
					isRound
					isOutlined
				/>
				{renderProfileDropDown()}
			</HStack>
		)
	}

	const renderProfileDropDown = () => {
		return (
			<DropdownMenu
				triggerBtn={companyLogo}
				items={profileDropDownItems}
			/>
		)
	}

	const renderNavigation = () => {
		return (
			<HStack spacing={6} color='brand.grey300' fontSize='16px' minWidth='420px' height='100%'>
				{renderNavItem('Dashboard')}
				{renderNavItem('Jobs')}
				{renderNavItem('Candidates')}
				{renderNavItem('Inbox')}
			</HStack>
		)
	}

	const renderNavItem = (text: string) => {
		let href = `/${text.toLowerCase()}`
		if (text === 'Dashboard') {
			href = '/'
		}
		return (
			<Text
				height='100%'
				display='flex'
				px='5px'
				justifyContent='center'
				alignItems='center'
				cursor='pointer'
				flexDirection='column'
				onClick={() => handleNavChange(text)}
				fontWeight={currentTab === text ? '600' : '400'}
				color={currentTab === text ? 'brand.black' : ''}
				borderBottom='2px solid'
				borderColor={currentTab === text ? 'brand.primary' : 'transparent'}
			>
				<Link href={href}>
					<a style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						{currentTab === text ? NavIcons[text.toLowerCase()].active : NavIcons[text.toLowerCase()].normal}
						{text}
					</a>
				</Link>
			</Text>
		)
	}


	// Component return
	return (
		<HStack
			// spacing={20}
			justifyContent='space-between'
			height='65px'
			minHeight='65px'
			width='100%'
			bg='brand.white'
			borderBottom='1px solid'
			borderColor='brand.grey200'
			display='flex'
			alignItems='center'
			p='0 32px'
			color='brand.black'
		>
			{/* <ClientsDropDown /> */}
			{/* <Divider orientation='vertical' borderColor='brand.grey200' mx='30px' /> */}
			<SearchBar />
			{renderNavigation()}
			{rightSideQuickActions()}
		</HStack>
	)
}




export default Header