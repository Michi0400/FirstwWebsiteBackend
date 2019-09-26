import { AngabeDTO } from "./angabe.dto";

export interface QuestionDTO {
    name: string;

    description: string;

    angaben: AngabeDTO[];

    anleitung: string;
}