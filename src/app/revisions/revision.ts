import { Machine } from '../machines/machine';

export class Revision {
    id: number;
    cpu_make: string;
    cpu_name: string;
    cpu_socket: string;
    cpu_mhz: string;
    cpu_proc_cores: string;
    chipset: string;
    system_memory_gb: string;
    system_memory_mhz: string;
    gpu_name: string;
    gpu_make: string;
    gpu_memory_gb: string;
    revision_notes: string;
    revision_notes_html: string;
    pcpartpicker_url: string;
    timestamp: Date;
    uri: string;
    machine: Machine;
}
