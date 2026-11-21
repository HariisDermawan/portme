import messages from './messages'
import logs from './logs'
import projects from './projects'
import skills from './skills'
import experiences from './experiences'
import educations from './educations'
import profile from './profile'
const admin = {
    messages: Object.assign(messages, messages),
logs: Object.assign(logs, logs),
projects: Object.assign(projects, projects),
skills: Object.assign(skills, skills),
experiences: Object.assign(experiences, experiences),
educations: Object.assign(educations, educations),
profile: Object.assign(profile, profile),
}

export default admin