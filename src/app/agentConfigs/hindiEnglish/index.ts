import hindiTeacherAgent from './hindiTeacher';
import { injectTransferTools } from '../utils';

const agents = injectTransferTools([hindiTeacherAgent]);

export default agents;