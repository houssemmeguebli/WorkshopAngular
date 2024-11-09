import {Foyer} from "./foyerModel";

export interface Universite {
  idUniversite: number;
  nomUniversite: string;
  adresse: string;
  foyer?: Foyer;
}

