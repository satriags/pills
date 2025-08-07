export class WebResponse<T> {
  code?: number;
  message?: string;
  payload?: T;
  errors?: string;
  metadata?: Paging;
  total_data?: number;
}

export class Paging {
  per_page: number;
  total_data: number;
  current_page: number;
}

export class ErrorResponse {
  errors: string;
}
