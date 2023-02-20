export type AdapterType = () => void;

export interface EndpointConfig {
  ordered?: boolean;
  crud: boolean;
  procedure: string;
}

export interface GenConfig {
  adapter: AdapterType;
  procedures: readonly string[];
  endpoints: {
    [key: string]: EndpointConfig;
  };
}
