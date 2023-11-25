export const Path = {
  orders: '/orders',
  restaurants: '/restaurants',
};

export class ApiError extends Error {
  status: number;

  error: unknown;

  constructor(message: string, status: number, error: unknown) {
    super(message);

    this.status = status;
    this.error = error;
  }
}

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const Status = {
  OK: 200,
  BAD: 400,
  CREATED: 201,
} as const;

type MethodValueType = typeof Method[keyof typeof Method];
type StatusValueType = typeof Status[keyof typeof Status];

interface Res<T> {
  data: T;
  status: StatusValueType;
  message: string;
}

export const httpRequest = async <T>(url: string, method: MethodValueType, body?: any) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method,
      body,
    };

    if (body) config.body = JSON.stringify(body);

    const response = await fetch(`http://localhost:3000${url}`, config);
    const jsonData = await response.json() as T;

    const [data] = Object.values(jsonData as object);

    const res = { status: response.status, message: 'succss', data } as Res<T>;

    if (response.status !== Status.OK && response.status !== Status.CREATED) throw new ApiError('API ERROR', response.status, jsonData);

    return res;
  } catch (error: unknown) {
    if (error instanceof ApiError) throw error;

    throw new ApiError('Server Error', Status.BAD, error);
  }
};
