import Home from '../../../../public/assets/icons/navigation/home.svg'
import Dashboard from '../../../../public/assets/icons/navigation/dashboard.svg'
import Inbox from '../../../../public/assets/icons/navigation/inbox.svg'
import Jobs from '../../../../public/assets/icons/navigation/jobs.svg'
import Candidates from '../../../../public/assets/icons/navigation/candidates.svg'
import Settings from '../../../../public/assets/icons/navigation/settings.svg'

export type NavItem = {
  text: string
  Icon: JSX.Element
}

export const RecruiterNavItems = {
  quick: [
    {
      text: 'Dashboard',
      Icon: <Dashboard />
    },
    {
      text: 'Inbox',
      Icon: <Inbox />
    },
    {
      text: 'Feed',
      Icon: <Home />
    },
  ],
  workspace: [
    {
      text: 'Jobs',
      Icon: <Jobs />
    },
    {
      text: 'Candidates',
      Icon: <Candidates />
    }
  ],
  more: [
    {
      text: 'Settings',
      Icon: <Settings />
    }
  ]
}