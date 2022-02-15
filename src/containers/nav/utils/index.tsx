import Home from '../../../../public/assets/icons/home.svg'
import Dashboard from '../../../../public/assets/icons/dashboard.svg'
import Inbox from '../../../../public/assets/icons/inbox.svg'
import Jobs from '../../../../public/assets/icons/jobs.svg'
import Candidates from '../../../../public/assets/icons/candidates.svg'
import Settings from '../../../../public/assets/icons/settings.svg'

export type NavItem = {
  text: string
  Icon: JSX.Element
}

export const RecruiterNavItems = {
  quick: [
    {
      text: 'Home',
      Icon: <Home />
    },
    {
      text: 'Inbox',
      Icon: <Inbox />
    }
  ],
  workspace: [
    {
      text: 'Dashboard',
      Icon: <Dashboard />
    },
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