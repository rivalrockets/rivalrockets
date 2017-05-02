import { CinebenchR15Result } from '../cinebenchr15results/cinebenchr15result';
export class Revision {
    id: number;
    cpu_make: string;
    cpu_name: string;
    cpu_socket: string;
    cpu_mhz: number;
    cpu_proc_cores: number;
    chipset: string;
    system_memory_gb: number;
    system_memory_mhz: number;
    gpu_name: string;
    gpu_make: string;
    gpu_memory_mb: number;
    gpu_count: number;
    revision_notes: string;
    revision_notes_html: string;
    pcpartpicker_url: string;
    timestamp: string;
    author_id: number;
    machine_id: number;
    cinebenchr15results: CinebenchR15Result[];
    // TODO: futuremark3dmark06results
    // TODO: futuremark3dmarkresults
}