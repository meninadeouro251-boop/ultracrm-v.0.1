declare module '@rails/actioncable' {
  export interface Consumer {
    subscriptions: {
      create(
        channel: string | object,
        callbacks?: {
          connected?: () => void;
          disconnected?: () => void;
          received?: (data: any) => void;
        }
      ): Subscription;
    };
    disconnect(): void;
  }

  export interface Subscription {
    unsubscribe(): void;
    perform(action: string, data?: any): void;
    send(data: any): void;
  }

  export function createConsumer(url: string): Consumer;
}
