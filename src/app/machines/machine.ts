import { Revision } from '../revisions/revision';
import { User } from '../users/user';

export class Machine {
    id: number;
    system_name: string;
    system_notes: string;
    system_notes_html: string;
    owner: string;
    active_revision: Revision;
    timestamp: Date;
    uri: string;
    user: User;
}
