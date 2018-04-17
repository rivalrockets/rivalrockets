import { Revision } from '../revisions/revision';

export class Futuremark3dMarkResult {
    id: number;
    result_date: Date;
    icestorm_score: number;
    icestorm_result_url: string;
    cloudgate_score: number;
    cloudgate_result_url: string;
    firestrike_score: number;
    firestrike_result_url: string;
    skydiver_score: number;
    skydiver_result_url: string;
    overall_result_url: string;
    uri: string;
    revision: Revision;
}
