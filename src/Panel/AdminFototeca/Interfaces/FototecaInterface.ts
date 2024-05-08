// respuesta del servidor
export interface res {
  succes: string;
}
// error del servidor
export interface Error {
  message: string;
  errors: Errors;
}

export interface Errors {
  imagen?: string[];
  seccion?: string[];
}
// consulta de lista del servidor
export interface Data {
  succes: Succe[];
}

export interface Succe {
  id: number;
  imagen: string;
  seccion: number;
  created_at: Date;
  updated_at: Date;
}
