export interface IntegrationFormProps {
  config: Record<string, unknown>;
  onConfigChange: (key: string, value: any) => void;
  isExpanded?: boolean;
}

export type GetConfigValue = (key: string, defaultValue?: string) => string;
export type GetConfigBoolean = (key: string, defaultValue?: boolean) => boolean;

