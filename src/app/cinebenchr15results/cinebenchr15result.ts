import { Revision } from '../revisions/revision';

export class CinebenchR15Result {
    id: number;
    result_date: Date;
    cpu_cb: number;
    opengl_fps: number;
    uri: string;
    revision: Revision;
}
