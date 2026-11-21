import PageController from './PageController'
import MessageController from './MessageController'
import AuthController from './AuthController'
import DashboardController from './DashboardController'
import ActivityLogController from './ActivityLogController'
import ProjectController from './ProjectController'
import SkillController from './SkillController'
import ExperienceController from './ExperienceController'
import EducationController from './EducationController'
import ProfileController from './ProfileController'
const Controllers = {
    PageController: Object.assign(PageController, PageController),
MessageController: Object.assign(MessageController, MessageController),
AuthController: Object.assign(AuthController, AuthController),
DashboardController: Object.assign(DashboardController, DashboardController),
ActivityLogController: Object.assign(ActivityLogController, ActivityLogController),
ProjectController: Object.assign(ProjectController, ProjectController),
SkillController: Object.assign(SkillController, SkillController),
ExperienceController: Object.assign(ExperienceController, ExperienceController),
EducationController: Object.assign(EducationController, EducationController),
ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Controllers